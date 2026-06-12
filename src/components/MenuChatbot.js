import { useState, useRef, useEffect } from "react";

// ─── Intent definitions ────────────────────────────────────────────────────────
// Each intent has:
//   patterns  → array of regexes tested against the user's message
//   handler   → function(context) that returns a reply string
//   context contains: { menuCategories, resName, addToCart, cartItems, text }
// ──────────────────────────────────────────────────────────────────────────────

const INTENTS = [
    {
        id: "greeting",
        patterns: [/^(hi|hello|hey|howdy|good\s*(morning|afternoon|evening))/i],
        handler: ({ resName }) =>
            `Hi there! 👋 Welcome to ${resName || "our restaurant"}.\nI can help you with:\n• Browsing menu categories\n• Finding veg / non-veg dishes\n• Checking prices\n• Adding items to your cart\n\nJust ask away!`,
    },
    {
        id: "help",
        patterns: [/\b(help|what can you do|commands|options|guide)\b/i],
        handler: () =>
            `Here's what you can ask me:\n\n🍽️  "Show menu" — list all categories\n🥦  "Veg items" — vegetarian dishes only\n🍗  "Non-veg items" — meat / seafood dishes\n💰  "Price of biryani" — get a dish price\n🛒  "Add paneer tikka" — add to cart\n📋  "My cart" — see your current order\n💸  "Cheapest dishes" — budget-friendly picks\n📊  "Under ₹200" — items within a budget`,
    },
    {
        id: "menu_overview",
        patterns: [/\b(menu|categories|what.*(available|have|serve|got)|show menu|all dishes)\b/i],
        handler: ({ menuCategories }) => {
            if (!menuCategories.length)
                return "The menu is still loading. Try again in a moment!";
            const list = menuCategories
                .map((c) => `• ${c.title} (${c.items.length} item${c.items.length !== 1 ? "s" : ""})`)
                .join("\n");
            return `Menu categories at this restaurant:\n\n${list}\n\nAsk me about any category or dish!`;
        },
    },
    {
        id: "veg_items",
        patterns: [/\b(veg\b|vegetarian|veg only|pure veg)\b/i],
        handler: ({ menuCategories }) => {
            const allItems = menuCategories.flatMap((c) => c.items);
            const vegItems = allItems.filter((item) => item.isVeg);
            if (!vegItems.length) return "No veg items found in this menu.";
            const unique = [
                ...new Map(vegItems.map((i) => [i.id, i])).values(),
            ].slice(0, 8);
            return `🥦 Veg dishes available:\n\n${unique
                .map((i) => `• ${i.name} — ₹${i.price}`)
                .join("\n")}\n\nSay "add [dish name]" to order one!`;
        },
    },
    {
        id: "nonveg_items",
        patterns: [/\b(non[\s-]?veg|chicken|mutton|fish|seafood|meat|egg)\b/i],
        handler: ({ menuCategories }) => {
            const allItems = menuCategories.flatMap((c) => c.items);
            const items = allItems.filter((item) => !item.isVeg);
            if (!items.length) return "No non-veg items found in this menu.";
            const unique = [
                ...new Map(items.map((i) => [i.id, i])).values(),
            ].slice(0, 8);
            return `🍗 Non-veg dishes:\n\n${unique
                .map((i) => `• ${i.name} — ₹${i.price}`)
                .join("\n")}\n\nSay "add [dish name]" to order one!`;
        },
    },
    {
        id: "price_query",
        patterns: [/\b(price|cost|how much|rate|what.*cost)\b/i],
        handler: ({ menuCategories, text }) => {
            // Strip common filler words to isolate the dish name
            const query = text
                .replace(
                    /\b(price|cost|how much is|how much does|how much|rate|of|for|the|a|an|does|what|it)\b/gi,
                    ""
                )
                .trim()
                .toLowerCase();

            if (!query)
                return "Which dish would you like the price for?\nE.g. 'price of biryani'";

            const allItems = menuCategories.flatMap((c) => c.items);
            const found = allItems.filter((i) =>
                i.name.toLowerCase().includes(query)
            );
            if (!found.length)
                return `Sorry, I couldn't find "${query}" in the menu.\nTry a different name or say "show menu" to browse.`;

            const unique = [...new Map(found.map((i) => [i.id, i])).values()];
            return `💰 Price${unique.length > 1 ? "s" : ""}:\n\n${unique
                .map((i) => `• ${i.name}: ₹${i.price}`)
                .join("\n")}`;
        },
    },
    {
        id: "add_to_cart",
        patterns: [
            /\b(add|order|want|give me|get me|i'll have|i want|can i get|bring me)\b/i,
        ],
        handler: ({ menuCategories, text, addToCart }) => {
            // Strip command words to isolate the dish name
            const query = text
                .replace(
                    /\b(add|order|want|give me|get me|i'll have|i want|can i get|bring me|please|to cart|to my cart|cart|one|a|an)\b/gi,
                    ""
                )
                .trim()
                .toLowerCase();

            if (!query)
                return "Which dish would you like to add?\nE.g. 'add biryani' or 'order paneer tikka'";

            const allItems = menuCategories.flatMap((c) => c.items);
            // Exact match first, then partial
            const exact = allItems.find(
                (i) => i.name.toLowerCase() === query
            );
            const partial = allItems.find((i) =>
                i.name.toLowerCase().includes(query)
            );
            const found = exact || partial;

            if (!found)
                return `Sorry, I couldn't find "${query}" in the menu.\nSay "show menu" to see what's available.`;

            addToCart(found);
            return `✅ Added "${found.name}" (₹${found.price}) to your cart!\nSay "my cart" to review your order.`;
        },
    },
    {
        id: "cart_summary",
        patterns: [/\b(cart|my order|what.*ordered|basket|my cart)\b/i],
        handler: ({ cartItems }) => {
            const items = Object.values(cartItems || {});
            if (!items.length)
                return "🛒 Your cart is empty.\nStart by saying 'add [dish name]' to order something!";
            const list = items
                .map(
                    (i) =>
                        `• ${i.name} ×${i.quantity} = ₹${i.price * i.quantity}`
                )
                .join("\n");
            const subtotal = items.reduce(
                (s, i) => s + i.price * i.quantity,
                0
            );
            return `🛒 Your cart:\n\n${list}\n\nSubtotal: ₹${subtotal}\n(Delivery + taxes added at checkout)`;
        },
    },
    {
        id: "budget_query",
        patterns: [
            /\b(cheap|cheapest|lowest price|budget|affordable|under\s*₹?\s*\d+)\b/i,
        ],
        handler: ({ menuCategories, text }) => {
            const budgetMatch = text.match(/under\s*₹?\s*(\d+)/i);
            const allItems = menuCategories.flatMap((c) => c.items);

            let filtered;
            if (budgetMatch) {
                const limit = Number(budgetMatch[1]);
                filtered = allItems.filter((i) => i.price <= limit);
                if (!filtered.length)
                    return `No dishes found under ₹${limit}. Try a higher limit!`;
            } else {
                filtered = [...allItems].sort((a, b) => a.price - b.price);
            }

            const unique = [
                ...new Map(filtered.map((i) => [i.id, i])).values(),
            ].slice(0, 6);
            const label = budgetMatch
                ? `under ₹${budgetMatch[1]}`
                : "sorted by price";
            return `💸 Budget-friendly dishes (${label}):\n\n${unique
                .map((i) => `• ${i.name} — ₹${i.price}`)
                .join("\n")}`;
        },
    },
    {
        id: "top_rated",
        patterns: [/\b(top rated|best|popular|most ordered|recommended)\b/i],
        handler: ({ menuCategories }) => {
            const allItems = menuCategories.flatMap((c) => c.items);
            const sorted = [...allItems]
                .sort((a, b) => b.ratingCount - a.ratingCount)
                .slice(0, 6);
            const unique = [
                ...new Map(sorted.map((i) => [i.id, i])).values(),
            ].slice(0, 6);
            return `⭐ Popular dishes:\n\n${unique
                .map((i) => `• ${i.name} — ₹${i.price}`)
                .join("\n")}`;
        },
    },
];

const DEFAULT_RESPONSE =
    "I'm not sure about that 🤔\nTry: 'show menu', 'veg items', 'price of [dish]', 'add [dish]', or 'my cart'.\nSay 'help' for a full list of commands.";

// ─── Core processing function ──────────────────────────────────────────────────
const processMessage = (text, context) => {
    const lower = text.toLowerCase().trim();
    for (const intent of INTENTS) {
        if (intent.patterns.some((p) => p.test(lower))) {
            return intent.handler({ ...context, text: lower });
        }
    }
    return DEFAULT_RESPONSE;
};

// ─── Quick suggestion chips ────────────────────────────────────────────────────
const SUGGESTIONS = [
    "Show menu",
    "Veg items",
    "My cart",
    "Cheapest dishes",
    "Top rated",
];

// ─── Component ─────────────────────────────────────────────────────────────────
const MenuChatbot = ({ menuCategories = [], resName = "", addToCart, cartItems = {} }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "bot",
            text: `Hi! 👋 I'm Foodie Bot.\nAsk me about the menu, veg items, prices, or say "add [dish]" to order!\n\nType 'help' to see all commands.`,
        },
    ]);
    const [input, setInput] = useState("");
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    // Scroll to latest message whenever messages change
    useEffect(() => {
        if (isOpen) {
            bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    const sendMessage = (text) => {
        const trimmed = (text ?? input).trim();
        if (!trimmed) return;

        const userMsg = { role: "user", text: trimmed };
        const botReply = {
            role: "bot",
            text: processMessage(trimmed, {
                menuCategories,
                resName,
                addToCart,
                cartItems,
            }),
        };

        setMessages((prev) => [...prev, userMsg, botReply]);
        setInput("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const cartCount = Object.values(cartItems).reduce(
        (s, i) => s + i.quantity,
        0
    );

    return (
        <div className="chatbot-container">
            {isOpen && (
                <div className="chatbot-window" role="dialog" aria-label="Menu assistant">
                    {/* Header */}
                    <div className="chatbot-header">
                        <span className="chatbot-avatar" aria-hidden="true">🍽️</span>
                        <div className="chatbot-header-text">
                            <span className="chatbot-title">Foodie Bot</span>
                            <span className="chatbot-subtitle">Menu Assistant</span>
                        </div>
                        <button
                            className="chatbot-close"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chat"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Message list */}
                    <div className="chatbot-messages" aria-live="polite">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`chatbot-msg chatbot-msg-${msg.role}`}
                            >
                                {msg.role === "bot" && (
                                    <span className="chatbot-msg-icon" aria-hidden="true">
                                        🤖
                                    </span>
                                )}
                                <p className="chatbot-msg-text">{msg.text}</p>
                            </div>
                        ))}
                        <div ref={bottomRef} />
                    </div>

                    {/* Quick suggestion chips */}
                    <div className="chatbot-suggestions">
                        {SUGGESTIONS.map((s) => (
                            <button
                                key={s}
                                className="chatbot-chip"
                                onClick={() => sendMessage(s)}
                            >
                                {s}
                            </button>
                        ))}
                    </div>

                    {/* Input row */}
                    <div className="chatbot-input-row">
                        <input
                            ref={inputRef}
                            type="text"
                            className="chatbot-input"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask about the menu…"
                            aria-label="Chat input"
                            maxLength={200}
                        />
                        <button
                            className="chatbot-send-btn"
                            onClick={() => sendMessage()}
                            aria-label="Send message"
                            disabled={!input.trim()}
                        >
                            ➤
                        </button>
                    </div>
                </div>
            )}

            {/* Floating action button */}
            <button
                className="chatbot-fab"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Close menu assistant" : "Open menu assistant"}
            >
                {isOpen ? (
                    <span className="chatbot-fab-icon">✕</span>
                ) : (
                    <>
                        <span className="chatbot-fab-icon">💬</span>
                        {cartCount > 0 && (
                            <span className="chatbot-fab-badge">{cartCount}</span>
                        )}
                    </>
                )}
            </button>
        </div>
    );
};

export default MenuChatbot;
