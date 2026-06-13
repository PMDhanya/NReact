import React, { useState } from "react";

const LoginModal = ({ onClose, onLogin }) => {
    const [isRegister, setIsRegister] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const e = {};
        if (isRegister && !form.name.trim()) e.name = "Name is required";
        if (!form.email.trim()) e.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
        if (!form.password.trim()) e.password = "Password is required";
        else if (form.password.length < 6) e.password = "Minimum 6 characters";
        return e;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }
        onLogin({
            name: isRegister ? form.name : form.email.split("@")[0],
            email: form.email,
            joinedDate: new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" }),
        });
    };

    const handleChange = (field) => (e) => {
        setForm({ ...form, [field]: e.target.value });
        setErrors({ ...errors, [field]: "" });
    };

    const switchMode = () => { setIsRegister((p) => !p); setErrors({}); };

    return (
        <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Sign in">
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

                <div className="modal-icon" aria-hidden="true">🍽️</div>
                <h2 className="modal-title">{isRegister ? "Create Account" : "Welcome Back"}</h2>
                <p className="modal-sub">
                    {isRegister ? "Join nReact Foods today" : "Sign in to continue ordering"}
                </p>

                <form onSubmit={handleSubmit} noValidate>
                    {isRegister && (
                        <div className="contact-field">
                            <label htmlFor="modal-name">Full Name</label>
                            <input
                                id="modal-name"
                                value={form.name}
                                onChange={handleChange("name")}
                                placeholder="Your name"
                                autoComplete="name"
                            />
                            {errors.name && <span className="contact-error">{errors.name}</span>}
                        </div>
                    )}

                    <div className="contact-field">
                        <label htmlFor="modal-email">Email Address</label>
                        <input
                            id="modal-email"
                            type="email"
                            value={form.email}
                            onChange={handleChange("email")}
                            placeholder="you@example.com"
                            autoComplete="email"
                        />
                        {errors.email && <span className="contact-error">{errors.email}</span>}
                    </div>

                    <div className="contact-field">
                        <label htmlFor="modal-password">Password</label>
                        <input
                            id="modal-password"
                            type="password"
                            value={form.password}
                            onChange={handleChange("password")}
                            placeholder="Min. 6 characters"
                            autoComplete={isRegister ? "new-password" : "current-password"}
                        />
                        {errors.password && <span className="contact-error">{errors.password}</span>}
                    </div>

                    <button type="submit" className="contact-btn">
                        {isRegister ? "Create Account" : "Sign In"}
                    </button>
                </form>

                <p className="modal-toggle">
                    {isRegister ? "Already have an account?" : "New to nReact Foods?"}
                    <button type="button" className="modal-toggle-btn" onClick={switchMode}>
                        {isRegister ? " Sign In" : " Create one"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default LoginModal;
