'use client';

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Code2, ArrowUpRight } from "lucide-react";
import SkillsLogos from "../components/skills";
import TechLogos from "../components/technologies";
import DBLogos from "../components/databases";

const experiences = [
  {
    period: "July 2025 – Aug 2025",
    title: "Summer Intern",
    place: "CoDMAV, PES University",
    description: "Worked on CuraMate, an AI-powered doctor portal enabling medical triage, symptom clarification, and real-time prescription generation. Built backend services using FastAPI and integrated ML models with PyTorch and scikit-learn."
  },
  {
    period: "August 2023 – Present",
    title: "B.Tech in CSE",
    place: "PES University, Bangalore",
    description: "Focused on backend systems, cloud fundamentals, and core CS subjects. Actively building complex projects involving distributed systems and real-time collaboration."
  },
  {
    period: "2022 – 2023",
    title: "Self Learning",
    place: "Self-Driven Systems",
    description: "Developed strong foundations in Python, C, and JavaScript. Built full-stack projects using React, Node.js, and Docker."
  },
  {
    period: "2012 – 2023",
    title: "Primary & Secondary",
    place: "BGS National Public School",
    description: "Achieved 89.33% in Class 10 and 86.4% in Class 12, building a solid foundation in mathematics and analytical problem-solving."
  },
];

export default function AboutAndExperience() {
  return (
    <section className="w-full bg-neutral-900 py-12 select-none">
      <div className="w-full pl-6 pr-6"> 
        {/* Main Grid for About and Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: About Me */}
          <div className="lg:col-span-4 lg:sticky lg:top-12">
            <div className="rounded-3xl bg-neutral-800/80 border border-white/10 backdrop-blur-sm shadow-2xl p-8">
              <h1 className="text-3xl font-extrabold tracking-tight text-white">
                About Me
              </h1>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-400">
                <p>
                  I’m currently a Final-year Computer Science Engineering student at PES University,
                  with a strong interest in backend & cloud systems and core technologies.
                </p>
                <p>
                  I’m most interested in working on projects where performance, structure,
                  scalability, and real-world relevance matter.
                </p>
                <p>
                  I enjoy experimenting, breaking things, and then breaking my head fixing them.
                </p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h2 className="mb-4 text-xl font-bold tracking-tight text-white">Contact</h2>
                <div className="flex flex-col gap-3 text-sm text-neutral-300">
                  <a href="mailto:ram.annamreddy25@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>ram.annamreddy25@gmail.com</span>
                  </a>
                  <a href="tel:+916364800996" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>+91 6364800996</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Progress Timeline */}
          <div className="lg:col-span-8 relative pl-12">
            <h2 className="text-2xl font-bold tracking-tight mb-8 text-white">
              Progress
            </h2>
            <div className="absolute left-4 lg:left-4 top-14 h-[calc(100%-56px)] w-[1px] bg-white/10" />
            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[37px] lg:-left-[37px] top-2 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-primary ring-2 ring-primary/20 transition-transform group-hover:scale-125" />
                  </div>

                  <div className="rounded-xl bg-neutral-800/40 border border-white/5 p-4 shadow-lg transition-all duration-300 hover:border-white/10 hover:bg-neutral-800/60">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
                      {exp.period}
                    </span>

                    <h3 className="mt-1 flex items-center gap-2 text-lg font-semibold text-white">
                      {exp.title}
                      {exp.title.includes("CSE") && (
                        <Image src="/pes.png" alt="PES" width={40} height={40} className="object-contain" />
                      )}
                    </h3>

                    <div className="text-xs font-medium text-neutral-500">
                      {exp.place}
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Stack Section */}
        <div className="mt-10">
          <div className="rounded-3xl bg-neutral-800/80 border border-white/10 backdrop-blur-sm shadow-2xl p-8">
            {/* Flex container to push button to the right */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Code2 className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold tracking-tight text-white">Technical Stack</h2>
              </div>
              
              {/* Projects Navigation Button */}
              <Link 
                href="/projects"
                className="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-full transition-all duration-300"
              >
                <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">View Projects</span>
                <ArrowUpRight className="h-4 w-4 text-neutral-500 group-hover:text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <SkillsLogos />
              </div>
              
              <div className="space-y-2">
                <TechLogos />
              </div>

              <div className="space-y-2">
                <DBLogos />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
