'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import {
  Box,
  Layout,
  Settings,
  Bell,
  Menu,
  ChevronRight,
  Grid3X3,
  Layers,
  Palette,
  Type,
  Navigation,
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Cpu,
  Code,
  Database,
  Monitor,
  Smartphone,
} from 'lucide-react'

export default function MoreSurprises() {
  return (
    <section
      id="features"
      className="py-20 md:py-32 border-t border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Title */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center">
            The Robotflow Webflow Template also comes with more surprises...
          </h2>
        </motion.div>

        {/* Zigzag Item 1 — Headers & Footers (Image LEFT, Text RIGHT) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-24">
          {/* Left - Visual */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-[#0a0a0a] border border-gray-800/50 rounded-md p-4">
              {/* Header mockup */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded p-3 mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-white rounded-sm" />
                  <div className="h-1.5 w-12 bg-gray-600 rounded" />
                </div>
                <div className="flex gap-2">
                  <div className="h-1.5 w-8 bg-gray-600 rounded" />
                  <div className="h-1.5 w-8 bg-gray-600 rounded" />
                  <div className="h-1.5 w-8 bg-gray-600 rounded" />
                </div>
              </div>
              {/* Footer mockup */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded p-3 flex justify-between">
                <div className="space-y-1">
                  <div className="h-1 w-10 bg-gray-600 rounded" />
                  <div className="h-1 w-16 bg-gray-700 rounded" />
                </div>
                <div className="flex gap-1.5">
                  <div className="w-4 h-4 bg-gray-700 rounded-full" />
                  <div className="w-4 h-4 bg-gray-700 rounded-full" />
                  <div className="w-4 h-4 bg-gray-700 rounded-full" />
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
              Headers & Footers
            </h3>
            <p className="text-gray-400 mb-6">
              Multiple header and footer variations to match your brand identity
              and design preferences.
            </p>
            <ul className="space-y-3">
              {[
                'Transparent header',
                'Solid header',
                'Centered navigation',
                'Minimal footer',
                'Extended footer',
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

        {/* Zigzag Item 2 — Notification Bars (Text LEFT, Image RIGHT — SWAPPED) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-24">
          {/* Left - Text (swapped) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Notification Bars
            </h3>
            <p className="text-gray-400 mb-6">
              Eye-catching notification bars to announce promotions, updates, or
              important messages to your visitors.
            </p>
            <ul className="space-y-3">
              {[
                'Top announcement bar',
                'Promo banner',
                'Cookie consent bar',
                'Sticky notification',
                'Closable alert bar',
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

          {/* Right - Visual (swapped) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-[#0a0a0a] border border-gray-800/50 rounded-md p-4 space-y-3">
              {/* Notification bar mockup 1 */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <div className="h-1.5 w-32 bg-gray-600 rounded" />
                </div>
                <div className="h-4 w-4 bg-gray-700 rounded-sm" />
              </div>
              {/* Notification bar mockup 2 */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-24 bg-gray-600 rounded" />
                  <div className="h-4 w-12 bg-gray-700 rounded-sm" />
                </div>
              </div>
              {/* Notification bar mockup 3 */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded p-2 flex items-center justify-center gap-3">
                <div className="h-1.5 w-28 bg-gray-600 rounded" />
                <div className="h-4 w-14 bg-gray-700 rounded-sm" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Zigzag Item 3 — Custom Icon Set (Image LEFT, Text RIGHT) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-[#0a0a0a] border border-gray-800/50 rounded-md p-4">
              <div className="grid grid-cols-6 gap-2">
                {[
                  Box,
                  Layout,
                  Settings,
                  Bell,
                  Menu,
                  Grid3X3,
                  Layers,
                  Palette,
                  Type,
                  Navigation,
                  Zap,
                  Shield,
                  Globe,
                  Cpu,
                  Code,
                  Database,
                  Monitor,
                  Smartphone,
                ].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gray-800/50 border border-gray-700/30 rounded-sm flex items-center justify-center"
                  >
                    <Icon className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
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
              Custom Icon Set
            </h3>
            <p className="text-gray-400 mb-6">
              A comprehensive collection of custom-designed icons to maintain
              visual consistency throughout your entire website.
            </p>
            <ul className="space-y-3">
              {[
                '18+ custom icons',
                'Consistent stroke width',
                'Scalable vector format',
                'Dark & light variants',
                'Easy to customize',
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
      </div>
    </section>
  )
}
