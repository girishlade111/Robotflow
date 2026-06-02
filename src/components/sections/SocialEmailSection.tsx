'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardVariants } from '@/lib/animations';
import { ChevronRight } from 'lucide-react';

export default function SocialEmailSection() {
  return (
    <section className="py-20 md:py-32 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Part 1 - Social Media Assets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-24">
          {/* Left - Device mockups */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {/* Long horizontal device mockup 1 */}
              <div className="bg-[#0a0a0a] border border-gray-800/50 rounded-md p-3">
                <div className="aspect-[16/9] bg-gradient-to-br from-gray-800 to-gray-900 rounded flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-gray-700 rounded-full mx-auto" />
                    <div className="h-2 w-20 bg-gray-700 rounded mx-auto" />
                    <div className="h-1.5 w-32 bg-gray-700/50 rounded mx-auto" />
                  </div>
                </div>
              </div>
              {/* Long horizontal device mockup 2 */}
              <div className="bg-[#0a0a0a] border border-gray-800/50 rounded-md p-3">
                <div className="aspect-[16/9] bg-gradient-to-br from-gray-800 to-gray-900 rounded flex items-center justify-center">
                  <div className="flex items-center gap-4 px-6">
                    <div className="w-16 h-16 bg-gray-700 rounded-lg" />
                    <div className="flex-1 space-y-2">
                      <div className="h-2 w-1/3 bg-gray-700 rounded" />
                      <div className="h-1.5 w-2/3 bg-gray-700/50 rounded" />
                      <div className="h-1.5 w-1/2 bg-gray-700/50 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Social Media Assets
            </h3>
            <p className="text-gray-400 mb-6">
              Professionally designed social media templates to maintain brand
              consistency across all platforms.
            </p>
            <ul className="space-y-3">
              {[
                'Instagram posts & stories',
                'Twitter/X headers',
                'LinkedIn banners',
                'Facebook covers',
                'YouTube thumbnails',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-gray-300 text-sm"
                >
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Part 2 - Email Signature */}
        <div>
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-white mb-4"
          >
            Email Signature
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-400 mb-8"
          >
            Professional email signatures that match your brand identity.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {/* Signature preview 1 */}
            <motion.div
              variants={cardVariants}
              className="bg-[#0a0a0a] border border-gray-800/50 rounded-md p-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-gray-400 text-xs font-bold">JD</span>
                </div>
                <div>
                  <div className="h-2 w-16 bg-gray-600 rounded" />
                  <div className="h-1.5 w-24 bg-gray-700/50 rounded mt-1" />
                </div>
              </div>
              <div className="h-px bg-gray-800 mb-2" />
              <div className="space-y-1">
                <div className="h-1 w-20 bg-gray-700/50 rounded" />
                <div className="h-1 w-16 bg-gray-700/50 rounded" />
              </div>
            </motion.div>

            {/* Signature preview 2 */}
            <motion.div
              variants={cardVariants}
              className="bg-[#0a0a0a] border border-gray-800/50 rounded-md p-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 text-xs font-bold">AK</span>
                </div>
                <div>
                  <div className="h-2 w-20 bg-gray-600 rounded" />
                  <div className="h-1.5 w-28 bg-gray-700/50 rounded mt-1" />
                </div>
              </div>
              <div className="h-px bg-gray-800 mb-2" />
              <div className="space-y-1">
                <div className="h-1 w-24 bg-gray-700/50 rounded" />
                <div className="h-1 w-20 bg-gray-700/50 rounded" />
              </div>
            </motion.div>

            {/* Signature preview 3 */}
            <motion.div
              variants={cardVariants}
              className="bg-[#0a0a0a] border border-gray-800/50 rounded-md p-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-900/30 rounded-full flex items-center justify-center">
                  <span className="text-purple-400 text-xs font-bold">SM</span>
                </div>
                <div>
                  <div className="h-2 w-14 bg-gray-600 rounded" />
                  <div className="h-1.5 w-[5.5rem] bg-gray-700/50 rounded mt-1" />
                </div>
              </div>
              <div className="h-px bg-gray-800 mb-2" />
              <div className="space-y-1">
                <div className="h-1 w-[4.5rem] bg-gray-700/50 rounded" />
                <div className="h-1 w-14 bg-gray-700/50 rounded" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
