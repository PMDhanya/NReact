import React from "react";

const STATS = [
    { value: "50K+", label: "Happy Customers" },
    { value: "1,200+", label: "Restaurants Listed" },
    { value: "30 min", label: "Avg. Delivery Time" },
    { value: "4.8★", label: "App Store Rating" },
];

const VALUES = [
    {
        icon: "🚀",
        title: "Fast Delivery",
        desc: "We partner with local restaurants to ensure your food arrives hot and fresh in under 30 minutes.",
    },
    {
        icon: "🥗",
        title: "Quality First",
        desc: "Every restaurant on our platform is vetted for hygiene standards and food quality before listing.",
    },
    {
        icon: "💚",
        title: "Support Local",
        desc: "We prioritize independent restaurants and home chefs, helping small businesses thrive.",
    },
    {
        icon: "🔒",
        title: "Secure Payments",
        desc: "Your payment data is encrypted end-to-end. We support UPI, cards, wallets, and cash.",
    },
];

const TEAM = [
    { name: "Dhanya PM", role: "Lead", avatar: "👩‍💼" },
];

class About extends React.Component {
    render() {
        return (
            <div className="about-page">
                {/* Hero */}
                <div className="about-hero">
                    <h1>About nReact Foods</h1>
                    <p>
                        We started with a simple mission — make great food accessible to
                        everyone, from anywhere, in minutes. Today we connect thousands of
                        restaurants with hungry customers across the city.
                    </p>
                </div>

                {/* Stats */}
                <div className="about-stats">
                    {STATS.map((s) => (
                        <div key={s.label} className="about-stat-card">
                            <span className="about-stat-value">{s.value}</span>
                            <span className="about-stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>

                {/* Values */}
                <section className="about-section">
                    <h2>Why choose us?</h2>
                    <div className="about-values-grid">
                        {VALUES.map((v) => (
                            <div key={v.title} className="about-value-card">
                                <span className="about-value-icon">{v.icon}</span>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Team */}
                <section className="about-section">
                    <h2>Meet the Team</h2>
                    <div className="about-team-grid">
                        {TEAM.map((member) => (
                            <div key={member.name} className="about-team-card">
                                <div className="about-team-avatar">{member.avatar}</div>
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        );
    }
}

export default About;
