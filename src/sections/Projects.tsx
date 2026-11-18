import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <div className="mb-14">
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-foreground-muted mb-4">
          Projects
        </p>
        <h2 className="font-display text-foreground text-3xl sm:text-[2.75rem] leading-tight tracking-tight">
          Things I've <span className="font-bold">Built & Shipped</span>
        </h2>
        <p className="mt-6 text-foreground-muted text-base leading-relaxed max-w-xl">
          Production platforms and AI systems. Open any project for the problem, my role,
          what I built and the stack behind it.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} index={index} project={project} onOpen={setSelected} />
        ))}
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
