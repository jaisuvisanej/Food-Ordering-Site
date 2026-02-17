import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../common/Card';
import Button from '../common/Button';
import { useCart } from '../../context/CartContext';
import './MenuGrid.css';

const categories = ["All", "Non-Veg", "Veg", "Fast Food", "Desserts", "Coolers", "Freshers", "Shakes"];

const mockItems = [
    // Non-Veg
    { id: 1, name: "Spicy Beef Burger", category: "Non-Veg", price: "$12.99", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Crispy Fried Chicken", category: "Non-Veg", price: "$14.99", image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Salmon Sushi Platter", category: "Non-Veg", price: "$18.99", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80" },
    { id: 20, name: "Chicken Biryani", category: "Non-Veg", price: "$16.99", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80" },
    { id: 21, name: "Grilled Steak", category: "Non-Veg", price: "$24.99", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80" },

    // Veg
    { id: 4, name: "Green Goddess Salad", category: "Veg", price: "$10.99", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80" },
    { id: 5, name: "Margherita Pizza", category: "Veg", price: "$13.99", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80" },
    { id: 6, name: "Paneer Tikka Masala", category: "Veg", price: "$15.99", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80" },
    { id: 22, name: "Veggie Burger", category: "Veg", price: "$11.99", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80" },
    { id: 23, name: "Pasta Primavera", category: "Veg", price: "$14.49", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80" },

    // Fast Food
    { id: 7, name: "Pepperoni Pizza", category: "Fast Food", price: "$15.99", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80" },
    { id: 8, name: "Classic Cheeseburger", category: "Fast Food", price: "$11.99", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80" },
    { id: 9, name: "French Fries", category: "Fast Food", price: "$5.99", image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=800&q=80" },
    { id: 24, name: "Hot Dog", category: "Fast Food", price: "$6.99", image: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=800&q=80" },
    { id: 25, name: "Onion Rings", category: "Fast Food", price: "$5.49", image: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=800&q=80" },

    // Desserts
    { id: 10, name: "Chocolate Lava Cake", category: "Desserts", price: "$8.99", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80" },
    { id: 11, name: "Strawberry Cheesecake", category: "Desserts", price: "$7.99", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80" },
    { id: 12, name: "Ice Cream Sundae", category: "Desserts", price: "$6.99", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=800&q=80" },
    { id: 26, name: "Tiramisu", category: "Desserts", price: "$8.49", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80" },

    // Coolers
    { id: 13, name: "Blue Lagoon Mocktail", category: "Coolers", price: "$5.99", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80" },
    { id: 14, name: "Iced Lemon Tea", category: "Coolers", price: "$4.99", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80" },
    { id: 27, name: "Mojito", category: "Coolers", price: "$6.49", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80" }, // Using placeholder, suggest updating if needed

    // Freshers
    { id: 15, name: "Fresh Orange Juice", category: "Freshers", price: "$5.49", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80" },
    { id: 16, name: "Watermelon Juice", category: "Freshers", price: "$5.99", image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80" },

    // Shakes
    { id: 17, name: "Chocolate Milkshake", category: "Shakes", price: "$6.99", image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80" },
    { id: 18, name: "Strawberry Shake", category: "Shakes", price: "$6.99", image: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?auto=format&fit=crop&w=800&q=80" },
    { id: 28, name: "Oreo Shake", category: "Shakes", price: "$7.49", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80" } // Reusing for demo
];

const MenuGrid = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const { addToCart } = useCart();

    const filteredItems = activeCategory === "All"
        ? mockItems
        : mockItems.filter(item => item.category === activeCategory);

    return (
        <section className="menu-section">
            <div className="menu-wrapper">
                {/* Sidebar */}
                <aside className="menu-sidebar">
                    <h3>Categories</h3>
                    <div className="category-list">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </aside>

                {/* Main Content */}
                <main className="menu-main">
                    <div className="menu-header">
                        <h2>Our <span className="text-primary">Menu</span></h2>
                        <p>Explore our diverse menu catering to all tastes!</p>
                    </div>

                    <motion.div className="menu-grid" layout>
                        <AnimatePresence mode="popLayout">
                            {filteredItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="menu-card">
                                        <div className="card-image-container">
                                            <img src={item.image} alt={item.name} className="card-img" />
                                        </div>
                                        <div className="card-content">
                                            <h3>{item.name}</h3>
                                            <p className="card-category">{item.category}</p>
                                            <div className="card-footer">
                                                <span className="price">{item.price}</span>
                                                <Button size="sm" onClick={() => addToCart(item)}>Add</Button>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </main>
            </div>
        </section>
    );
};

export default MenuGrid;
