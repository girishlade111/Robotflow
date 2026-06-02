'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/50 bg-[#020202]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16">
        {/* Main footer grid - 5 columns on desktop */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Column 1 - Logo & Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-bold text-sm">R</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">Robotflow</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Discover the new era of robotic technology with our premium Webflow template.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+123456789"
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                +123 456 789
              </a>
              <a
                href="mailto:hello@robotflow.com"
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@robotflow.com
              </a>
            </div>
          </div>

          {/* Column 2 - Main Pages */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Main Pages
            </h4>
            <ul className="space-y-2.5">
              {['Home V1', 'Home V2', 'About', 'Services', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Utility Pages */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Utility Pages
            </h4>
            <ul className="space-y-2.5">
              {[
                'Coming Soon',
                '404 Not Found',
                'Password Protected',
                'Style Guide',
                'Changelog',
                'License',
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Template */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Template
            </h4>
            <ul className="space-y-2.5">
              {['Features', 'Pricing', 'Integrations', 'Components', 'Blocks', 'Figma'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 5 - Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest updates and news about Robotflow.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Your email"
                className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-600 text-sm h-9"
              />
              <Button
                size="sm"
                className="bg-white text-black hover:bg-gray-200 px-3 flex-shrink-0"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            Copyright &copy; 2026 Robotflow Webflow. All rights reserved.
          </p>
          <Button className="bg-white text-black hover:bg-gray-200 font-medium text-sm">
            Buy Template
          </Button>
        </div>
      </div>
    </footer>
  );
}
