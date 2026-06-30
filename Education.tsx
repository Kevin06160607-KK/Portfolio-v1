import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science and Engineering',
    institution: "King's College of Engineering",
    location: 'Thanjavur, Tamil Nadu',
    period: '2023 - 2027',
    status: 'Pursuing',
    color: '#00F5D4',
  },
  {
    degree: 'Higher Secondary Education',
    field: 'Computer Science',
    institution: 'Government Higher Secondary School',
    location: 'Pudukkottai, Tamil Nadu',
    period: '2021 - 2023',
    status: 'Completed',
    color: '#FF2E88',
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-accent text-sm font-semibold tracking-wider uppercase mb-3 block">Academics</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            Education <span className="text-gradient">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-accent via-secondary-accent to-highlight opacity-30" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
            >
              {/* Timeline Dot */}
              <div
                className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 border-background z-10 -translate-x-1/2"
                style={{ backgroundColor: edu.color, top: '24px' }}
              />

              <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card rounded-2xl p-6 gradient-border glass-card-hover"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${edu.color}15` }}
                      >
                        <GraduationCap className="w-6 h-6" style={{ color: edu.color }} />
                      </div>
                      <div>
                        <h3 className="font-bold font-display text-lg">{edu.degree}</h3>
                        <p className="text-primary-accent text-sm font-medium">{edu.field}</p>
                      </div>
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: edu.color === '#00F5D4' ? `${edu.color}15` : `${edu.color}15`,
                        color: edu.color,
                      }}
                    >
                      {edu.status}
                    </span>
                  </div>

                  <p className="text-white font-medium mb-1">{edu.institution}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
