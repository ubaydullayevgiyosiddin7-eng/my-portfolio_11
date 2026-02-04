import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Brain, Smartphone, Calendar, FolderGit2, Layers, Target } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "98%", label: "AI model aniqligi", icon: Target },
    { number: "4+", label: "Production loyiha", icon: FolderGit2 },
    { number: "6", label: "Til qo'llab-quvvatlash", icon: Layers },
    { number: "3", label: "Soha (AI, Web, Mobile)", icon: Calendar },
  ];

  const cards = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Sun'iy intellekt va Machine Learning sohasida loyihalar yarataman. NLP, Computer Vision va Deep Learning texnologiyalari bilan ishlayman.",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Zamonaviy web ilovalar yarataman. React, TypeScript, Node.js va boshqa texnologiyalar bilan full-stack development.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Flutter yordamida cross-platform mobil ilovalar yarataman. Android va iOS uchun bir koddan ishlaydigan ilovalar.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#0a0a0f]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Men <span className="text-teal-400">haqimda</span>
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full" />
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Salom! Men G'iyosiddin, O'zbekistonlik dasturchi. Asosan sun'iy intellekt (AI) sohasida
              ishlayman va bu soha menga juda qiziqarli. Shu bilan birga web va mobil ilovalar
              yaratish tajribam ham bor.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Har doim yangi texnologiyalarni o'rganishga va murakkab muammolarni hal qilishga
              intilaman. Mening maqsadim - texnologiya orqali odamlar hayotini yaxshilash.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Hozirda yangi loyihalar ustida ishlayman va AI sohasida chuqurroq bilim olish
              uchun o'z ustimda ishlamoqdaman.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group relative bg-[#12121a] p-6 rounded-xl border border-gray-800/50 hover:border-teal-500/50 transition-all duration-300"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-teal-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal-500/20 transition-colors">
                    <stat.icon size={22} className="text-teal-400" />
                  </div>

                  {/* Text */}
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="group relative bg-[#12121a] p-8 rounded-xl border border-gray-800/50 hover:border-teal-500/30 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors">
                  <card.icon size={28} className="text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-teal-400 transition-colors">{card.title}</h3>
                <p className="text-gray-400">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
