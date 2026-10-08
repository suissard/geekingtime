// Shared Tailwind CDN configuration (loaded right after cdn.tailwindcss.com on every page)
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#07090E',
                    card: '#0F121C',
                    border: '#202637',
                    owOrange: '#FF6B00',
                    owOrangeLight: '#FF8A26',
                    amber: '#FBB03B',
                    purple: '#7C3AED',
                    purpleGlow: '#9333EA',
                    neonCyan: '#06B6D4',
                }
            },
            fontFamily: {
                display: ['Orbitron', 'Syne', 'sans-serif'],
                body: ['Inter', 'sans-serif']
            },
            animation: {
                'float': 'float 5s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
                'spin-slow': 'spin 20s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.08)' },
                }
            }
        }
    }
}
