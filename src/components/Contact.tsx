import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FolderGit2, Globe, MapPin, Phone, FileText, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const contactMethods = [
    {
      label: "Email Address",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: Mail,
      iconColor: "text-cyan-400",
      accentBg: "bg-cyan-500/10 border-cyan-500/30",
      external: false
    },
    {
      label: "Phone Number",
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phone}`,
      icon: Phone,
      iconColor: "text-cyan-400",
      accentBg: "bg-cyan-500/10 border-cyan-500/30",
      external: false
    },
    {
      label: "Location",
      value: PERSONAL_INFO.location,
      href: null,
      icon: MapPin,
      iconColor: "text-cyan-400",
      accentBg: "bg-cyan-500/10 border-cyan-500/30",
      external: false
    },
    {
      label: "GitHub Profile",
      value: "github.com/Kethambabu",
      href: PERSONAL_INFO.github,
      icon: FolderGit2,
      iconColor: "text-slate-200",
      accentBg: "bg-white/10 border-white/20",
      external: true
    },
    {
      label: "LinkedIn Profile",
      value: "linkedin.com/in/n-ketham-babu",
      href: PERSONAL_INFO.linkedin,
      icon: Globe,
      iconColor: "text-blue-400",
      accentBg: "bg-blue-500/10 border-blue-500/30",
      external: true
    },
    {
      label: "Curriculum Vitae",
      value: "View Official Resume",
      href: PERSONAL_INFO.resumeUrl,
      icon: FileText,
      iconColor: "text-amber-400",
      accentBg: "bg-amber-500/10 border-amber-500/30",
      external: true
    }
  ];

  return (
    <section id="contact" className="relative py-28 px-4 md:px-8 max-w-6xl mx-auto z-10 bg-transparent min-h-screen flex items-center">
      <div className="w-full">
        {/* Section Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-3"
          >
            <span className="eyebrow-text text-cyan-400">10 // CONTACT US</span>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[1px] bg-gradient-to-r from-cyan-400 to-transparent"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            className="heading-clamp font-extrabold tracking-tight text-white max-w-3xl text-shadow-cinematic"
          >
            Get In <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <p className="text-slate-300 text-sm md:text-base mt-3 max-w-xl text-shadow-subtle">
            Interested in Generative AI, Multi-Agent Systems, AI Systems Design, or building data-driven intelligent applications? Reach out directly.
          </p>
        </div>

        {/* Simple Contact Grid - Glass cards layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactMethods.map((item, index) => {
            const IconComponent = item.icon;
            const CardWrapper = item.href ? 'a' : 'div';

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={item.href ? { y: -4, transition: { duration: 0.15 } } : {}}
              >
                <CardWrapper
                  {...(item.href
                    ? {
                        href: item.href,
                        target: item.external ? "_blank" : undefined,
                        rel: item.external ? "noopener noreferrer" : undefined,
                      }
                    : {})}
                  className={`p-6 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 flex items-start gap-4 transition-all duration-300 ${
                    item.href ? 'hover:border-cyan-400/50 hover:bg-black/50 group cursor-pointer' : ''
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl ${item.accentBg} border flex items-center justify-center ${item.iconColor} shrink-0 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className="space-y-1 overflow-hidden">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider flex items-center gap-1.5">
                      {item.label}
                      {item.href && <Sparkles className="w-3 h-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </span>
                    <p className={`text-sm sm:text-base font-semibold truncate ${item.href ? 'text-white group-hover:text-cyan-300' : 'text-slate-200'} transition-colors`}>
                      {item.value}
                    </p>
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
