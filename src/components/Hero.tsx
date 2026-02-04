import { motion } from 'framer-motion';
import { Github, Linkedin, Send, ChevronDown, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { usePortfolioData } from '../hooks/usePortfolioData';

// Floating shapes component
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles - left side */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`left-${i}`}
          className="absolute w-1.5 h-1.5 bg-teal-400/40 rounded-full"
          style={{
            top: `${15 + i * 10}%`,
            left: `${5 + i * 5}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Floating particles - right side */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`right-${i}`}
          className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
          style={{
            top: `${20 + i * 12}%`,
            right: `${8 + i * 4}%`,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.7,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Code-like floating elements */}
      {['</', '/>', '{}', '()', '[]'].map((symbol, i) => (
        <motion.span
          key={symbol}
          className="absolute text-teal-500/20 font-mono text-2xl"
          style={{
            top: `${25 + i * 15}%`,
            left: `${3 + i * 8}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {symbol}
        </motion.span>
      ))}

      {/* Pulsing corner dots */}
      <motion.div
        className="absolute top-32 right-32 w-3 h-3 bg-teal-400/50 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-2 h-2 bg-cyan-400/50 rounded-full"
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.5, 0.1, 0.5],
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
    </div>
  );
};

// Orbiting dots around profile image
const OrbitingDots = () => {
  const dots = [
    { size: 'w-3 h-3', color: 'bg-teal-400', orbit: '-inset-6', duration: 8 },
    { size: 'w-2 h-2', color: 'bg-cyan-400', orbit: '-inset-10', duration: 12 },
    { size: 'w-2.5 h-2.5', color: 'bg-emerald-400', orbit: '-inset-14', duration: 15 },
    { size: 'w-1.5 h-1.5', color: 'bg-teal-300', orbit: '-inset-8', duration: 10 },
  ];

  return (
    <>
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className={`absolute ${dot.orbit} rounded-full pointer-events-none`}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: dot.duration, repeat: Infinity, ease: "linear" }}
        >
          <div
            className={`absolute ${dot.size} ${dot.color} rounded-full shadow-lg`}
            style={{
              top: '50%',
              left: i % 2 === 0 ? '0%' : '100%',
              transform: 'translate(-50%, -50%)',
              boxShadow: `0 0 10px ${dot.color.includes('teal') ? '#14b8a6' : dot.color.includes('cyan') ? '#22d3ee' : '#34d399'}`,
            }}
          />
          {/* Second dot on opposite side */}
          <div
            className={`absolute ${dot.size} ${dot.color}/60 rounded-full`}
            style={{
              top: '50%',
              left: i % 2 === 0 ? '100%' : '0%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </motion.div>
      ))}
    </>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  const { personalInfo, roles, socialLinks } = usePortfolioData();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative"
    >
      <FloatingShapes />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} className="text-teal-400" />
              </motion.div>
              <span className="text-teal-300 text-sm">{t('hero.welcome')}</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Roles - animated gradient badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6"
            >
              {roles.map((role, index) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-default ${
                    index === 0
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/30'
                      : 'bg-[#1a1a24] text-gray-300 border border-gray-700 hover:border-teal-500/50'
                  }`}
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-400 mb-8 text-lg max-w-lg mx-auto lg:mx-0"
            >
              {personalInfo.description}
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center lg:justify-start space-x-4 mb-8"
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1a1a24] rounded-full hover:bg-teal-500/20 hover:text-teal-400 transition-all duration-300 group"
              >
                <Github size={22} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1a1a24] rounded-full hover:bg-teal-500/20 hover:text-teal-400 transition-all duration-300 group"
              >
                <Linkedin size={22} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1a1a24] rounded-full hover:bg-teal-500/20 hover:text-teal-400 transition-all duration-300 group"
              >
                <Send size={22} className="group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 rounded-full font-medium transition-all text-center shadow-lg shadow-teal-500/25"
              >
                {t('hero.viewProjects')}
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#1a1a24] border border-teal-500/50 hover:bg-teal-500/20 hover:border-teal-400 rounded-full font-medium transition-all text-center"
              >
                {t('hero.contactMe')}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Orbiting dots */}
              <OrbitingDots />

              {/* Animated rings */}
              <motion.div
                className="absolute -inset-4 rounded-full border border-teal-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-8 rounded-full border border-cyan-500/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-12 rounded-full border border-dashed border-teal-500/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Profile image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#1a1a24]">
                <img
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center">
                        <span class="text-8xl">👨‍💻</span>
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#12121a] border border-teal-500/30 rounded-full flex items-center gap-2"
              >
                <motion.span
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-sm text-gray-300">{t('hero.openToWork')}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} className="text-gray-600" />
      </motion.div>
    </section>
  );
};

export default Hero;
