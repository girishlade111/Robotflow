'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardVariants } from '@/lib/animations';

export default function UtilityPages() {
  return (
    <section className="py-20 md:py-32 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
        >
          Utility pages
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-gray-400 text-center mb-16"
        >
          Essential utility pages for a complete website experience
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Coming Soon */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-[#0d0d0d] to-[#151515] rounded-md border border-gray-800/50 overflow-hidden mb-3 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-gray-600 mb-2">
                  Coming Soon
                </div>
                <div className="h-1 w-16 bg-gray-700 mx-auto rounded" />
              </div>
            </div>
            <p className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors text-center lowercase">
              coming soon
            </p>
          </motion.div>

          {/* 404 Not Found */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-[#0d0d0d] to-[#151515] rounded-md border border-gray-800/50 overflow-hidden mb-3 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-gray-600 mb-2">
                  404
                </div>
                <div className="text-lg text-gray-600">not found</div>
              </div>
            </div>
            <p className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors text-center lowercase">
              404 not found
            </p>
          </motion.div>

          {/* Password Protected */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-[#0d0d0d] to-[#151515] rounded-md border border-gray-800/50 overflow-hidden mb-3 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="flex items-center justify-center mb-2">
                  {/* Lock icon placeholder */}
                  <div className="relative">
                    <div className="w-10 h-8 bg-gray-700 rounded-sm" />
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-5 border-2 border-gray-700 border-b-0 rounded-t-full" />
                  </div>
                </div>
                <div className="text-lg text-gray-600">protected</div>
              </div>
            </div>
            <p className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors text-center lowercase">
              password protected
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
