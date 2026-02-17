import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiX, FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import Button from '../common/Button';
import { useCart } from '../../context/CartContext';
import './CartDrawer.css';

const CartDrawer = ({ isOpen, onClose }) => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

    const total = getCartTotal();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="cart-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="cart-drawer"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <div className="cart-header">
                            <h2>Your Cart</h2>
                            <Button variant="ghost" onClick={onClose} className="close-btn">
                                <FiX />
                            </Button>
                        </div>

                        <div className="cart-items">
                            {cartItems.length === 0 ? (
                                <p className="empty-cart-msg">Your cart is empty.</p>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.id} className="cart-item">
                                        <div className="item-image">
                                            <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                                        </div>
                                        <div className="item-details">
                                            <h3>{item.name}</h3>
                                            <p>{item.price}</p>
                                            <div className="item-controls">
                                                <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}><FiMinus /></button>
                                                <span>{item.quantity}</span>
                                                <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}><FiPlus /></button>
                                            </div>
                                        </div>
                                        <button className="remove-btn" onClick={() => removeFromCart(item.id)}><FiTrash2 /></button>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="cart-footer">
                            <div className="cart-total">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <Link to="/checkout" onClick={onClose}>
                                <Button size="lg" className="width-full" disabled={cartItems.length === 0}>Checkout</Button>
                            </Link>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
