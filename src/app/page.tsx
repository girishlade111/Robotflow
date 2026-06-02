'use client'

import Header from '@/components/sections/Header'
import HeroSection from '@/components/sections/HeroSection'
import WhatsIncluded from '@/components/sections/WhatsIncluded'
import SecondaryComponents from '@/components/sections/SecondaryComponents'
import MainPages from '@/components/sections/MainPages'
import UtilityPages from '@/components/sections/UtilityPages'
import MoreSurprises from '@/components/sections/MoreSurprises'
import SocialEmailSection from '@/components/sections/SocialEmailSection'
import BlueHeroBlock from '@/components/sections/BlueHeroBlock'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#020202]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhatsIncluded />
        <SecondaryComponents />
        <MainPages />
        <UtilityPages />
        <MoreSurprises />
        <SocialEmailSection />
        <BlueHeroBlock />
      </main>
      <Footer />
    </div>
  )
}
