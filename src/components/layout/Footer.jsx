import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h2>Food<span className="accent">pido</span></h2>
                    <p>Delivering happiness, one meal at a time.</p>
                    <div className="social-links">
                        <motion.a href="#" whileHover={{ y: -3, color: '#FF4500' }}><FiInstagram /></motion.a>
                        <motion.a href="#" whileHover={{ y: -3, color: '#1DA1F2' }}><FiTwitter /></motion.a>
                        <motion.a href="#" whileHover={{ y: -3, color: '#4267B2' }}><FiFacebook /></motion.a>
                    </div>
                </div>

                <div className="footer-links">
                    <div>
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Foodpido. Made with <FiHeart className="heart-icon" /> by STARK.</p>
            </div>
        </footer>
    );
};

export default Footer;
