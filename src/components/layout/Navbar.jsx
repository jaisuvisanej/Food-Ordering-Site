import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import Button from '../common/Button';
import { useCart } from '../../context/CartContext';
import './Navbar.css';
import { TbTruckDelivery } from "react-icons/tb";

const Navbar = ({ onCartClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { getCartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'About', path: '/about' },
    ];

    return (
        <motion.nav
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Food<span className="logo-accent">pido<TbTruckDelivery className="truck-icon" /></span>
                </Link>

                {/* Desktop Menu */}
                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <motion.div
                                    className="nav-indicator"
                                    layoutId="navIndicator"
                                />
                            )}
                        </Link>
                    ))}
                </div>

                <div className="navbar-actions">
                    <Button variant="ghost" className="cart-btn" icon={FiShoppingBag} onClick={onCartClick}>
                        <span className="cart-badge">{getCartCount()}</span>
                    </Button>
                    <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="mobile-nav-link"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
