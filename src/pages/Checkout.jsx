import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { FiMapPin, FiPhone, FiCreditCard, FiCheckCircle, FiTruck, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
    const { cartItems, getCartTotal, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        instructions: ''
    });
    const [deliveryType, setDeliveryType] = useState('normal'); // normal | fast
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    const subtotal = getCartTotal();
    const deliveryCharge = deliveryType === 'fast' ? 5.00 : 0.00;
    const total = subtotal + deliveryCharge;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsOrderPlaced(true);
            clearCart();
            window.scrollTo(0, 0);
        }, 1500);
    };

    if (isOrderPlaced) {
        return (
            <motion.div
                className="checkout-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="success-card">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                    >
                        <FiCheckCircle className="success-icon" />
                    </motion.div>
                    <h1>Order Placed Successfully!</h1>
                    <p>Thank you for ordering with Foodpido.</p>
                    <p>Your food is being prepared and will be delivered to:</p>
                    <p className="delivery-address">{formData.address}</p>
                    <Link to="/">
                        <Button size="lg">Back to Home</Button>
                    </Link>
                </div>
            </motion.div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="checkout-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', gap: '20px' }}>
                <h2>Your cart is empty</h2>
                <Link to="/menu">
                    <Button size="lg">Browse Menu</Button>
                </Link>
            </div>
        );
    }

    return (
        <motion.div
            className="checkout-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="checkout-container">
                <motion.div
                    className="checkout-form-section"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="section-title">Delivery Details</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label><FiPhone /> Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+1 234 567 8900"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label><FiMapPin /> Delivery Location</label>
                            <textarea
                                name="address"
                                placeholder="Enter your full address"
                                rows="3"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label>Delivery Method</label>
                            <div className="delivery-options">
                                <div
                                    className={`delivery-option ${deliveryType === 'normal' ? 'selected' : ''}`}
                                    onClick={() => setDeliveryType('normal')}
                                >
                                    <div className="option-icon"><FiTruck /></div>
                                    <div className="option-info">
                                        <span className="option-title">Standard Delivery</span>
                                        <span className="option-desc">30-45 min</span>
                                    </div>
                                    <span className="option-price">Free</span>
                                </div>

                                <div
                                    className={`delivery-option ${deliveryType === 'fast' ? 'selected' : ''}`}
                                    onClick={() => setDeliveryType('fast')}
                                >
                                    <div className="option-icon"><FiClock /></div>
                                    <div className="option-info">
                                        <span className="option-title">Fast Delivery</span>
                                        <span className="option-desc">15-20 min</span>
                                    </div>
                                    <span className="option-price">+$5.00</span>
                                </div>
                            </div>
                        </div>

                        <Button type="submit" size="lg" className="width-full">
                            Place Order (${total.toFixed(2)})
                        </Button>
                    </form>
                </motion.div>

                <motion.div
                    className="checkout-summary-section"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="summary-card">
                        <h3>Order Summary</h3>
                        <div className="summary-items">
                            {cartItems.map(item => (
                                <div key={item.id} className="summary-item">
                                    <img src={item.image} alt={item.name} />
                                    <div className="item-info">
                                        <h4>{item.name}</h4>
                                        <p>Qty: {item.quantity}</p>
                                    </div>
                                    <span className="item-price">
                                        ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="summary-totals">
                            <div className="total-row">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="total-row">
                                <span>Delivery Fee</span>
                                <span>{deliveryCharge === 0 ? 'Free' : `$${deliveryCharge.toFixed(2)}`}</span>
                            </div>
                            <div className="total-row grand-total">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Checkout;
