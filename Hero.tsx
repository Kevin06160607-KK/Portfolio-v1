import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaDatabase, FaLaptopCode } from 'react-icons/fa';
import { ArrowDown, ExternalLink, Download } from 'lucide-react';

const roles = [
  'Aspiring Full Stack Developer',
  'Frontend Developer',
  'Web Developer',
  'Continuous Learner',
  'Software Engineer',
];

const floatingIcons = [
  { Icon: FaCode, color: '#00F5D4', delay: 0, x: '10%', y: '20%' },
  { Icon: FaServer, color: '#FF2E88', delay: 1, x: '85%', y: '15%' },
  { Icon: FaDatabase, color: '#FFD700', delay: 2, x: '15%', y: '70%' },
  { Icon: FaLaptopCode, color: '#7CFF6B', delay: 3, x: '80%', y: '75%' },
];

const Hero: React.FC = () => {
  const typedText = useTypingEffect(roles, 80, 40, 2500);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30 animate-mesh" />

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:block"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div
            className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center"
            style={{ boxShadow: `0 0 20px ${item.color}30` }}
          >
            <item.Icon className="w-6 h-6" style={{ color: item.color }} />
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1 bg-gradient-to-br from-primary-accent via-secondary-accent to-highlight mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden bg-background flex items-center justify-center">
                <img
                  src="/profile.jpg"
                  alt="Karthikeyan Ulaganathan"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<span class="text-6xl font-bold text-gradient font-display">K</span>';
                  }}
                />
              </div>
            </div>
            <motion.div
              className="absolute -inset-2 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #00F5D4, #FF2E88, #FFD700, #7CFF6B)',
                opacity: 0.3,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-text-secondary text-lg mb-2 font-medium">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-4">
            <span className="text-gradient">Karthikeyan</span>
            <br />
            <span className="text-white">Ulaganathan</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <div className="h-8 sm:h-10 flex items-center justify-center">
            <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-accent font-display">
              {typedText}
              <span className="inline-block w-0.5 h-6 sm:h-8 bg-primary-accent ml-1 animate-blink" />
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-text-secondary max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed"
        >
          Computer Science & Engineering student passionate about building modern, 
          responsive, and user-friendly web applications with clean UI/UX.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link to="projects" smooth={true} duration={500} offset={-80}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-accent to-secondary-accent text-white font-semibold text-sm sm:text-base flex items-center gap-2 shadow-lg hover:shadow-primary-accent/25 transition-shadow duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              View Projects
            </motion.button>
          </Link>

          <a
            href="https://drive.google.com/file/d/placeholder/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-xl glass-card border border-white/10 text-white font-semibold text-sm sm:text-base flex items-center gap-2 hover:border-primary-accent/50 transition-all duration-300"
            >
              <Download className="w-5 h-5 text-primary-accent" />
              Download Resume
            </motion.button>
          </a>

          <Link to="contact" smooth={true} duration={500} offset={-80}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-xl glass-card border border-white/10 text-white font-semibold text-sm sm:text-base flex items-center gap-2 hover:border-secondary-accent/50 transition-all duration-300"
            >
              <FaEnvelope className="w-5 h-5 text-secondary-accent" />
              Contact Me
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/Kevin06160607-KK"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
          >
            <FaGithub className="w-5 h-5 text-text-secondary group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/karthikeyan-ulaganathan-85320a402"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
          >
            <FaLinkedin className="w-5 h-5 text-text-secondary group-hover:text-primary-accent transition-colors" />
          </a>
          <a
            href="mailto:karthi06160607@gmail.com"
            className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
          >
            <FaEnvelope className="w-5 h-5 text-text-secondary group-hover:text-secondary-accent transition-colors" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Link to="about" smooth={true} duration={500} offset={-80}>
          <ArrowDown className="w-6 h-6 text-text-secondary/50 cursor-pointer hover:text-primary-accent transition-colors" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
