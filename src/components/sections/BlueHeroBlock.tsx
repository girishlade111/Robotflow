'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

export default function BlueHeroBlock() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#0055FF] rounded-lg p-8 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center overflow-hidden relative"
        >
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0055FF] to-[#0033CC] opacity-50" />

          {/* Left side - Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-white/80" />
              <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Premium Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Build faster with Robotflow&apos;s advanced toolkit
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              Everything you need to create stunning websites, all in one template. Save hours of development time.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Fully responsive design system',
                'SEO optimized out of the box',
                'Speed-optimized performance',
                'CMS-ready content structure',
                'Advanced interactions & animations'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-[#0055FF] hover:bg-white/90 font-semibold px-8" size="lg">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right side - Visual montage */}
          <div className="relative z-10 hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Main tall image */}
              <div className="aspect-[3/4] bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden">
                <div className="p-6 space-y-4">
                  {/* Dashboard-like mockup */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-2 w-20 bg-white/30 rounded" />
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-white/40 rounded-full" />
                      <div className="w-2 h-2 bg-white/40 rounded-full" />
                      <div className="w-2 h-2 bg-white/40 rounded-full" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="aspect-square bg-white/10 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-white/20 rounded" />
                    </div>
                    <div className="aspect-square bg-white/10 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-white/20 rounded-full" />
                    </div>
                    <div className="aspect-square bg-white/10 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-white/20 rounded" />
                    </div>
                  </div>
                  <div className="h-20 bg-white/5 rounded-lg" />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-12 bg-white/10 rounded-lg" />
                    <div className="h-12 bg-white/10 rounded-lg" />
                  </div>
                  <div className="h-16 bg-white/5 rounded-lg" />
                </div>
              </div>

              {/* Floating small card overlay */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-md rounded-lg p-3 border border-white/30"
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="h-1.5 w-16 bg-white/60 rounded" />
                    <div className="h-1 w-12 bg-white/30 rounded mt-1" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
