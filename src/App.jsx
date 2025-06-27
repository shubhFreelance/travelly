import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedExperiences from './components/FeaturedExperiences';
import WhyChooseUs from './components/WhyChooseUs';
import PopularDestinations from './components/PopularDestinations';
import TopHotels from './components/TopHotels';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

function App() {
  return (
    <div>
      <motion.div initial="hidden" animate="visible" variants={sectionVariants} custom={0}>
        <Navbar />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} custom={1}>
        <HeroSection />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} custom={2}>
        <FeaturedExperiences />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} custom={3}>
        <WhyChooseUs />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} custom={4}>
        <PopularDestinations />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} custom={5}>
        <TopHotels />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} custom={6}>
        <BlogSection />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={sectionVariants} custom={7}>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App; 