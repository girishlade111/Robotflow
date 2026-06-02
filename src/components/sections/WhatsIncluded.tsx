'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardVariants } from '@/lib/animations'

const cards = [
  {
    stat: '18+',
    label: 'Pages',
    preview: (
      <div className="p-4 space-y-2">
        <div className="h-2 w-1/3 bg-gray-600 rounded" />
        <div className="h-1 w-2/3 bg-gray-700 rounded" />
        <div className="h-1 w-1/2 bg-gray-700 rounded" />
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="h-8 bg-gray-700/50 rounded" />
          <div className="h-8 bg-gray-700/50 rounded" />
        </div>
      </div>
    ),
  },
  {
    stat: '34+',
    label: 'Components',
    preview: (
      <div className="p-4">
        <div className="grid grid-cols-3 gap-2">
          <div className="h-6 bg-gray-700/50 rounded" />
          <div className="h-6 bg-gray-700/50 rounded" />
          <div className="h-6 bg-gray-700/50 rounded" />
          <div className="h-6 bg-gray-700/50 rounded" />
          <div className="h-6 bg-gray-700/50 rounded" />
          <div className="h-6 bg-gray-700/50 rounded" />
          <div className="h-6 bg-gray-700/50 rounded" />
          <div className="h-6 bg-gray-700/50 rounded" />
          <div className="h-6 bg-gray-700/50 rounded" />
        </div>
        <div className="mt-2 flex gap-2">
          <div className="h-4 w-1/4 bg-gray-700/50 rounded" />
          <div className="h-4 w-1/4 bg-gray-700/50 rounded" />
          <div className="h-4 w-1/4 bg-gray-700/50 rounded" />
        </div>
      </div>
    ),
  },
  {
    stat: '25+',
    label: 'Blocks',
    preview: (
      <div className="p-4 space-y-2">
        <div className="h-6 bg-gray-700/50 rounded w-full" />
        <div className="h-4 bg-gray-700/30 rounded w-3/4" />
        <div className="h-6 bg-gray-700/50 rounded w-full" />
        <div className="h-4 bg-gray-700/30 rounded w-2/3" />
      </div>
    ),
  },
]

export default function WhatsIncluded() {
  return (
    <section id="overview" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            What is included
          </h2>
          <p className="text-gray-400 text-center mb-16">
            Everything you need to build a stunning website
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.label}
              variants={cardVariants}
              className="bg-[#0a0a0a] border border-gray-800/50 rounded-md p-6 md:p-8 flex flex-col items-center text-center"
            >
              <span className="text-5xl md:text-6xl font-bold text-white mb-2">
                {card.stat}
              </span>
              <span className="text-lg font-medium text-white mb-6">
                {card.label}
              </span>
              <div className="w-full aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-md border border-gray-700/30 mt-auto">
                {card.preview}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
