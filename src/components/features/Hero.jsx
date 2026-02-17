import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { FiArrowRight } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Taste the <span className="hero-accent">Magic</span> of <br />
                    Good Food
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Fresh, tasty, and delivered hot to your doorstep in minutes.
                    Experience the best culinary delights with Foodpido.
                </motion.p>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link to="/menu">
                        <Button size="lg" icon={FiArrowRight}>Order Now</Button>
                    </Link>
                    <Link to="/menu">
                        <Button variant="secondary" size="lg">View Menu</Button>
                    </Link>
                </motion.div>
            </div>

            <motion.div
                className="hero-image"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
                    alt="Delicious Food Spread"
                    className="hero-img-real"
                />
            </motion.div>
        </section >
    );
};

export default Hero;
