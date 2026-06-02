'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { fadeInUp } from '@/lib/animations'

const imagePlaceholders = [
  {
    aspect: 'aspect-[4/3]',
    gradient: 'bg-gradient-to-br from-gray-800 to-gray-900',
    elements: [
      { type: 'line', top: '20%', left: '10%', width: '60%' },
      { type: 'line', top: '30%', left: '10%', width: '40%' },
      { type: 'square', top: '55%', left: '10%' },
      { type: 'square', top: '55%', left: '22%' },
      { type: 'square', top: '55%', left: '34%' },
      { type: 'line', top: '70%', left: '10%', width: '50%' },
    ],
  },
  {
    aspect: 'aspect-[3/4]',
    gradient: 'bg-gradient-to-br from-blue-900/20 to-gray-900',
    elements: [
      { type: 'line', top: '15%', left: '15%', width: '50%' },
      { type: 'square', top: '30%', left: '15%' },
      { type: 'line', top: '45%', left: '15%', width: '70%' },
      { type: 'line', top: '55%', left: '15%', width: '45%' },
      { type: 'square', top: '70%', left: '15%' },
      { type: 'square', top: '70%', left: '27%' },
    ],
  },
  {
    aspect: 'aspect-square',
    gradient: 'bg-gradient-to-br from-purple-900/20 to-gray-900',
    elements: [
      { type: 'square', top: '15%', left: '15%' },
      { type: 'square', top: '15%', left: '27%' },
      { type: 'square', top: '15%', left: '39%' },
      { type: 'line', top: '35%', left: '15%', width: '55%' },
      { type: 'line', top: '45%', left: '15%', width: '40%' },
      { type: 'line', top: '65%', left: '15%', width: '60%' },
    ],
  },
  {
    aspect: 'aspect-[4/3]',
    gradient: 'bg-gradient-to-br from-emerald-900/20 to-gray-900',
    elements: [
      { type: 'line', top: '20%', left: '10%', width: '70%' },
      { type: 'line', top: '30%', left: '10%', width: '50%' },
      { type: 'square', top: '50%', left: '10%' },
      { type: 'square', top: '50%', left: '22%' },
      { type: 'line', top: '65%', left: '10%', width: '45%' },
      { type: 'line', top: '75%', left: '10%', width: '55%' },
    ],
  },
  {
    aspect: 'aspect-[3/4]',
    gradient: 'bg-gradient-to-br from-amber-900/20 to-gray-900',
    elements: [
      { type: 'square', top: '20%', left: '12%' },
      { type: 'line', top: '35%', left: '12%', width: '65%' },
      { type: 'line', top: '45%', left: '12%', width: '45%' },
      { type: 'square', top: '60%', left: '12%' },
      { type: 'square', top: '60%', left: '24%' },
      { type: 'line', top: '75%', left: '12%', width: '55%' },
    ],
  },
  {
    aspect: 'aspect-[4/3]',
    gradient: 'bg-gradient-to-br from-rose-900/20 to-gray-900',
    elements: [
      { type: 'line', top: '18%', left: '8%', width: '55%' },
      { type: 'line', top: '28%', left: '8%', width: '70%' },
      { type: 'line', top: '38%', left: '8%', width: '35%' },
      { type: 'square', top: '55%', left: '8%' },
      { type: 'square', top: '55%', left: '20%' },
      { type: 'square', top: '55%', left: '32%' },
    ],
  },
  {
    aspect: 'aspect-square',
    gradient: 'bg-gradient-to-br from-cyan-900/20 to-gray-900',
    elements: [
      { type: 'square', top: '20%', left: '15%' },
      { type: 'line', top: '35%', left: '15%', width: '60%' },
      { type: 'square', top: '50%', left: '15%' },
      { type: 'square', top: '50%', left: '27%' },
      { type: 'line', top: '65%', left: '15%', width: '50%' },
      { type: 'line', top: '75%', left: '15%', width: '40%' },
    ],
  },
  {
    aspect: 'aspect-[3/4]',
    gradient: 'bg-gradient-to-br from-indigo-900/20 to-gray-900',
    elements: [
      { type: 'line', top: '15%', left: '12%', width: '60%' },
      { type: 'square', top: '28%', left: '12%' },
      { type: 'square', top: '28%', left: '24%' },
      { type: 'line', top: '42%', left: '12%', width: '50%' },
      { type: 'line', top: '52%', left: '12%', width: '65%' },
      { type: 'square', top: '68%', left: '12%' },
    ],
  },
  {
    aspect: 'aspect-[4/3]',
    gradient: 'bg-gradient-to-br from-teal-900/20 to-gray-900',
    elements: [
      { type: 'line', top: '22%', left: '10%', width: '45%' },
      { type: 'line', top: '32%', left: '10%', width: '65%' },
      { type: 'square', top: '48%', left: '10%' },
      { type: 'line', top: '60%', left: '10%', width: '55%' },
      { type: 'square', top: '72%', left: '10%' },
      { type: 'square', top: '72%', left: '22%' },
    ],
  },
  {
    aspect: 'aspect-square',
    gradient: 'bg-gradient-to-br from-violet-900/20 to-gray-900',
    elements: [
      { type: 'square', top: '18%', left: '12%' },
      { type: 'square', top: '18%', left: '24%' },
      { type: 'square', top: '18%', left: '36%' },
      { type: 'square', top: '18%', left: '48%' },
      { type: 'line', top: '38%', left: '12%', width: '60%' },
      { type: 'line', top: '50%', left: '12%', width: '45%' },
      { type: 'line', top: '68%', left: '12%', width: '55%' },
    ],
  },
  {
    aspect: 'aspect-[4/3]',
    gradient: 'bg-gradient-to-br from-orange-900/20 to-gray-900',
    elements: [
      { type: 'line', top: '20%', left: '10%', width: '55%' },
      { type: 'square', top: '35%', left: '10%' },
      { type: 'square', top: '35%', left: '22%' },
      { type: 'line', top: '50%', left: '10%', width: '70%' },
      { type: 'line', top: '60%', left: '10%', width: '40%' },
      { type: 'square', top: '75%', left: '10%' },
    ],
  },
  {
    aspect: 'aspect-[3/4]',
    gradient: 'bg-gradient-to-br from-fuchsia-900/20 to-gray-900',
    elements: [
      { type: 'square', top: '22%', left: '12%' },
      { type: 'line', top: '35%', left: '12%', width: '60%' },
      { type: 'line', top: '45%', left: '12%', width: '40%' },
      { type: 'square', top: '58%', left: '12%' },
      { type: 'square', top: '58%', left: '24%' },
      { type: 'square', top: '58%', left: '36%' },
      { type: 'line', top: '73%', left: '12%', width: '50%' },
    ],
  },
  {
    aspect: 'aspect-[4/3]',
    gradient: 'bg-gradient-to-br from-lime-900/20 to-gray-900',
    elements: [
      { type: 'line', top: '18%', left: '8%', width: '65%' },
      { type: 'line', top: '28%', left: '8%', width: '45%' },
      { type: 'square', top: '42%', left: '8%' },
      { type: 'line', top: '55%', left: '8%', width: '55%' },
      { type: 'square', top: '68%', left: '8%' },
      { type: 'square', top: '68%', left: '20%' },
    ],
  },
  {
    aspect: 'aspect-square',
    gradient: 'bg-gradient-to-br from-sky-900/20 to-gray-900',
    elements: [
      { type: 'square', top: '15%', left: '12%' },
      { type: 'square', top: '15%', left: '24%' },
      { type: 'line', top: '32%', left: '12%', width: '60%' },
      { type: 'line', top: '42%', left: '12%', width: '45%' },
      { type: 'square', top: '58%', left: '12%' },
      { type: 'square', top: '58%', left: '24%' },
      { type: 'line', top: '72%', left: '12%', width: '55%' },
    ],
  },
]

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          Robotflow Webflow Template
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-400 text-center max-w-2xl mx-auto mt-6 text-lg md:text-xl"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          Discover the new era of robotic technology with our premium Webflow
          template. Built for innovation-driven teams.
        </motion.p>

        {/* Navigation Buttons */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Button
            variant="outline"
            className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-500"
          >
            Overview
          </Button>
          <Button
            variant="outline"
            className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-500"
          >
            License
          </Button>
          <Button
            variant="outline"
            className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-500"
          >
            Changelog
          </Button>
        </motion.div>

        {/* Image Grid Collage */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-16">
          {imagePlaceholders.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div
                className={`${item.aspect} bg-gray-800/50 rounded-md border border-gray-700/50 overflow-hidden`}
              >
                <div
                  className={`w-full h-full ${item.gradient} relative p-3 md:p-4`}
                >
                  {item.elements.map((el, elIndex) => {
                    if (el.type === 'line') {
                      return (
                        <div
                          key={elIndex}
                          className="absolute h-px bg-gray-700/60"
                          style={{
                            top: el.top,
                            left: el.left,
                            width: el.width,
                          }}
                        />
                      )
                    }
                    if (el.type === 'square') {
                      return (
                        <div
                          key={elIndex}
                          className="absolute w-2 h-2 bg-gray-600/50 rounded-sm"
                          style={{
                            top: el.top,
                            left: el.left,
                          }}
                        />
                      )
                    }
                    return null
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
