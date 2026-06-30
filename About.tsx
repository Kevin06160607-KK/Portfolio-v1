import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaLightbulb, FaBookOpen, FaPuzzlePiece, FaPalette, FaCode, FaMobileAlt, FaRocket, FaUsers } from 'react-icons/fa';
import { TrendingUp, Clock, FolderGit, Award } from 'lucide-react';

const traits = [
  { icon: FaLightbulb, label: 'Passionate Developer', color: '#00F5D4' },
  { icon: FaBookOpen, label: 'Continuous Learner', color: '#FF2E88' },
  { icon: FaPuzzlePiece, label: 'Problem Solver', color: '#FFD700' },
  { icon: FaPalette, label: 'UI/UX Focused', color: '#7CFF6B' },
  { icon: FaCode, label: 'Clean Code', color: '#00F5D4' },
  { icon: FaMobileAlt, label: 'Responsive Design', color: '#FF2E88' },
  { icon: FaRocket, label: 'Modern Web Dev', color: '#FFD700' },
  { icon: FaUsers, label: 'Team Player', color: '#7CFF6B' },
];

const stats = [
  { icon: FolderGit, value: '12+', label: 'Projects Completed', color: '#00F5D4' },
  { icon: Award, value: '8+', label: 'Technologies Learned', color: '#FF2E88' },
  { icon: TrendingUp, value: '12', label: 'GitHub Repositories', color: '#FFD700' },
  { icon: Clock, value: '500+', label: 'Coding Hours', color: '#7CFF6B' },
];

const About: React.FC = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-20" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-accent text-sm font-semibold tracking-wider uppercase mb-3 block">About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Who <span className="text-gradient">I Am</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 gradient-border"
          >
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              I am a <span className="text-primary-accent font-semibold">Computer Science and Engineering</span> student 
              passionate about <span className="text-secondary-accent font-semibold">Full Stack Development</span>. I enjoy 
              building modern, responsive, and user-friendly web applications with clean UI/UX.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              I continuously improve my skills by learning new technologies, developing real-world projects, 
              and solving challenging problems. My goal is to become a professional 
              <span className="text-highlight font-semibold"> Software Engineer</span> and contribute to impactful software solutions.
            </p>
            <div className="flex items-center gap-2 text-sm text-text-secondary/60">
              <span className="w-2 h-2 rounded-full bg-extra-accent animate-pulse" />
              Currently learning React.js, Node.js & MongoDB
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {traits.map((trait, index) => (
              <motion.div
                key={trait.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-2xl p-5 flex flex-col items-center gap-3 cursor-pointer glass-card-hover transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${trait.color}15` }}
                >
                  <trait.icon className="w-6 h-6" style={{ color: trait.color }} />
                </div>
                <span className="text-sm font-medium text-center">{trait.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card rounded-2xl p-6 text-center glass-card-hover"
            >
              <div
                className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <stat.icon className="w-7 h-7" style={{ color: stat.color }} />
              </div>
              <motion.div
                className="text-3xl sm:text-4xl font-bold font-display mb-1"
                style={{ color: stat.color }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <p className="text-text-secondary text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
