import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { usePortfolioData } from '../hooks/usePortfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  const { personalInfo } = usePortfolioData();

  return (
    <footer className="py-8 bg-[#0a0a0f] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} {personalInfo.name}. {t('footer.rights')}
          </p>

          {/* Made with love */}
          <p className="text-gray-500 text-sm flex items-center gap-1">
            {t('footer.madeWith')}
            <Heart size={14} className="text-teal-500" fill="currentColor" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
