import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const GROCERY_ITEMS = [
    // Fruits & Vegetables
    { id: "g1", name: "Fresh Tomatoes", category: "Fruits & Vegetables", price: 40, unit: "1 kg", isVeg: true, emoji: "🍅" },
    { id: "g2", name: "Spinach Bunch", category: "Fruits & Vegetables", price: 25, unit: "250 g", isVeg: true, emoji: "🥬" },
    { id: "g3", name: "Bananas", category: "Fruits & Vegetables", price: 35, unit: "6 pcs", isVeg: true, emoji: "🍌" },
    { id: "g4", name: "Carrots", category: "Fruits & Vegetables", price: 30, unit: "500 g", isVeg: true, emoji: "🥕" },
    { id: "g5", name: "Onions", category: "Fruits & Vegetables", price: 28, unit: "1 kg", isVeg: true, emoji: "🧅" },
    // Dairy & Eggs
    { id: "g6", name: "Full Cream Milk", category: "Dairy & Eggs", price: 58, unit: "1 L", isVeg: true, emoji: "🥛" },
    { id: "g7", name: "Paneer", category: "Dairy & Eggs", price: 90, unit: "200 g", isVeg: true, emoji: "🧀" },
    { id: "g8", name: "Eggs (Farm Fresh)", category: "Dairy & Eggs", price: 72, unit: "12 pcs", isVeg: false, emoji: "🥚" },
    { id: "g9", name: "Curd", category: "Dairy & Eggs", price: 45, unit: "400 g", isVeg: true, emoji: "🍶" },
    // Staples
    { id: "g10", name: "Basmati Rice", category: "Staples", price: 120, unit: "1 kg", isVeg: true, emoji: "🍚" },
    { id: "g11", name: "Whole Wheat Atta", category: "Staples", price: 65, unit: "1 kg", isVeg: true, emoji: "🌾" },
    { id: "g12", name: "Toor Dal", category: "Staples", price: 95, unit: "500 g", isVeg: true, emoji: "🫘" },
    // Snacks
    { id: "g13", name: "Multigrain Biscuits", category: "Snacks", price: 35, unit: "200 g", isVeg: true, emoji: "🍪" },
    { id: "g14", name: "Roasted Peanuts", category: "Snacks", price: 50, unit: "250 g", isVeg: true, emoji: "🥜" },
    { id: "g15", name: "Potato Chips", category: "Snacks", price: 20, unit: "80 g", isVeg: true, emoji: "🍟" },
    // Beverages
    { id: "g16", name: "Green Tea (25 bags)", category: "Beverages", price: 110, unit: "25 bags", isVeg: true, emoji: "🍵" },
    { id: "g17", name: "Mango Juice", category: "Beverages", price: 45, unit: "1 L", isVeg: true, emoji: "🥭" },
    { id: "g18", name: "Cold Coffee Mix", category: "Beverages", price: 85, unit: "200 g", isVeg: true, emoji: "☕" },
];

const CATEGORIES = ["All", ...new Set(GROCERY_ITEMS.map((i) => i.category))];

const Grocery = () => {
    const outletContext = useOutletContext() || {};
    const addToCart = outletContext.addToCart || (() => {});
    const decreaseCartItem = outletContext.decreaseCartItem || (() => {});
    const getItemQuantity = outletContext.getItemQuantity || (() => 0);

    const [activeCategory, setActiveCategory] = useState("All");
    const [searchText, setSearchText] = useState("");

    const filtered = GROCERY_ITEMS.filter((item) => {
        const matchesCat = activeCategory === "All" || item.category === activeCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
        return matchesCat && matchesSearch;
    });

    return (
        <div className="grocery-page">
            {/* Hero */}
            <div className="grocery-hero">
                <h1>🛒 Grocery Store</h1>
                <p>Fresh produce, dairy, staples and more — delivered in 30 minutes.</p>
                <input
                    className="grocery-search"
                    type="text"
                    placeholder="Search groceries..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>

            {/* Category chips */}
            <div className="grocery-chips">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        className={`chip-btn ${activeCategory === cat ? "chip-active" : ""}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Items grid */}
            {filtered.length === 0 ? (
                <div className="menu-empty-state">No items found for "{searchText}".</div>
            ) : (
                <div className="grocery-grid">
                    {filtered.map((item) => {
                        const qty = getItemQuantity(item.id);
                        return (
                            <div key={item.id} className="grocery-card">
                                <div className="grocery-emoji">{item.emoji}</div>
                                <div className="grocery-info">
                                    <span className={item.isVeg ? "veg-dot" : "nonveg-dot"}>●</span>
                                    <h3 className="grocery-name">{item.name}</h3>
                                    <p className="grocery-unit">{item.unit}</p>
                                    <div className="grocery-footer">
                                        <span className="grocery-price">₹{item.price}</span>
                                        {qty === 0 ? (
                                            <button className="menu-add-btn" onClick={() => addToCart(item)}>Add</button>
                                        ) : (
                                            <div className="menu-qty-control">
                                                <button onClick={() => decreaseCartItem(item.id)}>-</button>
                                                <span>{qty}</span>
                                                <button onClick={() => addToCart(item)}>+</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Grocery;
