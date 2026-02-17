import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import './CTASection.css';

const CTASection = () => {
    return (
        <section className="cta-section">
            <motion.div
                className="cta-container"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="cta-content">
                    <h2>Ready to taste the goodness?</h2>
                    <p>Order now and get 20% off your first meal with code <strong>FOODPIDO20</strong></p>
                    <Link to="/menu">
                        <Button size="lg" className="cta-btn">Order Now</Button>
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default CTASection;
