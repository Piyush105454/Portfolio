import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project, index: number }> = ({ project, index }) => {
  const defaultOptions = {
    max: 25,
    scale: 1.05,
    speed: 450,
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
    >
      <Tilt options={defaultOptions} className="w-full">
        <div className="bg-[#1a1a2e] backdrop-blur-md bg-opacity-80 p-5 rounded-2xl w-full h-full flex flex-col shadow-[0_0_15px_rgba(30,144,255,0.15)]">
          <div className="relative w-full h-[230px] overflow-hidden rounded-xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 gap-2">
              {project.github && (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="w-1/2 h-1/2 text-white" />
                </motion.div>
              )}
              {project.link && (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="bg-[#1E90FF] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <ExternalLink className="w-1/2 h-1/2 text-white" />
                </motion.div>
              )}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{project.title}</h3>
            <p className="mt-2 text-gray-300 text-[14px]">{project.description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <p
                key={`${project.id}-${tag}`}
                className="text-[14px] text-[#39FF14]"
              >
                #{tag}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;