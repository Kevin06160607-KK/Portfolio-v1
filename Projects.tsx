import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveDemo: string;
  github: string;
  image: string;
  color: string;
}

const projectsData: Project[] = [
  {
    title: 'AI Resume Analyser',
    description: 'An AI-powered web application that analyzes resumes and provides insights for improvement. Features include keyword extraction, skill matching, and formatting suggestions.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveDemo: 'https://kevin06160607-kk.github.io/AI-RESUME-ANALYSER-/',
    github: 'https://github.com/Kevin06160607-KK/AI-RESUME-ANALYSER-',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop',
    color: '#00F5D4',
  },
  {
    title: 'Login Form UI',
    description: 'A modern responsive login interface with clean design, smooth animations, and form validation. Features dark mode support and accessibility optimizations.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveDemo: 'https://kevin06160607-kk.github.io/Login-form/',
    github: 'https://github.com/Kevin06160607-KK/Login-form-',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=500&fit=crop',
    color: '#FF2E88',
  },
  {
    title: 'Weather App',
    description: 'A responsive weather application that fetches real-time weather information using Weather API. Features location search, 5-day forecast, and dynamic weather icons.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    liveDemo: 'https://kevin06160607-kk.github.io/Weather-app/',
    github: 'https://github.com/Kevin06160607-KK/Weather-app',
    image: 'https://images.unsplash.com/photo-1592210454352-0ada6c8c0b24?w=800&h=500&fit=crop',
    color: '#FFD700',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-accent text-sm font-semibold tracking-wider uppercase mb-3 block">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto rounded-full mb-4" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            Showcasing my best work with modern technologies and clean architecture
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glass-card rounded-3xl overflow-hidden gradient-border transition-all duration-500 group-hover:shadow-2xl"
                style={{ boxShadow: `0 0 0 transparent` }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div
                    className="absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md"
                    style={{ backgroundColor: `${project.color}20`, border: `1px solid ${project.color}40` }}
                  >
                    <Code2 className="w-5 h-5" style={{ color: project.color }} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display mb-2 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: `${project.color}15`,
                          color: project.color,
                          border: `1px solid ${project.color}30`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
                      style={{
                        backgroundColor: `${project.color}15`,
                        color: project.color,
                        border: `1px solid ${project.color}30`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `${project.color}30`;
                        e.currentTarget.style.boxShadow = `0 0 15px ${project.color}20`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = `${project.color}15`;
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium glass-card hover:bg-white/10 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
