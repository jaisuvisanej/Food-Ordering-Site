import React from 'react';
import MenuGrid from '../components/features/MenuGrid';
import { motion } from 'framer-motion';

const Menu = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ paddingTop: '80px' }}
        >
            <MenuGrid />
        </motion.div>
    );
};

export default Menu;
