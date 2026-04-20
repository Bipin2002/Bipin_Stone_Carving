import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Craftmainship from './Components/Expertise/Craftmainship'
import Banner2 from './Components/Banner/Banner2'
import HeroSection from './Components/HeroPage/HeroSection'
import GallerySection from './Components/Gallery/GallerySection'
import Texts from './Components/Extras/Texts'
import FooterSection from './Components/Footer/FooterSection'
import AboutPage from './NavComponents/AboutPage'
import ContactPage from './NavComponents/ContactPage'
import Service from './ServicePage.jsx/Service'
import IntroductionSection from './Components/HeroPage/IntroductionSection'
import CallToActionBanner from './Components/CallToActionBanner'
// import TestimonialsSection from './Components/TestimonialsSection'
import ScrollToTop from './ScrollToTop'
import FAQs from './Components/FAQs'
import Projects from './Components/ProjectsPage/Projects'
import TermsandCondition from './Components/TermsandCondition'
import Careers from './Components/Careers'
import CraftDetail from './Components/Expertise/CraftDetail'

const HomePage = () => (
  <>
    <HeroSection />
    <Craftmainship />
    <IntroductionSection />
    <Banner2 />
    {/* <TestimonialsSection /> */}
    <CallToActionBanner />
    <Texts />


  </>
)

const App = () => {
  return (
    <div className="relative ">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/terms" element={<TermsandCondition />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/craftmanship/:id" element={<CraftDetail />} />
      </Routes>
      <FooterSection />
    </div>
  )
}

export default App
