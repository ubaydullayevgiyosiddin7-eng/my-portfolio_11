import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink, Play, X, Check, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { usePortfolioData } from '../hooks/usePortfolioData';

// Video component with auto-play on view
const AutoPlayVideo = ({
  src,
  onClick,
  expandText
}: {
  src: string;
  onClick: () => void;
  expandText: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="relative h-full min-h-[300px] bg-[#1a1a24] cursor-pointer group"
      onClick={onClick}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-contain"
        muted
        loop
        playsInline
      />

      {/* Play Overlay - shows when not in view */}
      <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isInView ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
          <Play size={28} className="ml-1 text-white" />
        </div>
      </div>

      {/* Expand hint on hover */}
      <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
        {expandText}
      </div>
    </div>
  );
};

// Image Gallery for mobile app screenshots
const ImageGallery = ({
  images,
  isSecret,
  onImageClick,
  comingSoonText
}: {
  images: string[];
  isSecret?: boolean;
  onImageClick: (src: string) => void;
  comingSoonText: string;
}) => {
  return (
    <div className="relative h-full min-h-[400px] bg-gradient-to-br from-[#1a1a24] to-[#12121a] flex items-center justify-center p-4">
      {/* Secret overlay gradient */}
      {isSecret && (
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-teal-900/20 pointer-events-none" />
      )}

      {/* Images container - show 2 images side by side */}
      <div className="flex gap-4 items-center justify-center h-full">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="relative cursor-pointer group"
            onClick={() => onImageClick(img)}
          >
            <img
              src={img}
              alt={`Screenshot ${idx + 1}`}
              className="h-[350px] w-auto rounded-2xl shadow-2xl object-contain border border-gray-700/50 hover:border-teal-500/50 transition-all hover:scale-105"
            />
            {/* Hover effect */}
            <div className="absolute inset-0 rounded-2xl bg-teal-500/0 group-hover:bg-teal-500/10 transition-colors" />
          </motion.div>
        ))}
      </div>

      {/* Secret badge */}
      {isSecret && (
        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30">
          <Lock size={14} className="text-purple-400" />
          <span className="text-purple-300 text-sm font-medium">{comingSoonText}</span>
        </div>
      )}

    </div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'video' | 'image'; src: string } | null>(null);
  const { t } = useTranslation();
  const { projects } = usePortfolioData();

  return (
    <section id="projects" className="py-20 bg-[#0a0a0f]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('projects.title')} <span className="text-teal-400">{t('projects.titleHighlight')}</span>
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`bg-[#12121a] rounded-2xl overflow-hidden border ${
                project.isSecret
                  ? 'border-purple-500/30 shadow-lg shadow-purple-500/10'
                  : 'border-gray-800/50'
              }`}
            >
              <div className="grid lg:grid-cols-2 items-stretch">
                {/* Left: Content */}
                <div className="p-6 md:p-8 flex flex-col">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          tag === 'Coming Soon'
                            ? 'bg-purple-500/20 text-purple-300'
                            : 'bg-teal-500/20 text-teal-300'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <ul className="space-y-3 mb-8">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            project.isSecret ? 'bg-purple-500/20' : 'bg-teal-500/20'
                          }`}>
                            <Check size={12} className={project.isSecret ? 'text-purple-400' : 'text-teal-400'} />
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Demo Link */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500 hover:bg-teal-600 rounded-xl transition-colors mt-auto w-fit"
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>

                {/* Right: Video or Images */}
                {project.video && (
                  <AutoPlayVideo
                    src={project.video}
                    onClick={() => setSelectedMedia({ type: 'video', src: project.video! })}
                    expandText={t('projects.expand')}
                  />
                )}
                {project.images && (
                  <ImageGallery
                    images={project.images}
                    isSecret={project.isSecret}
                    onImageClick={(src) => setSelectedMedia({ type: 'image', src })}
                    comingSoonText={t('projects.comingSoon')}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-lg">{t('projects.emptyState')}</p>
          </motion.div>
        )}

        {/* Media Modal */}
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
              onClick={() => setSelectedMedia(null)}
            >
              <X size={24} />
            </button>
            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              {selectedMedia.type === 'video' ? (
                <video
                  src={selectedMedia.src}
                  className="w-full rounded-xl"
                  controls
                  autoPlay
                />
              ) : (
                <img
                  src={selectedMedia.src}
                  alt="Preview"
                  className="max-h-[90vh] mx-auto rounded-xl"
                />
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
