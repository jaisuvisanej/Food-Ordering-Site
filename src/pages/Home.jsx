import React from 'react';
import Hero from '../components/features/Hero';
import FeaturesSection from '../components/features/FeaturesSection';
import TestimonialsSection from '../components/features/TestimonialsSection';
import CTASection from '../components/features/CTASection';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <FeaturesSection />
            <TestimonialsSection />
            <CTASection />
        </motion.div>
    );
};

export default Home;
