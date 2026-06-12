import { useState } from "react";

const CONTACT_INFO = [
    { icon: "📍", label: "Address", value: "HITEC City, Hyderabad, Telangana 500081" },
    { icon: "📞", label: "Phone", value: "+91 98765 43210" },
    { icon: "📧", label: "Email", value: "support@nreactfoods.com" },
    { icon: "🕐", label: "Support Hours", value: "Mon – Sun, 8 AM – 11 PM" },
];

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!form.email.trim()) e.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
        if (!form.message.trim()) e.message = "Message is required";
        return e;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }
        setSubmitted(true);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    return (
        <div className="contact-page">
            <div className="contact-hero">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you. Reach out for support, partnerships, or just to say hi!</p>
            </div>

            <div className="contact-layout">
                {/* Info panel */}
                <div className="contact-info-panel">
                    <h2>Get in Touch</h2>
                    {CONTACT_INFO.map((item) => (
                        <div key={item.label} className="contact-info-row">
                            <span className="contact-info-icon">{item.icon}</span>
                            <div>
                                <p className="contact-info-label">{item.label}</p>
                                <p className="contact-info-value">{item.value}</p>
                            </div>
                        </div>
                    ))}

                    <div className="contact-social">
                        <h3>Follow Us</h3>
                        <div className="contact-social-links">
                            <a href="#" aria-label="Instagram">📸 Instagram</a>
                            <a href="#" aria-label="Twitter">🐦 Twitter</a>
                            <a href="#" aria-label="LinkedIn">💼 LinkedIn</a>
                        </div>
                    </div>
                </div>

                {/* Form panel */}
                <div className="contact-form-panel">
                    {submitted ? (
                        <div className="contact-success">
                            <span className="contact-success-icon">✅</span>
                            <h2>Message Sent!</h2>
                            <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                            <button className="contact-btn" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}>
                                Send Another
                            </button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit} noValidate>
                            <h2>Send a Message</h2>

                            <div className="contact-field">
                                <label>Full Name *</label>
                                <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Priya Sharma" />
                                {errors.name && <span className="contact-error">{errors.name}</span>}
                            </div>

                            <div className="contact-field">
                                <label>Email Address *</label>
                                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
                                {errors.email && <span className="contact-error">{errors.email}</span>}
                            </div>

                            <div className="contact-field">
                                <label>Subject</label>
                                <select name="subject" value={form.subject} onChange={handleChange}>
                                    <option value="">Select a topic</option>
                                    <option value="order">Order Issue</option>
                                    <option value="refund">Refund Request</option>
                                    <option value="partner">Restaurant Partnership</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="contact-field">
                                <label>Message *</label>
                                <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Describe your issue or question..." />
                                {errors.message && <span className="contact-error">{errors.message}</span>}
                            </div>

                            <button type="submit" className="contact-btn">Send Message ➤</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
