import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import './TestimonialsSection.css';

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Foodie",
        rating: 5,
        review: "The best burger I've consistently ordered. The delivery is always super fast and the food arrives hot.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Regular Customer",
        rating: 5,
        review: "I love the variety on the menu. The sushi platter is my absolute favorite. Highly recommended!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Chef",
        rating: 5,
        review: "As a chef myself, I appreciate the fresh ingredients and the attention to detail in every dish.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    }
];

const TestimonialsSection = () => {
    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <motion.div
                    className="testimonials-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>What Our Customers Say</h2>
                    <p>Don&apos;t just take our word for it.</p>
                </motion.div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            className="testimonial-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="testimonial-content">
                                <div className="stars">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FiStar key={i} className="star-icon" />
                                    ))}
                                </div>
                                <p>&quot;{testimonial.review}&quot;</p>
                            </div>
                            <div className="testimonial-author">
                                <img src={testimonial.image} alt={testimonial.name} />
                                <div>
                                    <h4>{testimonial.name}</h4>
                                    <span>{testimonial.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
