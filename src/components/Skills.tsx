import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { usePortfolioData } from '../hooks/usePortfolioData';
import type { SkillLevel } from '../data/portfolio';

const levelStyles: Record<SkillLevel, string> = {
  Beginner: "bg-gray-500/20 text-gray-300 border border-gray-500/30",
  Intermediate: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
  Advanced: "bg-teal-500/20 text-teal-300 border border-teal-500/30",
  Expert: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
};

const levelDots: Record<SkillLevel, string> = {
  Beginner: "bg-gray-400",
  Intermediate: "bg-blue-400",
  Advanced: "bg-teal-400",
  Expert: "bg-cyan-400",
};

const SkillItem = ({ name, level, desc, delay }: { name: string; level: SkillLevel; desc?: string; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="py-3 border-b border-gray-800/50 last:border-0"
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-gray-200 font-medium">{name}</span>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${levelStyles[level]}`}>
          {level}
        </span>
      </div>
      {desc && (
        <p className="text-gray-500 text-sm">{desc}</p>
      )}
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();
  const { skills } = usePortfolioData();

  return (
    <section id="skills" className="py-20 bg-[#12121a]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('skills.title')} <span className="text-teal-400">{t('skills.titleHighlight')}</span>
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full mb-8" />

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {(["Beginner", "Intermediate", "Advanced", "Expert"] as SkillLevel[]).map((level) => (
              <div key={level} className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${levelDots[level]}`} />
                <span className="text-gray-300">{level}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* AI Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#0a0a0f] p-8 rounded-xl border border-gray-800/50"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-3 h-3 bg-teal-500 rounded-full mr-3" />
              {t('skills.categories.ai')}
            </h3>
            {skills.ai.map((skill, index) => (
              <SkillItem key={skill.name} {...skill} delay={0.3 + index * 0.1} />
            ))}
          </motion.div>

          {/* Web Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#0a0a0f] p-8 rounded-xl border border-gray-800/50"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-3 h-3 bg-cyan-500 rounded-full mr-3" />
              {t('skills.categories.web')}
            </h3>
            {skills.web.map((skill, index) => (
              <SkillItem key={skill.name} {...skill} delay={0.3 + index * 0.1} />
            ))}
          </motion.div>

          {/* Mobile Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-[#0a0a0f] p-8 rounded-xl border border-gray-800/50"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-3 h-3 bg-emerald-500 rounded-full mr-3" />
              {t('skills.categories.mobile')}
            </h3>
            {skills.mobile.map((skill, index) => (
              <SkillItem key={skill.name} {...skill} delay={0.3 + index * 0.1} />
            ))}

            {/* Tools */}
            <h4 className="text-lg font-medium mt-8 mb-4 text-gray-300">{t('skills.tools')}</h4>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                  className="px-3 py-1 bg-[#1a1a24] rounded-full text-sm text-gray-400 hover:text-teal-400 hover:bg-teal-500/10 transition-colors cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
