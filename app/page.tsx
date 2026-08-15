import { profileData } from "@/data/profile";
import Image from "next/image";

function Hero() {
  return (
    <section id="hero" className="py-8">
      <div className="grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-extrabold mb-2">{profileData.name}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">{profileData.subtitle}</p>
          <p className="text-slate-700 dark:text-slate-200 max-w-2xl">{profileData.bio}</p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#projects" className="px-4 py-2 bg-primary-500 text-white rounded-md">View Projects</a>
            <a href="#contact" className="px-4 py-2 border rounded-md">Contact</a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-40 h-40 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            {/* Placeholder for profile image */}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-12">
      <h2 className="text-2xl font-semibold mb-4">About</h2>
      {profileData.about.paragraphs.map((p, idx) => (
        <p key={idx} className="mb-3 text-slate-700 dark:text-slate-200">{p}</p>
      ))}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {profileData.about.highlights.map((h) => (
          <div key={h.label} className="p-3 border rounded-md">
            <div className="text-sm text-slate-500">{h.label}</div>
            <div className="text-lg font-bold">{h.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {profileData.projects.map((proj) => (
          <div key={proj.id} className="p-4 border rounded-md">
            <h3 className="text-lg font-semibold">{proj.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{proj.description}</p>
            <div className="mt-3 flex gap-2 flex-wrap">
              {proj.tags.map((t) => (
                <div key={t} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-sm rounded">{t}</div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-3">
              {proj.liveUrl && (
                <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="text-sm text-primary-600">Live</a>
              )}
              {proj.githubUrl && (
                <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="text-sm">Code</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="space-y-6">
        {profileData.experience.map((exp) => (
          <div key={exp.company} className="p-4 border rounded-md">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold">{exp.role}</div>
                <div className="text-sm text-slate-500">{exp.company} • {exp.location}</div>
              </div>
              <div className="text-sm text-slate-400">{exp.period}</div>
            </div>
            <p className="mt-2 text-slate-700 dark:text-slate-200">{exp.description}</p>
            <div className="mt-3 flex gap-2 flex-wrap">
              {exp.technologies.map((t) => (
                <div key={t} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-sm rounded">{t}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {profileData.skillCategories.map((cat) => (
          <div key={cat.category} className="p-4 border rounded-md">
            <div className="text-lg font-semibold mb-2">{cat.category}</div>
            <ul className="space-y-2">
              {cat.skills.map((s) => (
                <li key={s.name} className="text-sm">{s.name} <span className="text-xs text-slate-500">{s.level}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-md">
          <div className="text-sm text-slate-500">Email</div>
          <a href={`mailto:${profileData.contact.email}`} className="text-lg">{profileData.contact.email}</a>
          <div className="mt-3 text-sm text-slate-500">Location</div>
          <div className="text-base">{profileData.contact.location}</div>
        </div>
        <div className="p-4 border rounded-md">
          <div className="text-sm text-slate-500">Availability</div>
          <div className="text-base">{profileData.contact.availability}</div>
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Socials</h4>
            <div className="flex gap-3">
              {profileData.socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="text-sm text-primary-600">{s.name}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
