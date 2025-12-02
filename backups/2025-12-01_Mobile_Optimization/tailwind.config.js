/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'cyber-dark': '#0a0a1c',
                'cyber-purple': '#6366f1',
                'cyber-blue': '#3b82f6',
            },
            animation: {
                'grid-flow': 'grid-flow 1.5s linear infinite',
                'twinkle': 'twinkle 3s infinite',
                'fade-in': 'fadeIn 0.5s ease-in',
            },
            keyframes: {
                'grid-flow': {
                    '0%': { transform: 'perspective(500px) rotateX(60deg) translateY(0)' },
                    '100%': { transform: 'perspective(500px) rotateX(60deg) translateY(40px)' },
                },
                twinkle: {
                    '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.2)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
