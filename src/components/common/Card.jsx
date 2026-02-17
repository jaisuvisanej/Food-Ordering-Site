import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

const Card = ({ children, className = '', hoverEffect = true, ...props }) => {
    return (
        <motion.div
            className={`card ${className}`}
            whileHover={hoverEffect ? { y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.5)" } : {}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
