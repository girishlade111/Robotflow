'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer, cardVariants } from '@/lib/animations';

export default function SecondaryComponents() {
  return (
    <section className="py-20 md:py-32 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left Column - Figma Included */}
          <motion.div
            variants={cardVariants}
            className="bg-[#0a0a0a] border border-gray-800/50 rounded-md p-6 md:p-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Figma file included
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Get the complete Figma source file with every component and page design.
            </p>

            {/* 3 Figma preview thumbnails in a flex row */}
            <div className="flex gap-3 mb-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex-1 aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 rounded-md border border-gray-700/30 overflow-hidden"
                >
                  {/* Decorative elements: simulate Figma UI layers panel */}
                  <div className="p-3 space-y-1.5">
                    <div className="h-1.5 w-2/3 bg-gray-600 rounded" />
                    <div className="h-1 w-full bg-gray-700/50 rounded" />
                    <div className="h-1 w-4/5 bg-gray-700/50 rounded" />
                    <div className="h-1 w-3/5 bg-gray-700/50 rounded" />
                    <div className="mt-3 h-1.5 w-1/2 bg-gray-600 rounded" />
                    <div className="h-1 w-full bg-gray-700/50 rounded" />
                    <div className="h-1 w-3/4 bg-gray-700/50 rounded" />
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-500"
            >
              Get Figma File
            </Button>
          </motion.div>

          {/* Right Column - More Templates */}
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-[#0a0a0a] to-[#0d1117] border border-gray-800/50 rounded-md p-6 md:p-8 flex flex-col"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Looking for more amazing Webflow Templates?
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Explore our collection of premium templates designed for various
              industries and use cases.
            </p>

            {/* Template list items */}
            <div className="space-y-3 mb-8 flex-1">
              {[
                'Corporate & Business',
                'SaaS & Technology',
                'Creative & Portfolio',
                'E-Commerce & Retail',
                'Education & Learning',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 py-2 border-b border-gray-800/30"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Button className="bg-[#0055FF] hover:bg-[#0044DD] text-white font-medium">
              Browse More Templates
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
