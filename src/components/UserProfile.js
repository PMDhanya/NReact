import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserProfile = ({ user, orders, addresses, onAddAddress, onDeleteAddress, onLogout }) => {
    const [activeTab, setActiveTab] = useState("overview");
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [newAddress, setNewAddress] = useState({ label: "", value: "" });
    const [addrError, setAddrError] = useState("");

    const handleAddAddress = (e) => {
        e.preventDefault();
        if (!newAddress.label.trim()) { setAddrError("Label is required (e.g. Home, Office)"); return; }
        if (!newAddress.value.trim()) { setAddrError("Full address is required"); return; }
        onAddAddress(newAddress);
        setNewAddress({ label: "", value: "" });
        setShowAddressForm(false);
        setAddrError("");
    };

    const totalSpent = orders.reduce((s, o) => s + (o.totalAmount || 0), 0);

    return (
        <div className="profile-page">
            {/* ── Hero ── */}
            <div className="profile-hero">
                <div className="profile-avatar" aria-hidden="true">
                    {user.name?.[0]?.toUpperCase() || "U"}
                </div>
                <div className="profile-hero-info">
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                    <p className="profile-joined">Member since {user.joinedDate}</p>
                </div>
                <button className="profile-logout-btn" onClick={onLogout}>Sign Out</button>
            </div>

            {/* ── Tabs ── */}
            <div className="profile-tabs" role="tablist">
                {["overview", "orders", "addresses"].map((tab) => (
                    <button
                        key={tab}
                        role="tab"
                        aria-selected={activeTab === tab}
                        className={`profile-tab ${activeTab === tab ? "profile-tab-active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        {tab === "orders" && orders.length > 0 && (
                            <span className="profile-tab-badge">{orders.length}</span>
                        )}
                    </button>
                ))}
            </div>

            {/* ── Overview ── */}
            {activeTab === "overview" && (
                <div className="profile-section">
                    <div className="profile-overview-stats">
                        <div className="profile-stat-card">
                            <span className="profile-stat-val">{orders.length}</span>
                            <span className="profile-stat-label">Total Orders</span>
                        </div>
                        <div className="profile-stat-card">
                            <span className="profile-stat-val">₹{totalSpent}</span>
                            <span className="profile-stat-label">Total Spent</span>
                        </div>
                        <div className="profile-stat-card">
                            <span className="profile-stat-val">{addresses.length}</span>
                            <span className="profile-stat-label">Saved Addresses</span>
                        </div>
                    </div>

                    {orders.length > 0 ? (
                        <div className="profile-recent">
                            <h3>Most Recent Order</h3>
                            <div className="order-card">
                                <div className="order-card-top">
                                    <span className="order-id">#{orders[0].orderId}</span>
                                    <span className="order-date">{orders[0].date}</span>
                                    <span className="order-status">Delivered ✅</span>
                                </div>
                                <p className="order-items-preview">
                                    {(orders[0].items || []).map((i) => `${i.name} ×${i.quantity}`).join(", ")}
                                </p>
                                <p className="order-total-text">Total: ₹{orders[0].totalAmount}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="profile-empty">
                            <span>🛒</span>
                            <p>No orders yet. Time to order something delicious!</p>
                            <Link to="/" className="cart-cta">Browse Restaurants</Link>
                        </div>
                    )}
                </div>
            )}

            {/* ── Orders ── */}
            {activeTab === "orders" && (
                <div className="profile-section">
                    <h2>Order History</h2>
                    {orders.length === 0 ? (
                        <div className="profile-empty">
                            <span>📋</span>
                            <p>No orders placed yet.</p>
                            <Link to="/" className="cart-cta">Browse Restaurants</Link>
                        </div>
                    ) : (
                        orders.map((order) => (
                            <div key={order.orderId} className="order-card">
                                <div className="order-card-top">
                                    <span className="order-id">#{order.orderId}</span>
                                    <span className="order-date">{order.date}</span>
                                    <span className="order-status">Delivered ✅</span>
                                </div>
                                <p className="order-items-preview">
                                    {(order.items || []).map((i) => `${i.name} ×${i.quantity}`).join(", ")}
                                </p>
                                <div className="order-card-footer">
                                    <span className="order-total-text">₹{order.totalAmount}</span>
                                    <span className="order-address-text">📍 {order.addressLabel}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}

            {/* ── Addresses ── */}
            {activeTab === "addresses" && (
                <div className="profile-section">
                    <div className="profile-section-header">
                        <h2>Saved Addresses</h2>
                        <button
                            className="profile-add-btn"
                            onClick={() => setShowAddressForm((p) => !p)}
                        >
                            {showAddressForm ? "Cancel" : "+ Add Address"}
                        </button>
                    </div>

                    {showAddressForm && (
                        <form className="address-form" onSubmit={handleAddAddress}>
                            <div className="contact-field">
                                <label>Label (e.g. Home, Office)</label>
                                <input
                                    value={newAddress.label}
                                    onChange={(e) => setNewAddress({ ...newAddress, label: e.target.value })}
                                    placeholder="Home"
                                />
                            </div>
                            <div className="contact-field">
                                <label>Full Address</label>
                                <input
                                    value={newAddress.value}
                                    onChange={(e) => setNewAddress({ ...newAddress, value: e.target.value })}
                                    placeholder="Flat 12, Lake View Apartments, Hyderabad"
                                />
                            </div>
                            {addrError && <span className="contact-error">{addrError}</span>}
                            <button
                                type="submit"
                                className="contact-btn"
                                style={{ width: "auto", padding: "10px 24px" }}
                            >
                                Save Address
                            </button>
                        </form>
                    )}

                    {!showAddressForm && addresses.length === 0 && (
                        <div className="profile-empty">
                            <span>📍</span>
                            <p>No saved addresses yet. Add one to speed up checkout!</p>
                        </div>
                    )}

                    <div className="address-list">
                        {addresses.map((addr, i) => (
                            <div key={i} className="address-card">
                                <div className="address-card-icon" aria-hidden="true">📍</div>
                                <div className="address-card-info">
                                    <span className="address-label">{addr.label}</span>
                                    <p className="address-value">{addr.value}</p>
                                </div>
                                <button
                                    className="address-delete-btn"
                                    onClick={() => onDeleteAddress(i)}
                                    aria-label={`Delete ${addr.label} address`}
                                >
                                    🗑️
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
