import React from 'react'
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('../../components/stock_header'))
const Hero = dynamic(() => import('../../components/stock_hero'))
const Projects = dynamic(() => import('../../components/stock_projects'))
const Footer = dynamic(() => import('../../components/footer'))



const Page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  )
}

export default Page