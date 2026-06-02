'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardVariants } from '@/lib/animations';

const pageGroups = [
  {
    title: "Home",
    pages: [
      { name: "Home V1", gradient: "from-gray-800 to-gray-900" },
      { name: "Home V2", gradient: "from-blue-900/20 to-gray-900" },
      { name: "Home V3", gradient: "from-purple-900/20 to-gray-900" },
    ]
  },
  {
    title: "About",
    pages: [
      { name: "About V1", gradient: "from-emerald-900/20 to-gray-900" },
      { name: "About V2", gradient: "from-cyan-900/20 to-gray-900" },
    ]
  },
  {
    title: "Services",
    pages: [
      { name: "Services V1", gradient: "from-amber-900/20 to-gray-900" },
      { name: "Services V2", gradient: "from-rose-900/20 to-gray-900" },
      { name: "Service Single", gradient: "from-teal-900/20 to-gray-900" },
    ]
  },
  {
    title: "Blog",
    pages: [
      { name: "Blog V1", gradient: "from-indigo-900/20 to-gray-900" },
      { name: "Blog V2", gradient: "from-violet-900/20 to-gray-900" },
      { name: "Blog Post", gradient: "from-fuchsia-900/20 to-gray-900" },
    ]
  },
  {
    title: "Contact",
    pages: [
      { name: "Contact V1", gradient: "from-sky-900/20 to-gray-900" },
      { name: "Contact V2", gradient: "from-orange-900/20 to-gray-900" },
    ]
  },
  {
    title: "Team",
    pages: [
      { name: "Team", gradient: "from-lime-900/20 to-gray-900" },
      { name: "Team Member", gradient: "from-pink-900/20 to-gray-900" },
    ]
  },
  {
    title: "Pricing",
    pages: [
      { name: "Pricing V1", gradient: "from-blue-900/30 to-gray-900" },
      { name: "Pricing V2", gradient: "from-purple-900/30 to-gray-900" },
    ]
  },
  {
    title: "Integrations",
    pages: [
      { name: "Integrations", gradient: "from-cyan-900/30 to-gray-900" },
      { name: "Integration Single", gradient: "from-emerald-900/30 to-gray-900" },
    ]
  },
];

export default function MainPages() {
  return (
    <section id="pages" className="py-20 md:py-32 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
        >
          Main pages
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-16"
        >
          Explore all the pages included in the Robotflow template
        </motion.p>

        {pageGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3
              className={`text-xl font-semibold text-white mb-6 ${groupIndex === 0 ? 'mt-0' : 'mt-12'}`}
            >
              {group.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {group.pages.map((page) => (
                <motion.div
                  key={page.name}
                  variants={cardVariants}
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(0,0,0,0.3)" }}
                  className="group cursor-pointer"
                >
                  <div className={`aspect-[4/3] bg-gradient-to-br ${page.gradient} rounded-md border border-gray-700/30 overflow-hidden mb-3`}>
                    {/* Decorative UI elements */}
                    <div className="p-4 space-y-2 opacity-60 group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gray-600/50" />
                        <div className="h-1.5 w-1/4 bg-gray-600 rounded" />
                      </div>
                      <div className="h-1 w-2/3 bg-gray-600/50 rounded" />
                      <div className="h-1 w-1/2 bg-gray-600/50 rounded" />
                      <div className="mt-3 h-6 w-full bg-gray-700/30 rounded" />
                      <div className="grid grid-cols-2 gap-1.5 mt-2">
                        <div className="h-4 bg-gray-700/30 rounded" />
                        <div className="h-4 bg-gray-700/30 rounded" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors text-center">
                    {page.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
