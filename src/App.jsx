import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/features/CartDrawer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Checkout from './pages/Checkout';
import './App.css';


// Wrapper to use useLocation inside Router
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<div style={{ paddingTop: 100, textAlign: 'center', minHeight: '60vh' }}><h1>About Us</h1><p>We are Foodpido.</p></div>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <Navbar onCartClick={() => setIsCartOpen(true)} />
          <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          <AnimatedRoutes />
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
