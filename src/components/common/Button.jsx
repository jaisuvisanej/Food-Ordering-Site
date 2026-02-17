import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({
    children,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
    icon: Icon,
    ...props
}) => {
    return (
        <motion.button
            className={`btn btn-${variant} btn-${size} ${className}`}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            {...props}
        >
            {Icon && <span className="btn-icon"><Icon /></span>}
            <span className="btn-text">{children}</span>
        </motion.button>
    );
};

export default Button;
