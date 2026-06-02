'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
            <span className="text-black font-bold text-sm">R</span>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">Robotflow</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#overview" className="text-sm text-gray-400 hover:text-white transition-colors">Overview</a>
          <a href="#pages" className="text-sm text-gray-400 hover:text-white transition-colors">Pages</a>
          <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
          <a href="#license" className="text-sm text-gray-400 hover:text-white transition-colors">License</a>
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button className="bg-white text-black hover:bg-gray-200 font-medium text-sm px-5 hidden md:flex">
            Buy Template
          </Button>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden border-t border-gray-800/50 bg-[#050505]/95 backdrop-blur-md"
        >
          <div className="px-4 py-4 flex flex-col gap-4">
            <a href="#overview" className="text-sm text-gray-400 hover:text-white transition-colors">Overview</a>
            <a href="#pages" className="text-sm text-gray-400 hover:text-white transition-colors">Pages</a>
            <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#license" className="text-sm text-gray-400 hover:text-white transition-colors">License</a>
            <Button className="bg-white text-black hover:bg-gray-200 font-medium text-sm w-full">Buy Template</Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
