import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { Code2, Lightbulb, Cloud } from 'lucide-react';

const whatIdo = [
  {
    icon: <Code2 size={20} />,
    title: 'Development',
    content: 'Python, TypeScript, React, Next.js, Django, FastAPI, REST APIs, PostgreSQL, Supabase, RBAC',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'AI & Automation',
    content: 'RAG pipelines, multi-agent orchestration (LangGraph, Google ADK), LLM APIs, pgvector, n8n workflow automation',
  },
  {
    icon: <Cloud size={20} />,
    title: 'Cloud & Deployment',
    content: 'Microsoft Azure VMs, Docker, self-hosted Coolify, Linux, GitHub webhooks, production troubleshooting',
  },
];

const About: React.FC = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left side - intro */}
        <div>
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-foreground-muted mb-4">
            About me
          </p>
          <h2 className="font-display text-foreground text-3xl sm:text-[2.75rem] leading-tight tracking-tight mb-6">
            A small <span className="font-bold">Introduction</span>
          </h2>
          <p className="text-foreground-muted text-base leading-relaxed">
            I'm Piyush Tamoli, a B.Tech CSE (AI & ML) student at RGPV, Bhopal, and a software
            developer intern at WES Foundation since Dec 2025. I turn real-world workflows into
            production software: Django and React platforms for schools and volunteers, RAG
            systems, and AI agents. I also deploy and run what I build on Azure with Docker
            and Coolify, and I'm the technical founder of Innoalaxy, an AI automation startup
            for Indian SMEs.
          </p>
        </div>

        {/* Right side - what I do */}
        <div>
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-foreground-muted mb-6">
            What I like to do
          </p>
          <div className="space-y-5">
            {whatIdo.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 text-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                    <p className="text-foreground-muted text-[13px] leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
