import React from "react";

const ICONS = { success: "✅", error: "❌", info: "ℹ️" };

const Toast = ({ toasts, removeToast }) => (
    <div className="toast-container" aria-live="assertive" aria-atomic="false">
        {toasts.map((toast) => (
            <div key={toast.id} className={`toast toast-${toast.type}`} role="alert">
                <span className="toast-icon" aria-hidden="true">{ICONS[toast.type] || ICONS.info}</span>
                <span className="toast-msg">{toast.message}</span>
                <button
                    className="toast-close"
                    onClick={() => removeToast(toast.id)}
                    aria-label="Dismiss notification"
                >
                    ✕
                </button>
            </div>
        ))}
    </div>
);

export default Toast;
