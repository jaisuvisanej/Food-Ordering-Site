import React from 'react';
import { motion } from 'framer-motion';
import { FiTruck, FiAward, FiStar } from 'react-icons/fi';
import './FeaturesSection.css';

const features = [
    {
        id: 1,
        icon: <FiTruck />,
        title: "Fast Delivery",
        description: "Hot and fresh food delivered to your doorstep in minutes."
    },
    {
        id: 2,
        icon: <FiStar />,
        title: "Fresh Ingredients",
        description: "We use only the finest and freshest ingredients for our dishes."
    },
    {
        id: 3,
        icon: <FiAward />,
        title: "Best Quality",
        description: "Award-winning taste and quality that represents our passion for food."
    }
];

const FeaturesSection = () => {
    return (
        <section className="features-section">
            <div className="features-container">
                <motion.div
                    className="features-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Why Choose <span className="text-primary">Foodpido</span>?</h2>
                    <p>We are more than just a food delivery service.</p>
                </motion.div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            className="feature-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
