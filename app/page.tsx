import Example from '@/components/example'
import Footer from '@/components/footer'
import Freelancer from '@/components/freelancer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Kworks from '@/components/kworks'
import TopFooter from '@/components/top_of_footer'
import React from 'react'

const Main = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Kworks />
      <Freelancer />
      <Example />
      <TopFooter />
      <Footer />
    </div>
  )
}

export default Main