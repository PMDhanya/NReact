import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
    <footer className="footer">
        <div className="footer-inner">
            {/* Brand */}
            <div className="footer-brand">
                <span className="footer-logo">🍽️</span>
                <h2>nReact Foods</h2>
                <p>Delicious food, delivered fast.<br />Order from 1,200+ restaurants.</p>
                <div className="footer-app-badges">
                    <span className="app-badge">📱 App Store</span>
                    <span className="app-badge">🤖 Google Play</span>
                </div>
            </div>

            {/* Links */}
            <div className="footer-links">
                <h4>Explore</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            <div className="footer-links">
                <h4>Legal</h4>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                    <li><a href="#">Refund Policy</a></li>
                </ul>
            </div>

            <div className="footer-links">
                <h4>Follow Us</h4>
                <ul>
                    <li><a href="#">📸 Instagram</a></li>
                    <li><a href="#">🐦 Twitter / X</a></li>
                    <li><a href="#">💼 LinkedIn</a></li>
                    <li><a href="#">▶️ YouTube</a></li>
                </ul>
            </div>
        </div>

        <div className="footer-bottom">
            <p>© {new Date().getFullYear()} nReact Foods. All rights reserved.</p>
            <p>Made with ❤️ using React</p>
        </div>
    </footer>
);

export default Footer;
