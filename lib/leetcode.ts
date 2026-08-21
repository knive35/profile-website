export interface LeetCodeRecentSubmission {
  title: string;
  slug: string;
  timestamp: number;
}

export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  calendar: Record<string, number>;
  recent: LeetCodeRecentSubmission[];
}

const QUERY = `
  query userProfile($username: String!) {
    matchedUser(username: $username) {
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
      submissionCalendar
    }
    recentAcSubmissionList(username: $username, limit: 8) {
      title
      titleSlug
      timestamp
    }
  }
`;

export async function getLeetCodeStats(username: string): Promise<LeetCodeStats | null> {
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: `https://leetcode.com/u/${username}/`,
      },
      body: JSON.stringify({ query: QUERY, variables: { username } }),
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;

    const json = await res.json();
    const user = json?.data?.matchedUser;
    if (!user) return null;

    const counts: Record<string, number> = {};
    for (const s of user.submitStatsGlobal?.acSubmissionNum ?? []) {
      counts[s.difficulty] = s.count;
    }

    const recentList = json?.data?.recentAcSubmissionList ?? [];

    return {
      totalSolved: counts["All"] ?? 0,
      easySolved: counts["Easy"] ?? 0,
      mediumSolved: counts["Medium"] ?? 0,
      hardSolved: counts["Hard"] ?? 0,
      calendar: JSON.parse(user.submissionCalendar || "{}"),
      recent: recentList.map((r: { title: string; titleSlug: string; timestamp: string }) => ({
        title: r.title,
        slug: r.titleSlug,
        timestamp: Number(r.timestamp),
      })),
    };
  } catch {
    return null;
  }
}
