import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { experience } from '../constants';

const Experience: React.FC = () => {
  return (
    <>
      <div className="mb-14">
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-foreground-muted mb-4">
          Experience
        </p>
        <h2 className="font-display text-foreground text-3xl sm:text-[2.75rem] leading-tight tracking-tight">
          Where I've <span className="font-bold">Worked</span>
        </h2>
        <p className="mt-6 text-foreground-muted text-base leading-relaxed max-w-xl">
          About a year of shipping production software for real users, plus mentorship
          from JPMorganChase technologists through Force for Good 2026.
        </p>
      </div>

      <div className="relative space-y-10 pl-6 sm:pl-8 border-l border-border">
        {experience.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative"
          >
            <span className="absolute -left-[31px] sm:-left-[39px] top-2 w-3 h-3 rounded-full bg-foreground ring-4 ring-background" />
            <p className="text-xs font-mono text-foreground-muted mb-2">{item.period}</p>
            <h3 className="font-display font-bold text-foreground text-lg leading-snug">{item.role}</h3>
            <p className="text-foreground-muted text-sm mt-1">
              {item.company} · {item.location}
            </p>
            <p className="text-foreground text-[14px] leading-relaxed mt-4 max-w-2xl">{item.summary}</p>
            <ul className="mt-4 space-y-2 max-w-2xl">
              {item.points.map((p) => (
                <li key={p} className="flex gap-3 text-[13.5px] text-foreground-muted leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/60 flex-shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5 mt-5">
              {item.tags.map((t) => (
                <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-muted text-foreground-muted">
                  {t}
                </span>
              ))}
            </div>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-foreground hover:underline underline-offset-2"
              >
                See the live platform <ExternalLink size={10} />
              </a>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-14 border border-border rounded-2xl p-6 max-w-2xl">
        <p className="text-xs font-mono text-foreground-muted mb-2">2024 – Sep 2028</p>
        <h3 className="font-display font-bold text-foreground text-base">
          B.Tech, Computer Science & Engineering (AI & ML)
        </h3>
        <p className="text-foreground-muted text-sm mt-1">
          School of Information Technology, RGPV · CGPA 7.59
        </p>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'experience');
