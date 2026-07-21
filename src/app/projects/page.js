"use client";

import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Code2 } from "lucide-react";
import Card from "../../components/Card.js";

export default function Home() {
  const projects = [
    {
      name: "Fortress",
      desc: "A Financial Data Processing and Access Control backend application.",
      gitHublink: "https://github.com/RamPrakhyath05/fortress",
      deploymentlink: "https://github.com/RamPrakhyath05/fortress",
      tags: ["Java", "Spring Boot", "Maven", "SQLite"],
    },
    {
      name: "Enhanced KG based LLM-RAG system",
      desc: "A more accurate and grounded content generator which uses an LLM with a Knowledge Graph as its knowledge base to reduce hallucinations and improve factual retrieval.",
      gitHublink: "https://github.com/RamPrakhyath05/enhanced-kg-llm",
      deploymentlink: "https://github.com/RamPrakhyath05/enhanced-kg-llm",
      tags: ["LLM", "RAG", "Knowledge Graph", "Python"],
    },
    {
      name: "Homeserver",
      desc: "A Personal File Server on a Local Network.",
      gitHublink: "https://github.com/RamPrakhyath05/homeserver",
      deploymentlink: "https://github.com/RamPrakhyath05/homeserver",
      tags: ["Java", "Spring Boot", "Maven", "Docker", "Watchtower", "EndeavourOS", "Linux"],
    },
    {
      name: "Mditor",
      desc: "A high-performance, real-time collaborative markdown editor featuring instant sync and live preview for distributed teams.",
      gitHublink: "https://github.com/RamPrakhyath05/Mditor",
      deploymentlink: "https://mditor-nu.vercel.app",
      tags: ["WebSockets", "React", "Node.js", "Markdown"],
    },
  ];

  return (
    <main className="text-neutral-200 selection:bg-primary/30">
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-neutral-800/50 border border-white/10 rounded-2xl">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                Projects
              </h1>
            </div>
            <p className="text-lg text-neutral-400 max-w-2xl">
              A collection of my work!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-3xl bg-neutral-900/50 border border-white/5 p-8 transition-all duration-300 hover:bg-neutral-800/50 hover:border-white/10 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-2">
                  <Github className="h-5 w-5 text-neutral-500" />
                  <ExternalLink className="h-5 w-5 text-neutral-500" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 bg-primary/10 px-2 py-1 rounded">
                  {index === 0 ? "In Progress" : "Active"}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.name}
              </h3>

              <p className="text-neutral-400 leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Link
                  href={project.gitHublink}
                  className="flex-1 text-center py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Source
                </Link>
                <Link
                  href={project.deploymentlink}
                  className="flex-1 text-center py-3 px-4 rounded-xl bg-primary text-neutral-950 text-sm font-bold hover:opacity-90 transition-opacity"
                  target="_blank"
                >
                  Demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
