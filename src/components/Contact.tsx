import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { usePortfolioData } from '../hooks/usePortfolioData';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();
  const { personalInfo, socialLinks } = usePortfolioData();

  const socialPlatforms = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: socialLinks.linkedin,
      color: 'hover:bg-[#0077B5] hover:border-[#0077B5]',
      description: t('contact.socialDescriptions.linkedin'),
    },
    {
      name: 'GitHub',
      icon: Github,
      url: socialLinks.github,
      color: 'hover:bg-[#333] hover:border-[#333]',
      description: t('contact.socialDescriptions.github'),
    },
    {
      name: 'Telegram',
      icon: Send,
      url: socialLinks.telegram,
      color: 'hover:bg-[#0088CC] hover:border-[#0088CC]',
      description: t('contact.socialDescriptions.telegram'),
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#0a0a0f]" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {t('contact.title')} <span className="text-teal-400">{t('contact.titleHighlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main CTA - Write to me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <a
            href={`https://t.me/${socialLinks.telegramUsername.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/30 rounded-2xl p-8 hover:border-teal-500/60 transition-all hover:shadow-lg hover:shadow-teal-500/10"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                  <Send size={28} className="text-teal-400" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-white mb-1">{t('contact.writeToMe')}</h3>
                  <p className="text-gray-400">{t('contact.connectViaTelegram')}</p>
                  <p className="text-teal-400 font-medium mt-1">{socialLinks.telegramUsername}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-teal-400 group-hover:translate-x-2 transition-transform">
                <span className="font-medium">{t('contact.sendMessage')}</span>
                <ExternalLink size={20} />
              </div>
            </div>
          </a>
        </motion.div>

        {/* Social Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-center text-gray-400 text-sm uppercase tracking-wider mb-8">
            {t('contact.followOnSocial')}
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {socialPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className={`group flex flex-col items-center p-6 bg-[#12121a] border border-gray-800/50 rounded-2xl transition-all duration-300 ${platform.color} hover:scale-105`}
              >
                <platform.icon size={36} className="text-gray-400 group-hover:text-white transition-colors mb-4" />
                <span className="font-semibold text-white mb-1">{platform.name}</span>
                <span className="text-gray-500 text-sm text-center">{platform.description}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-3 text-gray-400"
        >
          <MapPin size={20} className="text-teal-400" />
          <span>{personalInfo.location}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
