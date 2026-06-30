import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCode } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiVite, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  level: number;
  category: string;
}

const skillsData: Skill[] = [
  // Frontend
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 90, category: 'Frontend' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 85, category: 'Frontend' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 80, category: 'Frontend' },
  { name: 'React.js', icon: FaReact, color: '#61DAFB', level: 70, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 75, category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 60, category: 'Frontend' },

  // Backend
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 55, category: 'Backend' },
  { name: 'Express.js', icon: SiExpress, color: '#FFFFFF', level: 50, category: 'Backend' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 45, category: 'Backend' },

  // Tools
  { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 75, category: 'Tools' },
  { name: 'GitHub', icon: FaGithub, color: '#FFFFFF', level: 80, category: 'Tools' },
  { name: 'VS Code', icon: VscVscode, color: '#007ACC', level: 85, category: 'Tools' },
  { name: 'Vite', icon: SiVite, color: '#646CFF', level: 70, category: 'Tools' },
];

const categories = ['Frontend', 'Backend', 'Tools'];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-accent text-sm font-semibold tracking-wider uppercase mb-3 block">My Skills</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto rounded-full" />
        </motion.div>

        {categories.map((category, catIndex) => (
          <div key={category} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xl font-semibold font-display mb-6 flex items-center gap-3"
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor:
                    category === 'Frontend' ? '#00F5D4' : category === 'Backend' ? '#FF2E88' : '#FFD700',
                }}
              />
              {category}
              <span className="text-text-secondary/40 text-sm font-normal">
                ({skillsData.filter((s) => s.category === category).length} skills)
              </span>
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillsData
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -3 }}
                    className="glass-card rounded-2xl p-5 glass-card-hover transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${skill.color}15` }}
                      >
                        <skill.icon
                          className="w-6 h-6"
                          style={{ color: skill.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{skill.name}</h4>
                        <span className="text-xs text-text-secondary/60">{skill.level}% Proficiency</span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          backgroundColor: skill.color,
                          boxShadow: `0 0 10px ${skill.color}40`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
