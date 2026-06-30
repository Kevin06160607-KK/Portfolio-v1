import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Kevin06160607-KK', color: '#FFFFFF' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/karthikeyan-ulaganathan-85320a402', color: '#00F5D4' },
    { icon: FaEnvelope, href: 'mailto:karthi06160607@gmail.com', color: '#FF2E88' },
  ];

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'github', label: 'GitHub' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-accent to-secondary-accent flex items-center justify-center">
                  <span className="text-lg font-bold text-white font-display">K</span>
                </div>
                <span className="text-xl font-bold font-display">Karthikeyan</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Aspiring Full Stack Developer passionate about building modern, 
                responsive, and user-friendly web applications.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:scale-110 transition-all duration-300"
                    style={{ '--hover-color': link.color } as React.CSSProperties}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = link.color + '40';
                      e.currentTarget.style.boxShadow = `0 0 10px ${link.color}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <link.icon className="w-4 h-4" style={{ color: link.color }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold font-display mb-4 text-lg">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-text-secondary text-sm hover:text-primary-accent transition-colors duration-300 cursor-pointer py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold font-display mb-4 text-lg">Contact</h3>
              <div className="space-y-3 text-sm text-text-secondary">
                <p className="flex items-center gap-2">
                  <FaEnvelope className="w-4 h-4 text-primary-accent" />
                  karthi06160607@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-4 h-4 flex items-center justify-center text-primary-accent">📍</span>
                  Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-secondary/60 text-sm text-center sm:text-left">
              © {currentYear} Karthikeyan Ulaganathan. All Rights Reserved.
            </p>
            <p className="text-text-secondary/60 text-sm flex items-center gap-1">
              Built with <FaHeart className="w-3 h-3 text-secondary-accent animate-pulse" /> using React, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
