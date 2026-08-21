import { Nav } from "@/components/command-center/nav";
import { Hero } from "@/components/command-center/hero";
import { About } from "@/components/command-center/about";
import { Skills } from "@/components/command-center/skills";
import { Experience } from "@/components/command-center/experience";
import { Projects } from "@/components/command-center/projects";
import { Architecture } from "@/components/command-center/architecture";
import { Activity } from "@/components/command-center/activity";
import { Contact } from "@/components/command-center/contact";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 pb-10">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Architecture />
        <Activity />
        <Contact />
      </main>
    </>
  );
}
