import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface Props {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

const ProjectCard: React.FC<Props> = ({ project, index, onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group cursor-pointer"
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen(project)}
      aria-label={`Open details for ${project.title}`}
    >
      {/* Image container */}
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-muted mb-4">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-foreground/90 to-foreground/60 dark:from-white/15 dark:to-white/5 flex items-center justify-center p-6 group-hover:scale-[1.04] transition-transform duration-700 ease-out">
            <span className="font-display font-bold text-background dark:text-foreground text-lg text-center leading-snug">
              {project.title}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        <div className="absolute top-3 left-3 flex gap-1.5">
          {project.featured && (
            <span className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-foreground text-background">
              Featured
            </span>
          )}
          <span className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-white/90 text-black backdrop-blur-sm">
            {project.tags[0]}
          </span>
        </div>

        <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-7 h-7 rounded-md bg-white/90 backdrop-blur-sm flex items-center justify-center text-black hover:bg-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={13} />
            </a>
          )}
        </div>
      </div>

      <div className="px-0.5">
        <h3 className="font-display font-bold text-foreground text-[15px] mb-1 group-hover:underline underline-offset-2 decoration-foreground/30">
          {project.title}
        </h3>
        <p className="text-foreground-muted text-[13px] leading-relaxed line-clamp-3 mb-3">
          {project.description}
        </p>

        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1 text-foreground text-xs font-semibold">
            Deep dive <ArrowUpRight size={12} />
          </span>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-foreground-muted hover:text-foreground text-xs font-medium transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={11} /> Code
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-foreground-muted hover:text-foreground text-xs font-medium transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Live <ExternalLink size={10} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
