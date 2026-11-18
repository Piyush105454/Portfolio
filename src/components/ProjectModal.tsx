import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface Props {
  project: Project;
  onClose: () => void;
}

const Block: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-7">
    <h4 className="text-[11px] font-mono tracking-[0.2em] uppercase text-foreground-muted mb-3">{title}</h4>
    {children}
  </div>
);

const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  const d = project.details;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-background border border-border rounded-t-3xl sm:rounded-3xl shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="sticky top-4 float-right mr-4 mt-4 z-10 w-9 h-9 rounded-full bg-muted text-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
        >
          <X size={16} />
        </button>

        {project.image && (
          <div className="w-full aspect-[16/8] bg-muted overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="p-6 sm:p-9">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((t) => (
              <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-muted text-foreground-muted">
                {t}
              </span>
            ))}
          </div>
          <h3 className="font-display font-bold text-foreground text-2xl sm:text-3xl tracking-tight mb-5">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-85 transition-opacity"
              >
                <Github size={15} /> View code
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-foreground text-sm font-medium hover:border-foreground/40 transition-colors"
              >
                <ExternalLink size={14} /> Live site
              </a>
            )}
          </div>

          {d ? (
            <>
              <Block title="Overview">
                <p className="text-foreground text-[15px] leading-relaxed">{d.overview}</p>
              </Block>
              <Block title="The problem">
                <p className="text-foreground-muted text-[14px] leading-relaxed">{d.problem}</p>
              </Block>
              <Block title="My role">
                <p className="text-foreground-muted text-[14px] leading-relaxed">{d.role}</p>
              </Block>
              <Block title="What I built">
                <ul className="space-y-2">
                  {d.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-[14px] text-foreground-muted leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </Block>
              <Block title="Outcome">
                <ul className="space-y-2">
                  {d.outcome.map((o) => (
                    <li key={o} className="flex gap-3 text-[14px] text-foreground leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </Block>
              <Block title="Tech stack">
                <div className="space-y-3">
                  {Object.entries(d.stack).map(([layer, items]) => (
                    <div key={layer} className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-foreground-muted w-28 flex-shrink-0">{layer}</span>
                      {items.map((i) => (
                        <span key={i} className="text-[12px] px-3 py-1 rounded-full border border-border text-foreground">
                          {i}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </Block>
            </>
          ) : (
            <p className="text-foreground-muted text-[14px] leading-relaxed">{project.description}</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
