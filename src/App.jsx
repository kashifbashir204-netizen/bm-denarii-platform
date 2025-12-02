import React, { useState, useEffect } from 'react';

// --- Icons (Inline SVGs for reliability) ---
const Icons = {
    Menu: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>,
    X: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>,
    ChevronRight: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6" /></svg>,
    Zap: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
    Cpu: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></svg>,
    Globe: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
    Layers: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" /><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" /></svg>,
    Rocket: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.1 4-1 4-1" /><path d="M12 15v5s3.03-.55 4-2c1.1-1.62 1-4 1-4" /></svg>,
    CheckCircle: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>,
    Twitter: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5S1.2 11.8 6.5 5.2c-2.3 0-4.6 1.8-4.6 1.8s.2-4.1 2.6-5.5c-2 0-3.3.6-3.3.6s.9-3.2 4-3.5h0c-1.3-.9-2.4-1.3-2.4-1.3s1.2-.4 3.5.3c2.2.7 5.7 3.2 5.7 3.2s3.6-3 6.8-2.6c3.2.3 3.6 2.3 3.6 2.3zM8.3 19s7.4 2.5 11.8-2.5" /></svg>,
    Shield: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>,
    Coins: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="8" cy="8" r="6" /><path d="M18.09 10.37A6 6 0 1 1 10.34 18" /><path d="M7 6h1v4" /><path d="m16.71 13.88.7 .71-2.82 2.82" /></svg>,
    Users: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    Code: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    Wallet: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>,
    Award: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>,
    ExternalLink: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" x2="21" y1="14" y2="3" /></svg>,
    Sparkles: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>,
    Terminal: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="4 17 10 11 4 5" /><line x1="12" x2="20" y1="19" y2="19" /></svg>,
    Play: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 3l14 9-14 9V3z" /></svg>,
    Megaphone: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg>,
    PieChart: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>,
    TrendingUp: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
    Download: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>,
    FileText: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>,
    Brain: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" /></svg>,
    MessageSquare: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
    Feather: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" /><line x1="16" x2="2" y1="8" y2="22" /><line x1="17.5" x2="9" y1="15" y2="15" /></svg>,
    AlertTriangle: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" x2="12" y1="9" y2="13" /><line x1="12" x2="12.01" y1="17" y2="17" /></svg>,
    Braces: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" /><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" /></svg>,
    Scroll: (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" /><path d="M19 17V5a2 2 0 0 0-2-2H4" /></svg>
};

// --- API Helper (OpenAI) ---
const generateContent = async (prompt) => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY || "";

    if (!apiKey) {
        return "âš ï¸ OpenAI API key not configured. Please add VITE_OPENAI_API_KEY to your environment variables.";
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 500,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || "OpenAI API Error");
        }

        const data = await response.json();
        return data.choices?.[0]?.message?.content || "AI is contemplating the blockchain. Try again!";
    } catch (error) {
        console.error("AI Error:", error);
        return `Error: ${error.message}. Please check your API key and try again.`;
    }
};

// --- Reusable Components ---

const GlassCard = ({ children, className = "" }) => (
    <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:bg-white/10 transition-all duration-300 ${className}`}>
        {children}
    </div>
);

const SectionTitle = ({ title, subtitle, center = true }) => (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
            {title}
        </h2>
        {subtitle && (
            <p className="text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto">
                {subtitle}
            </p>
        )}
    </div>
);

const Badge = ({ text, color = "blue" }) => {
    const colors = {
        blue: "bg-blue-500/20 text-blue-300 border-blue-500/30",
        purple: "bg-purple-500/20 text-purple-300 border-purple-500/30",
        green: "bg-green-500/20 text-green-300 border-green-500/30",
        gold: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
        pink: "bg-pink-500/20 text-pink-300 border-pink-500/30",
        cyan: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
        orange: "bg-orange-500/20 text-orange-300 border-orange-500/30",
        emerald: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    };
    return (
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${colors[color]} uppercase tracking-wider inline-block`}>
            {text}
        </span>
    );
};

const Button = ({ children, primary = false, className = "", onClick, disabled }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`
      px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto
      ${primary
                ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:shadow-[0_0_30px_rgba(79,70,229,0.7)]'
                : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md'}
      ${className}
    `}
    >
        {children}
    </button>
);

const CodeBlock = ({ code }) => (
    <div className="bg-[#0f0f1a] border border-white/10 rounded-lg p-4 mt-4 overflow-x-auto">
        <pre className="text-xs md:text-sm text-green-400 font-mono whitespace-pre-wrap">{code}</pre>
    </div>
);

// --- New Tron Grid Component ---
const NeonGrid = () => {
    return (
        <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
            <style>{`
        @keyframes grid-flow {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(40px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
      `}</style>

            {/* Deep Space Background */}
            <div className="absolute inset-0 bg-[#05050a]"></div>

            {/* Stars (Simple CSS dots for performance) */}
            <div className="absolute inset-0 opacity-50">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                            top: `${Math.random() * 50}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Moving Grid Floor */}
            <div className="absolute w-[200%] h-[200%] -left-[50%] top-0 
        bg-[linear-gradient(to_right,rgba(99,102,241,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.2)_1px,transparent_1px)] 
        bg-[size:40px_40px] 
        origin-top
        animate-[grid-flow_1.5s_linear_infinite]
      "></div>

            {/* Horizon Glow / Fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1c] via-transparent to-[#0a0a1c] h-full"></div>
            <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-[#0a0a1c] to-transparent"></div>
        </div>
    );
};

// --- SEO Component ---
const SEO = () => {
    useEffect(() => {
        document.title = "BM Denarii | Web3 Builder Platform";
        const setMeta = (name, content) => {
            let element = document.querySelector(`meta[name="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('name', name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };
        setMeta('description', 'Join the BM Denarii 1 Million No-Code Web3 Devs Program. Build apps on XRPL, Algorand, and HBAR using AI. Free training, hosting, and rewards.');
        setMeta('keywords', 'Web3, No-Code, AI Builder, XRPL, Algorand, Hedera, HBAR, Blockchain Dev, Free Hosting');
        setMeta('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');

        const setOg = (property, content) => {
            let element = document.querySelector(`meta[property="${property}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('property', property);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        }
        setOg('og:title', 'BM Denarii - Build Web3 Apps with AI');
        setOg('og:description', 'The world\'s largest no-code Web3 developer movement. Start building for free today.');
        setOg('og:image', 'https://i.postimg.cc/tgW2YC8s/Gemini-Generated-Image-iopz5wiopz5wiopz.png');
        setOg('og:type', 'website');

        // Add Favicon
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = 'https://pbs.twimg.com/media/G7FCvGBXQAAEGIQ?format=jpg&name=large';

    }, []);
    return null;
};

// --- Sections ---

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a1c]/90 backdrop-blur-lg border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src="https://pbs.twimg.com/media/G7FCvGBXQAAEGIQ?format=jpg&name=large"
                        alt="BM Denarii Logo"
                        className="w-10 h-10 rounded-lg shadow-lg border border-white/10 bg-white"
                    />
                    <span className="text-2xl font-bold text-white tracking-tight">BM Denarii</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-300">
                    <a href="#about" className="hover:text-white transition-colors">Mission</a>
                    <a href="#flagship" className="hover:text-white transition-colors text-pink-400 font-bold">AI Idea</a>
                    <a href="#ai-architect" className="hover:text-white transition-colors">Architect</a>
                    <a href="#alchemist" className="hover:text-white transition-colors text-yellow-400 font-bold">Alchemist</a>
                    <a href="#whitepaper" className="hover:text-white transition-colors text-cyan-400 font-bold">Whitepaper</a>
                    <a href="#code-catalyst" className="hover:text-white transition-colors text-orange-400 font-bold">Code Catalyst</a>
                    <a href="#risk-radar" className="hover:text-white transition-colors text-red-400 font-bold">Risk Radar</a>
                    <a href="#grant-guardian" className="hover:text-white transition-colors text-emerald-400 font-bold">Grant Guardian</a>
                    <a href="#xrpl-guide" className="hover:text-white transition-colors flex items-center gap-1"><Icons.Code size={16} /> Guide</a>
                    <button className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-full text-white border border-white/20 transition-all">
                        Connect Wallet
                    </button>
                </div>

                <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                    {isOpen ? <Icons.X /> : <Icons.Menu />}
                </button>
            </div>

            {/* Mobile Menu with Scroll Support */}
            {isOpen && (
                <div className="lg:hidden absolute top-20 left-0 right-0 bg-[#0a0a1c] border-b border-white/10 p-6 flex flex-col gap-2 shadow-2xl z-50 max-h-[85vh] overflow-y-auto">

                    <a href="#about" className="text-lg text-gray-300 hover:text-white border-b border-white/5 pb-2" onClick={() => setIsOpen(false)}>Mission</a>

                    <div className="text-xs font-bold text-gray-500 uppercase mt-4 mb-2">AI Tools</div>
                    <a href="#flagship" className="text-lg text-pink-400 font-bold hover:text-pink-300 pl-4 border-l-2 border-pink-500/30" onClick={() => setIsOpen(false)}>AI Idea Generator</a>
                    <a href="#ai-architect" className="text-lg text-gray-300 hover:text-white pl-4 border-l-2 border-white/10" onClick={() => setIsOpen(false)}>AI Architect</a>
                    <a href="#alchemist" className="text-lg text-yellow-400 font-bold hover:text-yellow-300 pl-4 border-l-2 border-yellow-500/30" onClick={() => setIsOpen(false)}>Asset Alchemist</a>
                    <a href="#whitepaper" className="text-lg text-cyan-400 font-bold hover:text-cyan-300 pl-4 border-l-2 border-cyan-500/30" onClick={() => setIsOpen(false)}>Whitepaper AI</a>
                    <a href="#code-catalyst" className="text-lg text-orange-400 font-bold hover:text-orange-300 pl-4 border-l-2 border-orange-500/30" onClick={() => setIsOpen(false)}>Code Catalyst</a>
                    <a href="#risk-radar" className="text-lg text-red-400 font-bold hover:text-red-300 pl-4 border-l-2 border-red-500/30" onClick={() => setIsOpen(false)}>Risk Radar</a>
                    <a href="#grant-guardian" className="text-lg text-emerald-400 font-bold hover:text-emerald-300 pl-4 border-l-2 border-emerald-500/30" onClick={() => setIsOpen(false)}>Grant Guardian</a>

                    <div className="text-xs font-bold text-gray-500 uppercase mt-4 mb-2">Resources</div>
                    <a href="#xrpl-guide" className="text-lg text-gray-300 hover:text-white pl-4 border-l-2 border-white/10" onClick={() => setIsOpen(false)}>Dev Guide</a>
                    <a href="#examples" className="text-lg text-gray-300 hover:text-white pl-4 border-l-2 border-white/10" onClick={() => setIsOpen(false)}>Build Examples</a>
                    <a href="#training" className="text-lg text-gray-300 hover:text-white pl-4 border-l-2 border-white/10" onClick={() => setIsOpen(false)}>Training</a>

                    <div className="mt-6">
                        <button className="w-full bg-indigo-600 py-3 rounded-full text-white font-bold">
                            Connect Wallet
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

const Hero = () => {
    return (
        <header className="relative min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden">
            {/* New Neon Tron Grid Background */}
            <NeonGrid />

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left order-2 md:order-1">
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                        <Badge text="The 1 Million Devs Program" color="blue" />
                    </div>
                    <h1 className="mt-2 text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-indigo-200 leading-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        Build Web3 Apps.<br />
                        <span className="text-indigo-400">No Code Required.</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0 shadow-black drop-shadow-md">
                        Join the revolution. Use AI to build, deploy, and monetize apps on XRPL, Algorand, and Hedera. Zero cost. Zero experience needed.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href="https://denariiappideas.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <Button primary>Start Building</Button>
                        </a>
                        <a href="#examples">
                            <Button>Build Examples</Button>
                        </a>
                    </div>
                    <div className="mt-12 flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-gray-400 text-sm md:text-base font-medium">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div> XRPL</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"></div> ALGO</span>
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]"></div> HBAR</span>
                    </div>
                </div>

                <div className="relative group order-1 md:order-2">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        {/* Main Hero Logo Image */}
                        <img
                            src="https://pbs.twimg.com/media/G7FCvGBXQAAEGIQ?format=jpg&name=large"
                            alt="BM Denarii Logo - Large"
                            className="w-full h-auto object-cover transform transition duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="mt-4 text-center">
                        <a
                            href="https://x.com/bmsquantum"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block hover:scale-105 transition-transform duration-300 cursor-pointer"
                        >
                            <p className="text-white font-bold text-lg hover:text-indigo-400 transition-colors text-shadow-glow">"Good Morning, Champion!"</p>
                            <p className="text-blue-300 text-sm hover:text-indigo-300 transition-colors">Join the best chill n shill space</p>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

const VideoShowcase = () => {
    const videos = [
        { id: "7abXjC6t7hA", title: "BM Denarii Intro" },
        { id: "ofNbO4DZXPg", title: "Platform Demo" },
        { id: "3j7M4KSD6WM", title: "Builder Tutorial" },
        { id: "CI1_WrslrYI", title: "Ecosystem Overview" },
        { id: "-2KBz5yLihA", title: "Success Stories" },
    ];

    return (
        <section className="py-20 bg-[#0a0a1c]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-10">
                    <Badge text="Experience the Future" color="pink" />
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">See BM Denarii In Action</h2>
                </div>

                {/* Main Feature Video */}
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.2)] bg-black/50 mb-12">
                    <div className="aspect-w-16 aspect-h-9 relative pt-[56.25%]">
                        <iframe
                            src={`https://www.youtube.com/embed/${videos[0].id}?autoplay=0&controls=1&rel=0&mute=0`}
                            title={videos[0].title}
                            className="absolute top-0 left-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Secondary Videos Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {videos.slice(1).map((video) => (
                        <div key={video.id} className="relative rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/30 group hover:border-indigo-500/50 transition-all">
                            <div className="relative pt-[56.25%]">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}?autoplay=0&controls=1&rel=0&mute=0`}
                                    title={video.title}
                                    className="absolute top-0 left-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const MissionBanner = () => {
    return (
        <section className="py-12 bg-[#0a0a1c]">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1c] via-transparent to-transparent z-10"></div>
                    <img
                        src="https://i.postimg.cc/858M32kB/unnamed-2025-11-29T001543-130.png"
                        alt="BM Denarii Mission"
                        className="w-full h-64 md:h-[400px] object-cover transform transition duration-1000 group-hover:scale-105 opacity-90 hover:opacity-100"
                    />
                </div>
            </div>
        </section>
    );
};

const About = () => {
    return (
        <section id="about" className="py-24 bg-[#0a0a1c] relative">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle
                    title="The Mission"
                    subtitle="We're onboarding 1,000,000 new builders to Web3."
                />

                <div className="grid md:grid-cols-3 gap-8">
                    <GlassCard className="text-center">
                        <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-full flex items-center justify-center mb-6 text-red-400">
                            <Icons.Award size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-gray-400 leading-relaxed">
                            To democratize blockchain development. We provide the tools, the education, and the funding to turn anyone into a Web3 founder.
                        </p>
                    </GlassCard>

                    <GlassCard className="text-center bg-indigo-900/10">
                        <div className="w-16 h-16 mx-auto bg-indigo-500/20 rounded-full flex items-center justify-center mb-6 text-indigo-400">
                            <Icons.Cpu size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Method</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Combining Google AI Studio for frontend, Antigravity for backend, and our custom connectors to make building blockchain apps drag-and-drop simple.
                        </p>
                    </GlassCard>

                    <GlassCard className="text-center">
                        <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-6 text-purple-400">
                            <Icons.Globe size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Ecosystem</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Built natively for XRPL, Algorand, and Hedera. Integrated with Xaman Wallet and DFi payments for instant monetization.
                        </p>
                    </GlassCard>
                </div>

                {/* Trade, Trustline, DEX, & Wallet Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
                    <a href="https://xpmarket.com/token/DFI-rUY6tjGN8PJDVyVFLztRZLmPZ8uTBUfa2Z" target="_blank" rel="noopener noreferrer">
                        <Button primary className="flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] bg-gradient-to-r from-green-600 to-teal-600 border-none w-full sm:w-auto">
                            <Icons.TrendingUp size={20} /> Trade DFi (XRPL)
                        </Button>
                    </a>
                    <a href="https://xpmarket.com/trustline/DFI-rUY6tjGN8PJDVyVFLztRZLmPZ8uTBUfa2Z/set" target="_blank" rel="noopener noreferrer">
                        <Button className="flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] bg-gradient-to-r from-blue-600 to-indigo-600 border-none text-white w-full sm:w-auto">
                            <Icons.Shield size={20} /> Set Trustline
                        </Button>
                    </a>
                    <a href="https://xpmarket.com/dex/DFI-rUY6tjGN8PJDVyVFLztRZLmPZ8uTBUfa2Z/XRP?trade=market" target="_blank" rel="noopener noreferrer">
                        <Button className="flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] bg-gradient-to-r from-purple-600 to-pink-600 border-none text-white w-full sm:w-auto">
                            <Icons.Zap size={20} /> XPMarket DEX
                        </Button>
                    </a>
                    <a href="https://xaman.app/" target="_blank" rel="noopener noreferrer">
                        <Button className="flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:shadow-[0_0_50px_rgba(14,165,233,0.5)] bg-gradient-to-r from-sky-600 to-cyan-600 border-none text-white w-full sm:w-auto">
                            <Icons.Download size={20} /> Download Xaman
                        </Button>
                    </a>
                </div>

                <div className="mt-12 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1c] via-transparent to-transparent z-10"></div>
                    <img
                        src="https://i.postimg.cc/tgW2YC8s/Gemini-Generated-Image-iopz5wiopz5wiopz.png"
                        alt="BM Denarii Mission Vision"
                        className="w-full h-64 md:h-[500px] object-cover object-top transform transition duration-1000 group-hover:scale-105 opacity-90 hover:opacity-100"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-center">
                        <p className="text-white/80 font-medium text-lg italic">"Building the decentralized future, one block at a time."</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

const HowItWorks = () => {
    const steps = [
        { title: "Log In", desc: "Secure Firebase Auth + Google Sign-In", icon: <Icons.Users /> },
        { title: "Dashboard", desc: "Access your builder HQ & rewards", icon: <Icons.Layers /> },
        { title: "AI Build", desc: "Generate frontend & backend code", icon: <Icons.Cpu /> },
        { title: "Deploy", desc: "Drag to Netlify for free hosting", icon: <Icons.Rocket /> },
        { title: "Earn", desc: "Get DFi for tasks & referrals", icon: <Icons.Coins /> },
    ];

    const infographics = [
        { src: "https://i.postimg.cc/C5hBpY3h/unnamed-2025-11-30T143152-646.png", alt: "Architecture Blueprint" },
        { src: "https://i.postimg.cc/Yqy4Z5bS/Gemini-Generated-Image-de0c1dde0c1dde0c.png", alt: "Ecosystem Flow" }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-gradient-to-b from-[#0a0a1c] to-[#0f0f2e]">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="From Idea to App in 5 Steps" />

                <div className="relative mt-16">
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 z-0"></div>

                    <div className="grid md:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-[#1c1c3d] border-2 border-indigo-500/30 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:border-indigo-400 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300 bg-[#0a0a1c]">
                                    <div className="text-indigo-400">{step.icon}</div>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Step {idx + 1}</h4>
                                <div className="text-lg font-semibold text-indigo-300 mb-2">{step.title}</div>
                                <p className="text-sm text-gray-500">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* New Infographics Section with both images */}
                <div className="mt-20 grid md:grid-cols-2 gap-8">
                    {infographics.map((img, idx) => (
                        <div key={idx} className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                            <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors"></div>
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-auto object-cover p-2 md:p-4"
                            />
                            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-xs text-gray-400">
                                {img.alt}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FlagshipApp = () => {
    const [niche, setNiche] = useState("");
    const [idea, setIdea] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleGenerateIdea = async () => {
        if (!niche) return;
        setLoading(true);
        const prompt = `You are a visionary Web3 product manager. Generate a creative, viable Web3 app idea for the '${niche}' industry. It must use XRPL, Algorand, or Hedera. Return a concise response with these fields: "App Name", "Blockchain", "Tagline", "Core Feature", "Monetization".`;

        const result = await generateContent(prompt);
        setIdea(result);
        setLoading(false);
    };

    return (
        <section id="flagship" className="py-24 bg-[#0a0a1c]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-1 shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500">
                            <div className="bg-[#0f0f1a] rounded-xl overflow-hidden min-h-[400px] flex flex-col items-center justify-center border border-white/10 relative p-8">

                                {!idea && !loading && (
                                    <>
                                        <div className="text-6xl mb-4">ðŸ’¡</div>
                                        <h4 className="text-2xl text-white font-bold mb-2">The Idea Generator</h4>
                                        <p className="text-indigo-400 mb-6 text-center">Enter a niche (e.g., "Real Estate", "Gaming")</p>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white mb-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                            placeholder="Type a niche here..."
                                            value={niche}
                                            onChange={(e) => setNiche(e.target.value)}
                                        />
                                        <button
                                            onClick={handleGenerateIdea}
                                            disabled={!niche}
                                            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                                        >
                                            <Icons.Sparkles size={18} /> Generate Web3 Idea âœ¨
                                        </button>
                                    </>
                                )}

                                {loading && (
                                    <div className="text-center">
                                        <Icons.Cpu className="animate-spin text-indigo-400 mx-auto mb-4" size={48} />
                                        <p className="text-white animate-pulse">Consulting the blockchain...</p>
                                    </div>
                                )}

                                {idea && !loading && (
                                    <div className="text-left w-full fade-in">
                                        <h4 className="text-xl text-green-400 font-bold mb-4 flex items-center gap-2">
                                            <Icons.CheckCircle size={20} /> Analysis Complete
                                        </h4>
                                        <div className="prose prose-invert text-sm text-gray-300 max-h-[300px] overflow-y-auto whitespace-pre-wrap">
                                            {idea}
                                        </div>
                                        <button
                                            onClick={() => setIdea(null)}
                                            className="mt-6 w-full border border-white/20 hover:bg-white/10 text-white py-2 rounded-xl transition-all"
                                        >
                                            Try Another Niche
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 text-center md:text-left">
                        <Badge text="Flagship App" color="purple" />
                        <h2 className="text-4xl font-bold text-white mt-6 mb-6">
                            Stuck? Use the <br /><span className="text-indigo-400">AI Idea Generator</span>
                        </h2>
                        <p className="text-lg text-gray-400 mb-6">
                            Our flagship tool uses AI to scan market trends and suggest viable Web3 app ideas that you can build in a weekend.
                        </p>
                        <ul className="space-y-3 mb-8 text-gray-300 text-left">
                            <li className="flex items-center gap-3"><Icons.CheckCircle size={18} className="text-indigo-500" /> Find gaps in the XRPL ecosystem</li>
                            <li className="flex items-center gap-3"><Icons.CheckCircle size={18} className="text-indigo-500" /> Generate branding & logos automatically</li>
                            <li className="flex items-center gap-3"><Icons.CheckCircle size={18} className="text-indigo-500" /> Export project plan to Builder Dashboard</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AIArchitect = () => {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAskArchitect = async () => {
        if (!query) return;
        setLoading(true);
        const prompt = `You are an expert Web3 Solution Architect using XRPL, Algorand, and Hedera. The user asks: "${query}". Provide a concise technical answer, suggesting a tech stack (Frontend, Backend, Blockchain, Wallet) and a 3-step execution plan. Keep it encouraging and under 150 words.`;

        const result = await generateContent(prompt);
        setResponse(result);
        setLoading(false);
    };

    return (
        <section id="ai-architect" className="py-24 bg-[#0f0f2e]">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <Badge text="New Feature" color="pink" />
                <SectionTitle
                    title="The AI Architect Mentor"
                    subtitle="Describe your dream app, and our AI will plan your tech stack instantly."
                />

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="flex flex-col gap-4">
                        <textarea
                            className="w-full bg-[#0a0a1c] border border-white/20 rounded-xl p-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-pink-500 focus:outline-none min-h-[100px]"
                            placeholder="e.g., I want to build a ticket reselling platform where organizers get royalties..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />

                        <div className="flex justify-end">
                            <Button
                                onClick={handleAskArchitect}
                                disabled={loading || !query}
                                className="bg-pink-600 hover:bg-pink-500 border-none text-white text-base py-3 px-6 flex items-center justify-center gap-2 w-full md:w-auto"
                            >
                                {loading ? <Icons.Cpu className="animate-spin" size={20} /> : <Icons.Brain size={20} />}
                                Design My App âœ¨
                            </Button>
                        </div>
                    </div>

                    {(response || loading) && (
                        <div className="mt-8 text-left bg-[#0a0a1c]/50 rounded-xl p-6 border border-white/10">
                            {loading ? (
                                <div className="flex items-center gap-3 text-gray-400">
                                    <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-75"></span>
                                    <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-150"></span>
                                    Designing architecture...
                                </div>
                            ) : (
                                <div className="prose prose-invert prose-p:text-gray-300">
                                    <h4 className="text-pink-400 font-bold mb-2 flex items-center gap-2">
                                        <Icons.MessageSquare size={18} /> Architect's Plan:
                                    </h4>
                                    <p className="whitespace-pre-wrap">{response}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

// Components exported at the end of file
// --- Asset Alchemist Component ---
const AssetAlchemist = () => {
    const [activeTab, setActiveTab] = useState("utility");
    const [tokenName, setTokenName] = useState("");
    const [tokenType, setTokenType] = useState("Utility Token");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const generate = async () => {
        if (!tokenName) return;
        setLoading(true);

        let prompt = "";
        if (activeTab === "utility") {
            prompt = `You are a Web3 Tokenomics Expert. Suggest 3 unique, high-value utility use-cases for a "${tokenType}" named "${tokenName}" on the XRPL/Hedera network. Focus on user retention, gamification, and real-world value. Avoid generic answers.`;
        } else {
            prompt = `You are a DAO Governance Architect. Design a unique governance or staking mechanism for a "${tokenType}" named "${tokenName}". Explain how voting works, what the incentives are for long-term holding, and how to prevent centralization.`;
        }

        const response = await generateContent(prompt);
        setResult(response);
        setLoading(false);
    };

    return (
        <section id="alchemist" className="py-24 bg-[#0a0a1c] relative">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                    <Badge text="Token Design Engine" color="gold" />
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4">The Asset Alchemist âš—ï¸</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Don't just launch a token. Engineer value. Let AI design your asset's utility and governance models.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Input Panel */}
                    <GlassCard>
                        <div className="flex gap-2 mb-6 bg-black/30 p-1 rounded-lg">
                            <button
                                onClick={() => { setActiveTab("utility"); setResult(""); }}
                                className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${activeTab === 'utility' ? 'bg-yellow-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                            >
                                Utility Ideas
                            </button>
                            <button
                                onClick={() => { setActiveTab("governance"); setResult(""); }}
                                className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${activeTab === 'governance' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                            >
                                Governance Model
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Token Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-[#0a0a1c] border border-white/10 rounded-lg p-3 text-white focus:border-yellow-500 focus:outline-none"
                                    placeholder="e.g. SolarBit"
                                    value={tokenName}
                                    onChange={(e) => setTokenName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Token Type</label>
                                <select
                                    className="w-full bg-[#0a0a1c] border border-white/10 rounded-lg p-3 text-white focus:border-yellow-500 focus:outline-none appearance-none"
                                    value={tokenType}
                                    onChange={(e) => setTokenType(e.target.value)}
                                >
                                    <option>Utility Token</option>
                                    <option>Governance Token</option>
                                    <option>Memecoin</option>
                                    <option>NFT Collection</option>
                                    <option>Stablecoin</option>
                                </select>
                            </div>
                            <Button
                                onClick={generate}
                                disabled={loading || !tokenName}
                                className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 border-none text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2"
                            >
                                {loading ? <Icons.Cpu className="animate-spin" /> : <Icons.Sparkles />}
                                {loading ? "Transmuting..." : "Generate Gold âœ¨"}
                            </Button>
                        </div>
                    </GlassCard>

                    {/* Output Panel */}
                    <div className="relative min-h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-indigo-500/10 rounded-2xl border border-white/10 backdrop-blur-sm p-6 overflow-y-auto">
                            {!result && !loading && (
                                <div className="h-full flex flex-col items-center justify-center text-gray-500 text-center opacity-60">
                                    {activeTab === 'utility' ? <Icons.Zap size={48} className="mb-4" /> : <Icons.Shield size={48} className="mb-4" />}
                                    <p>Enter your token details to alchemize new concepts.</p>
                                </div>
                            )}

                            {loading && (
                                <div className="h-full flex flex-col items-center justify-center text-yellow-400 animate-pulse">
                                    <Icons.Cpu size={48} className="animate-spin mb-4" />
                                    <p>Brewing concepts...</p>
                                </div>
                            )}

                            {result && !loading && (
                                <div className="prose prose-invert prose-sm max-w-none">
                                    <h3 className="text-white font-bold border-b border-white/10 pb-2 mb-4 flex items-center gap-2">
                                        {activeTab === 'utility' ? <Icons.Zap className="text-yellow-400" /> : <Icons.Shield className="text-indigo-400" />}
                                        Alchemist's Findings
                                    </h3>
                                    <div className="whitespace-pre-wrap text-gray-300">{result}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Whitepaper Weaver Component ---
const WhitepaperWeaver = () => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [tone, setTone] = useState("Professional");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const generate = async () => {
        if (!name || !desc) return;
        setLoading(true);

        const prompt = `Act as a professional Web3 technical writer. Create a comprehensive Whitepaper outline for a project named "${name}". Description: "${desc}". Include sections for Abstract, Problem, Solution, Tokenomics, and Roadmap. Tone: ${tone}.`;

        const response = await generateContent(prompt);
        setResult(response);
        setLoading(false);
    };

    return (
        <section id="whitepaper" className="py-24 bg-[#0f0f2e] relative">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                    <Badge text="Documentation AI" color="cyan" />
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4">The Whitepaper Weaver ðŸ“œ</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Transform your rough ideas into a structured, investor-ready whitepaper outline in seconds.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <GlassCard>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Project Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-[#0a0a1c] border border-white/10 rounded-lg p-3 text-white focus:border-cyan-500 focus:outline-none"
                                    placeholder="e.g. Nexus Protocol"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Core Concept</label>
                                <textarea
                                    className="w-full bg-[#0a0a1c] border border-white/10 rounded-lg p-3 text-white h-24 focus:border-cyan-500 focus:outline-none"
                                    placeholder="Describe what your project does..."
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Tone</label>
                                <select
                                    className="w-full bg-[#0a0a1c] border border-white/10 rounded-lg p-3 text-white focus:border-cyan-500 focus:outline-none appearance-none"
                                    value={tone}
                                    onChange={(e) => setTone(e.target.value)}
                                >
                                    <option>Professional & Academic</option>
                                    <option>Visionary & Bold</option>
                                    <option>Community-Centric & Hype</option>
                                    <option>Technical & Detailed</option>
                                </select>
                            </div>
                            <Button
                                onClick={generate}
                                disabled={loading || !name || !desc}
                                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border-none text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2"
                            >
                                {loading ? <Icons.Cpu className="animate-spin" /> : <Icons.Feather />}
                                {loading ? "Weaving..." : "Draft Whitepaper âœ¨"}
                            </Button>
                        </div>
                    </GlassCard>

                    <div className="relative min-h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-white/10 backdrop-blur-sm p-6 overflow-y-auto">
                            {!result && !loading && (
                                <div className="h-full flex flex-col items-center justify-center text-gray-500 text-center opacity-60">
                                    <Icons.FileText size={48} className="mb-4" />
                                    <p>Your whitepaper structure will appear here.</p>
                                </div>
                            )}

                            {loading && (
                                <div className="h-full flex flex-col items-center justify-center text-cyan-400 animate-pulse">
                                    <Icons.Cpu size={48} className="animate-spin mb-4" />
                                    <p>Structuring your vision...</p>
                                </div>
                            )}

                            {result && !loading && (
                                <div className="prose prose-invert prose-sm max-w-none">
                                    <h3 className="text-white font-bold border-b border-white/10 pb-2 mb-4 flex items-center gap-2">
                                        <Icons.Feather className="text-cyan-400" />
                                        Whitepaper Draft
                                    </h3>
                                    <div className="whitespace-pre-wrap text-gray-300">{result}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Code Catalyst Component ---
const CodeCatalyst = () => {
    const [chain, setChain] = useState("XRPL");
    const [request, setRequest] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const generate = async () => {
        if (!request) return;
        setLoading(true);

        const prompt = `Act as a senior blockchain developer. Generate a code snippet or transaction payload for the following request: "${request}" on the "${chain}" blockchain. Explain briefly how to use it. Return code in markdown format.`;

        const response = await generateContent(prompt);
        setResult(response);
        setLoading(false);
    };

    return (
        <section id="code-catalyst" className="py-24 bg-[#0a0a1c] relative">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                    <Badge text="Dev Tools" color="orange" />
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4">The Code Catalyst âš¡</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        From natural language to executable code. Generate smart contract snippets and transaction payloads instantly.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <GlassCard>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Blockchain</label>
                                <select
                                    className="w-full bg-[#0a0a1c] border border-white/10 rounded-lg p-3 text-white focus:border-orange-500 focus:outline-none appearance-none"
                                    value={chain}
                                    onChange={(e) => setChain(e.target.value)}
                                >
                                    <option>XRPL</option>
                                    <option>Algorand</option>
                                    <option>Hedera</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">What do you want to build?</label>
                                <textarea
                                    className="w-full bg-[#0a0a1c] border border-white/10 rounded-lg p-3 text-white h-24 focus:border-orange-500 focus:outline-none"
                                    placeholder="e.g. Create a fixed supply token named DNRI..."
                                    value={request}
                                    onChange={(e) => setRequest(e.target.value)}
                                />
                            </div>
                            <Button
                                onClick={generate}
                                disabled={loading || !request}
                                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 border-none text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2"
                            >
                                {loading ? <Icons.Cpu className="animate-spin" /> : <Icons.Code />}
                                {loading ? "Coding..." : "Generate Code ðŸ’»"}
                            </Button>
                        </div>
                    </GlassCard>

                    <div className="relative min-h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl border border-white/10 backdrop-blur-sm p-6 overflow-y-auto">
                            {!result && !loading && (
                                <div className="h-full flex flex-col items-center justify-center text-gray-500 text-center opacity-60">
                                    <Icons.Terminal size={48} className="mb-4" />
                                    <p>Your generated code will appear here.</p>
                                </div>
                            )}

                            {loading && (
                                <div className="h-full flex flex-col items-center justify-center text-orange-400 animate-pulse">
                                    <Icons.Cpu size={48} className="animate-spin mb-4" />
                                    <p>Compiling logic...</p>
                                </div>
                            )}

                            {result && !loading && (
                                <div className="prose prose-invert prose-sm max-w-none">
                                    <h3 className="text-white font-bold border-b border-white/10 pb-2 mb-4 flex items-center gap-2">
                                        <Icons.Braces className="text-orange-400" />
                                        Generated Snippet
                                    </h3>
                                    <div className="whitespace-pre-wrap text-gray-300 font-mono text-xs">{result}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const RiskRadar = () => {
    const [desc, setDesc] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const generate = async () => {
        if (!desc) return;
        setLoading(true);

        const prompt = `Act as a Web3 Security Auditor and Strategic Advisor. Analyze the following project description for potential pitfalls: "${desc}". 
    Categorize risks into: 
    1. Smart Contract/Technical Risks 
    2. Economic/Tokenomic Risks 
    3. Regulatory/Compliance Risks
    
    Be critical but constructive. Provide specific mitigation strategies for each risk. Format the output clearly.`;

        const response = await generateContent(prompt);
        setResult(response);
        setLoading(false);
    };

    return (
        <section id="risk-radar" className="py-24 bg-[#0a0a1c] relative">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                    <Badge text="Security Intelligence" color="pink" />
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4">The Risk Radar ðŸ›¡ï¸</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Identify vulnerabilities before you launch. Get an AI-powered audit of your project's technical and economic model.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <GlassCard>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Project Concept</label>
                                <textarea
                                    className="w-full bg-[#0a0a1c] border border-white/10 rounded-lg p-3 text-white h-48 focus:border-pink-500 focus:outline-none"
                                    placeholder="Describe your project, tokenomics, and tech stack in detail..."
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                />
                            </div>
                            <Button
                                onClick={generate}
                                disabled={loading || !desc}
                                className="w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-500 hover:to-red-500 border-none text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2"
                            >
                                {loading ? <Icons.Cpu className="animate-spin" /> : <Icons.AlertTriangle />}
                                {loading ? "Scanning..." : "Scan for Risks ðŸ”"}
                            </Button>
                        </div>
                    </GlassCard>

                    <div className="relative min-h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-2xl border border-white/10 backdrop-blur-sm p-6 overflow-y-auto">
                            {!result && !loading && (
                                <div className="h-full flex flex-col items-center justify-center text-gray-500 text-center opacity-60">
                                    <Icons.Shield size={48} className="mb-4" />
                                    <p>Your security audit report will appear here.</p>
                                </div>
                            )}

                            {loading && (
                                <div className="h-full flex flex-col items-center justify-center text-pink-400 animate-pulse">
                                    <Icons.Cpu size={48} className="animate-spin mb-4" />
                                    <p>Analyzing attack vectors...</p>
                                </div>
                            )}

                            {result && !loading && (
                                <div className="prose prose-invert prose-sm max-w-none">
                                    <h3 className="text-white font-bold border-b border-white/10 pb-2 mb-4 flex items-center gap-2">
                                        <Icons.AlertTriangle className="text-red-400" />
                                        Risk Assessment Report
                                    </h3>
                                    <div className="whitespace-pre-wrap text-gray-300">{result}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Grant Guardian Component ---
const GrantGuardian = () => {
    const [project, setProject] = useState("");
    const [chain, setChain] = useState("XRPL");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const generate = async () => {
        if (!project || !amount) return;
        setLoading(true);

        const prompt = `Act as a professional grant writer for Web3 foundations. Draft a persuasive grant proposal for a project named "${project}" on the ${chain} blockchain seeking $${amount}. 
    
    Focus on:
    1. How this project drives adoption for ${chain}.
    2. The problem it solves using No-Code tools.
    3. Clear milestones for funding.
    
    Structure it with Executive Summary, Project Description, Impact Analysis, and Budget Breakdown.`;

        const response = await generateContent(prompt);
        setResult(response);
        setLoading(false);
    };

    return (
        <section id="grant-guardian" className="py-24 bg-[#0a0a1c] relative">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                    <Badge text="Funding Accelerator" color="emerald" />
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4">The Grant Guardian ðŸ¦</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Secure the bag. Generate professional grant proposals tailored to the XRPL, Algorand, and Hedera foundations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <GlassCard>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Project Name & Pitch</label>
                                <textarea
                                    className="w-full bg-[#0a0a1c] border border-white/10 rounded-lg p-3 text-white h-32 focus:border-emerald-500 focus:outline-none"
                                    placeholder="e.g. SolarBit: A decentralized energy marketplace..."
                                    value={project}
                                    onChange={(e) => setProject(e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Target Foundation</label>
                                    <select
                                        className="w-full bg-[#0a0a1c] border border-white/10 rounded-lg p-3 text-white focus:border-emerald-500 focus:outline-none appearance-none"
                                        value={chain}
                                        onChange={(e) => setChain(e.target.value)}
                                    >
                                        <option>XRPL</option>
                                        <option>Algorand</option>
                                        <option>Hedera</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Funding Ask ($)</label>
                                    <input
                                        type="text"
                                        className="w-full bg-[#0a0a1c] border border-white/10 rounded-lg p-3 text-white focus:border-emerald-500 focus:outline-none"
                                        placeholder="50,000"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                </div>
                            </div>
                            <Button
                                onClick={generate}
                                disabled={loading || !project}
                                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 border-none text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2"
                            >
                                {loading ? <Icons.Cpu className="animate-spin" /> : <Icons.Scroll />}
                                {loading ? "Drafting Proposal..." : "Generate Grant ðŸ’°"}
                            </Button>
                        </div>
                    </GlassCard>

                    <div className="relative min-h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl border border-white/10 backdrop-blur-sm p-6 overflow-y-auto">
                            {!result && !loading && (
                                <div className="h-full flex flex-col items-center justify-center text-gray-500 text-center opacity-60">
                                    <Icons.Award size={48} className="mb-4" />
                                    <p>Your winning grant proposal will appear here.</p>
                                </div>
                            )}

                            {loading && (
                                <div className="h-full flex flex-col items-center justify-center text-emerald-400 animate-pulse">
                                    <Icons.Cpu size={48} className="animate-spin mb-4" />
                                    <p>Analyzing foundation criteria...</p>
                                </div>
                            )}

                            {result && !loading && (
                                <div className="prose prose-invert prose-sm max-w-none">
                                    <h3 className="text-white font-bold border-b border-white/10 pb-2 mb-4 flex items-center gap-2">
                                        <Icons.Scroll className="text-emerald-400" />
                                        Grant Proposal Draft
                                    </h3>
                                    <div className="whitespace-pre-wrap text-gray-300">{result}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Components exported at the end of file
const XRPLGuide = () => {
    return (
        <section id="xrpl-guide" className="py-24 bg-[#0a0a1c] relative">
            <div className="max-w-4xl mx-auto px-6">
                <SectionTitle title="XRPL Integration Guide" subtitle="Automated payments and token configuration templates." />

                <div className="space-y-8">
                    <GlassCard>
                        <h3 className="text-xl font-bold text-white flex items-center gap-2"><Icons.Terminal size={20} /> 1. Token Configuration</h3>
                        <p className="text-gray-400 mt-2 text-sm">Define your token constants. Standard codes (USD, XRP) use directly. Non-standard (3+ chars) must be converted to a 160-bit Hex string.</p>
                        <CodeBlock code={`// config.js\nexport const TOKEN_NAME = 'MYTOKEN';\nexport const TOKEN_HEX = '4D59544F4B454E00000000000000000000000000'; // 160-bit Hex\nexport const ISSUER_ADDRESS = 'r...';\nexport const CLAIM_WALLET = 'r...';`} />
                    </GlassCard>

                    <GlassCard>
                        <h3 className="text-xl font-bold text-white flex items-center gap-2"><Icons.Wallet size={20} /> 2. Xaman Wallet Connection</h3>
                        <p className="text-gray-400 mt-2 text-sm">Use the Xaman (formerly Xumm) SDK or API for secure signing in your frontend.</p>
                        <CodeBlock code={`const signIn = async () => {\n    // 1. Redirect to Xaman Login\n    // 2. Receive payload: { account: 'rUser...', user_token: '...' }\n    // 3. Store user_token securely\n};`} />
                    </GlassCard>

                    <GlassCard>
                        <h3 className="text-xl font-bold text-white flex items-center gap-2"><Icons.Shield size={20} /> 3. Trustlines (Opt-In)</h3>
                        <p className="text-gray-400 mt-2 text-sm">Users must "trust" your issuer before they can hold your token. This transaction sets that limit.</p>
                        <CodeBlock code={`const trustSetTx = {\n    TransactionType: 'TrustSet',\n    Account: userAddress,\n    LimitAmount: {\n        currency: TOKEN_HEX,\n        issuer: ISSUER_ADDRESS,\n        value: '1000000000'\n    }\n};`} />
                    </GlassCard>

                    <GlassCard>
                        <h3 className="text-xl font-bold text-white flex items-center gap-2"><Icons.Coins size={20} /> 4. Checking Balances</h3>
                        <p className="text-gray-400 mt-2 text-sm">Query the ledger to see if a user holds your token using the <code>xrpl</code> client.</p>
                        <CodeBlock code={`import { Client } from 'xrpl';\n\nconst checkBalance = async (userAddress) => {\n    const client = new Client('wss://xrplcluster.com');\n    await client.connect();\n    const response = await client.request({\n        command: 'account_lines',\n        account: userAddress,\n        peer: ISSUER_ADDRESS\n    });\n    console.log(response.result.lines);\n    await client.disconnect();\n};`} />
                    </GlassCard>

                    <GlassCard>
                        <h3 className="text-xl font-bold text-white flex items-center gap-2"><Icons.Zap size={20} /> 5. Claim / Reward Flow</h3>
                        <p className="text-gray-400 mt-2 text-sm">To automate rewards, have the user send a tiny "trigger" transaction (1 drop) with a Memo specifying the claim.</p>
                        <CodeBlock code={`const claimTx = {\n    TransactionType: 'Payment',\n    Account: userAddress,\n    Destination: CLAIM_WALLET,\n    Amount: '1', // 1 drop\n    Memos: [\n        {\n            Memo: {\n                MemoData: Buffer.from(\`CLAIM:500\`).toString('hex')\n            }\n        }\n    ]\n};`} />
                    </GlassCard>

                    <GlassCard>
                        <h3 className="text-xl font-bold text-white flex items-center gap-2"><Icons.Cpu size={20} /> 6. Automated Processor</h3>
                        <p className="text-gray-400 mt-2 text-sm">Run a Node.js script on your backend to monitor the <code>CLAIM_WALLET</code> and automatically dispense tokens when valid triggers are received.</p>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};

const BuildExamples = () => {
    const examples = [
        {
            title: "MoonGirl Web3",
            url: "https://moongirl589buildweb3.netlify.app/",
            desc: "A community-driven Web3 builder hub for the MoonGirl ecosystem. BUILD THE UNKNOWABLE Defying Limits on the XRP Ledger.",
            color: "pink"
        },
        {
            title: "XMETA",
            url: "https://earnest-bunny-2e6859.netlify.app/",
            desc: "XMeta XGalaxies is back. A community takeover reviving the abandoned vision on the XRP Ledger. Decentralized. DAO-Governed. Built by You.",
            color: "green",
            img: "https://i.postimg.cc/02FJ4gyD/SIec-ZRq-D-400x400.jpg"
        },
        {
            title: "MoonBoi Arcade",
            url: "https://moonboi589arcade.netlify.app/",
            desc: "Play-to-earn arcade games integrated with the XRPL and MB589 token rewards.",
            color: "purple"
        },
        {
            title: "Shiba NFT AI",
            url: "https://shibanftai.netlify.app/",
            desc: "THE RESURGENCE IS HERE. A community takeover evolving into a utility-powered GameFi ecosystem. Fast. Scalable. Unstoppable.",
            color: "gold",
            img: "https://i.postimg.cc/25wyrgrG/ljyblb01-400x400.jpg"
        }
    ];

    return (
        <section id="examples" className="py-24 bg-[#0f0f2e]">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle
                    title="Community Builds"
                    subtitle="Check out what our builders are creating with BM Denarii tools."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {examples.map((ex, i) => (
                        <GlassCard key={i} className="hover:bg-white/10 group flex flex-col h-full">
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={ex.img || `https://www.google.com/s2/favicons?domain=${ex.url}&sz=128`}
                                    alt={`${ex.title} Icon`}
                                    className="w-12 h-12 rounded-xl shadow-lg bg-white p-1"
                                />
                                <h4 className="text-xl font-bold text-white">{ex.title}</h4>
                            </div>
                            <p className="text-gray-400 text-sm mb-6 flex-grow">{ex.desc}</p>
                            <a href={ex.url} target="_blank" rel="noopener noreferrer">
                                <Button className="w-full text-sm py-2 flex items-center justify-center gap-2">
                                    Launch App <Icons.ExternalLink size={16} />
                                </Button>
                            </a>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Training = () => {
    const modules = [
        "Web3 Fundamentals (Multi-Chain)",
        "AI App Design (Google AI Studio)",
        "Antigravity Backend Generation",
        "XRPL & Xaman Wallet Integration",
        "Multi-chain Token Payments",
        "Netlify Deployment (Free)",
        "Branding & App Monetization",
        "Airdrop System Design"
    ];

    return (
        <section id="training" className="py-24 bg-[#0a0a1c]">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <Badge text="Free Education" color="green" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-6 leading-tight">
                        The Complete No-Code <br />
                        <span className="text-green-400">Web3 Curriculum</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Stop paying for courses. Our entire A-Z builder program is free, community-driven, and supported by daily live sessions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="https://x.com/Denarii_DFI" target="_blank" rel="noopener noreferrer">
                            <Button primary>Start Learning</Button>
                        </a>
                        <a href="https://x.com/bmsquantum" target="_blank" rel="noopener noreferrer">
                            <Button>Join Daily Space</Button>
                        </a>
                    </div>
                </div>

                <GlassCard className="p-8 border-l-4 border-l-green-500">
                    <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">Course Modules</h3>
                    <ul className="space-y-4">
                        {modules.map((mod, idx) => (
                            <li key={idx} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                                <div className="min-w-[24px] text-green-400">
                                    <Icons.CheckCircle size={20} />
                                </div>
                                <span>{mod}</span>
                            </li>
                        ))}
                    </ul>
                </GlassCard>
            </div>
        </section>
    );
};

const Features = () => {
    const features = [
        { title: "No-Code Builder", desc: "Frontend + backend generated instantly via AI.", icon: <Icons.Code /> },
        { title: "Firebase Auth", desc: "Secure login + passwords stored in Firestore.", icon: <Icons.Shield /> },
        { title: "Multi-Chain Ready", desc: "Works natively with XRPL, Algorand, HBAR.", icon: <Icons.Globe /> },
        { title: "DFi Payment Rail", desc: "Instant payments & token-gating built in.", icon: <Icons.Coins /> },
        { title: "Free Hosting", desc: "Deploy to Netlify in seconds â€” zero cost.", icon: <Icons.Rocket /> },
        { title: "Xaman Connect", desc: "Built-in wallet login and signature requests.", icon: <Icons.Wallet /> },
    ];

    return (
        <section className="py-24 bg-[#0f0f2e]">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="Power Tools for Builders" center />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <GlassCard key={i} className="hover:bg-white/10 group">
                            <div className="text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors">{f.icon}</div>
                            <h4 className="text-xl font-bold text-white mb-2">{f.title}</h4>
                            <p className="text-gray-400">{f.desc}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

const RetweetReward = () => {
    const [url, setUrl] = useState("");
    const [status, setStatus] = useState("idle");

    const handleVerify = () => {
        if (!url) return;
        setStatus("verifying");
        setTimeout(() => setStatus("success"), 2000);
    };

    return (
        <section id="rewards" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <div className="mb-8">
                    <Badge text="Instant Rewards" color="gold" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Retweet to Claim <span className="text-yellow-400">10,000 DFi</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-10">
                    Spread the word about BM Denarii. Paste your retweet link below to instantly verify and credit your builder wallet.
                </p>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-2xl flex flex-col md:flex-row gap-2 max-w-2xl mx-auto">
                    <input
                        type="text"
                        placeholder="Paste your https://x.com/... status URL here"
                        className="flex-1 bg-transparent border-none text-white placeholder-gray-500 px-6 py-4 focus:ring-0 focus:outline-none w-full"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <button
                        onClick={handleVerify}
                        disabled={status !== 'idle'}
                        className={`
              w-full md:w-auto px-8 py-4 rounded-xl font-bold text-white transition-all
              ${status === 'success' ? 'bg-green-500 hover:bg-green-600' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90'}
            `}
                    >
                        {status === 'idle' && "Verify & Claim"}
                        {status === 'verifying' && "Verifying..."}
                        {status === 'success' && "Reward Sent!"}
                    </button>
                </div>

                {status === 'success' && (
                    <div className="mt-8 animate-bounce text-yellow-400 font-bold text-xl">
                        ðŸŽ‰ +10,000 DFi added to your wallet!
                    </div>
                )}
            </div>
        </section>
    );
};

const Community = () => {
    return (
        <section className="py-24 bg-gradient-to-t from-[#0a0a1c] to-[#0f0f2e]">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Community Banner Image */}
                <div className="mb-12 flex justify-center">
                    <img
                        src="https://i.postimg.cc/15tpTccy/unnamed-2025-11-30T165835-694.png"
                        alt="Join the BM Denarii Community"
                        className="max-w-full h-auto rounded-2xl shadow-2xl border border-white/10 hover:scale-[1.02] transition-transform duration-500"
                    />
                </div>

                <SectionTitle title="Join the Daily Spaces" subtitle="We build live, every single day." />

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    <GlassCard className="text-left bg-blue-900/10 border-blue-500/20">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-blue-400 font-bold text-sm">TODAY â€¢ 2:00 PM UTC</span>
                            <Icons.Twitter className="text-blue-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Building a DEX UI</h4>
                        <p className="text-sm text-gray-400 mb-6">Live coding session: styling a swap interface using Tailwind & React.</p>
                        <button className="w-full py-2 rounded bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition">Set Reminder</button>
                    </GlassCard>

                    <GlassCard className="text-left">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-500 font-bold text-sm">TOMORROW</span>
                            <Icons.Twitter className="text-gray-600" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Backend with Antigravity</h4>
                        <p className="text-sm text-gray-400 mb-6">Connecting your React frontend to a secure Firestore backend.</p>
                        <button className="w-full py-2 rounded bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition">View Details</button>
                    </GlassCard>

                    <GlassCard className="text-left">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-500 font-bold text-sm">ARCHIVE</span>
                            <Icons.Zap className="text-yellow-500" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Past Recordings</h4>
                        <p className="text-sm text-gray-400 mb-6">Access the library of over 50+ hours of building content.</p>
                        <button className="w-full py-2 rounded bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition">Browse Library</button>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};

const CTA = () => {
    return (
        <section className="py-32 bg-[#0a0a1c] text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-indigo-600/10 rounded-full blur-[100px]"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
                    Start Your Web3 Journey.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">For Free. Today.</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    No cost. No barriers. No experience needed. Just your imagination â€” and BM Denarii does the rest.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="https://denariiappideas.netlify.app/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button primary className="w-full px-12">Start Building Now</Button>
                    </a>
                    <a href="https://x.com/bmsquantum" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button className="w-full flex items-center justify-center gap-2">
                            <Icons.Twitter size={20} />
                            Join Daily Space
                        </Button>
                    </a>
                </div>

                <p className="mt-8 text-sm text-gray-600">
                    Powered by Google AI â€¢ XRPL â€¢ Algorand â€¢ Hedera
                </p>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 text-sm">

                    {/* Group 1: Get Started */}
                    <div>
                        <h4 className="font-bold text-white text-lg mb-4">Get Started</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="https://www.binance.com/activity/referral-entry/CPA?ref=CPA_00DE0I8NO7" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Buy XRP (Binance)</a></li>
                            <li><a href="https://play.google.com/store/apps/details?id=com.xrpllabs.xumm" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Download Xaman Wallet</a></li>
                            <li><a href="https://perawallet.app/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Download Pera Wallet (ALGO)</a></li>
                            <li><a href="https://www.hashpack.app/download" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Download HashPack Wallet (HBAR)</a></li>
                            <li><a href="https://play.google.com/store/apps/details?id=com.bifrostwallet.app" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Download Bifrost Wallet</a></li>
                        </ul>
                    </div>

                    {/* Group 2: Trade DFi */}
                    <div>
                        <h4 className="font-bold text-white text-lg mb-4">Trade DFi</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="https://sologenic.org/trade?market=DFI%2BrUY6tjGN8PJDVyVFLztRZLmPZ8uTBUfa2Z%2FXRP&network=mainnet" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Sologenic Dex</a></li>
                            <li><a href="https://firstledger.net/token/rUY6tjGN8PJDVyVFLztRZLmPZ8uTBUfa2Z/DFI" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">First Ledger Dex</a></li>
                            <li><a href="https://xmagnetic.org/dex/DFI+rUY6tjGN8PJDVyVFLztRZLmPZ8uTBUfa2Z_XRP+XRP?network=mainnet" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">XMagnetic</a></li>
                            <li><a href="https://dexscreener.com/xrpl/dfi.ruy6tjgn8pjdvyvflztrzlmpz8utbufa2z_xrp" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Dex Screener</a></li>
                            <li><a href="https://xpmarket.com/token/DFI-rUY6tjGN8PJDVyVFLztRZLmPZ8uTBUfa2Z" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">DFi XRPL Price</a></li>
                            <li><a href="https://vestige.fi/asset/897649551" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">DFi ALGO Price</a></li>
                            <li><a href="https://www.saucerswap.finance/swap/HBAR/0.0.1926909" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">DFi HBAR Price</a></li>
                        </ul>
                    </div>

                    {/* Group 3: Community */}
                    <div>
                        <h4 className="font-bold text-white text-lg mb-4">Community</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="https://denarii.cc/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Denarii Website</a></li>
                            <li><a href="https://x.com/Denarii_DFI?t=nhqoyz397n1HXIUauW4vvA&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">X (Twitter)</a></li>
                            <li><a href="https://youtube.com/@denarii_dfi_build?si=hm8bIZeBSj5a3iCE" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">YouTube</a></li>
                            <li><a href="https://t.me/moonboiMB589" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Telegram</a></li>
                            <li><a href="https://linktr.ee/denariidfi" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Linktree</a></li>
                        </ul>
                    </div>

                    {/* Group 4: Partners & Tokens */}
                    <div>
                        <h4 className="font-bold text-white text-lg mb-4">Partners & Tokens</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="https://moonboi589.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Moonboi589 Website</a></li>
                            <li><a href="https://linktr.ee/moonboi589" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Moonboi589 Linktree</a></li>
                            <li><a href="https://xmagnetic.org/dex/MG589+rBpnfk7QCk1wVaCNGLYsqDMUFBh7KUSqEn_XRP+XRP?network=mainnet" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">MG589 (XMagnetic)</a></li>
                            <li><a href="https://firstledger.net/token/rBpnfk7QCk1wVaCNGLYsqDMUFBh7KUSqEn/4D47353839000000000000000000000000000000" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">MG589 (First Ledger)</a></li>
                            <li><a href="https://www.geckoterminal.com/songbird/pools/0xbb3979bf08821b9975a52a8214bc6f6abff18a2e" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">SFin Price</a></li>
                            <li><a href="https://www.geckoterminal.com/songbird/pools/0xc6d2f9e21bcd963b42d85379581003be1146b3aa" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">ExFi Price</a></li>
                        </ul>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                        <img
                            src="https://pbs.twimg.com/media/G7FCvGBXQAAEGIQ?format=jpg&name=large"
                            alt="BM Denarii Logo"
                            className="w-6 h-6 rounded shadow border border-white/10 bg-white"
                        />
                        <span>&copy; 2025 BM Denarii Program. All rights reserved.</span>
                    </div>
                    <div className="flex gap-6">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Powered by DFi</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Components exported at the end of file
// This file adds the main App component export to the combined file
// It imports all the components from the parts and renders them in order

const App = () => {
    return (
        <div className="font-sans bg-[#0a0a1c] min-h-screen text-slate-200 scroll-smooth">
            <SEO />
            <Navbar />
            <Hero />
            <VideoShowcase />
            <MissionBanner />
            <About />
            <HowItWorks />
            <FlagshipApp />
            <AIArchitect />
            <AssetAlchemist />
            <WhitepaperWeaver />
            <CodeCatalyst />
            <RiskRadar />
            <GrantGuardian />
            <XRPLGuide />
            <BuildExamples />
            <Training />
            <Features />
            <RetweetReward />
            <Community />
            <CTA />
            <Footer />
        </div>
    );
};

export default App;
