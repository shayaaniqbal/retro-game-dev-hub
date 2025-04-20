import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Retro arcade theme colors
				arcade: {
					DEFAULT: '#0F111A', // Dark background
					blue: '#0EA5E9',    // Bright blue
					cyan: '#33C3F0',    // Sky blue
					purple: '#9B87F5',  // Primary purple
					pink: '#D946EF',    // Magenta pink
					orange: '#F97316',  // Bright orange
					'dark-purple': '#1A1F2C', // Dark purple background
					'light-purple': '#D6BCFA', // Light purple
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'pixel': '2px', // Pixel-art style border radius
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				// Arcade-style animations
				'glow': {
					'0%, 100%': { filter: 'brightness(1)' },
					'50%': { filter: 'brightness(1.3) drop-shadow(0 0 5px currentColor)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pixel-slide': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-5px, 5px)' },
					'40%': { transform: 'translate(-5px, -5px)' },
					'60%': { transform: 'translate(5px, 5px)' },
					'80%': { transform: 'translate(5px, -5px)' }
				},
				'scanline': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'pixel-slide': 'pixel-slide 0.5s ease-out',
				'glitch': 'glitch 0.5s ease-in-out',
				'scanline': 'scanline 5s linear infinite'
			},
			backgroundImage: {
				'pixel-pattern': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.04' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm2 2v16h16V2H2z'/%3E%3C/g%3E%3C/svg%3E\")",
				'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v40H0V0zm2 2v36h36V2H2z'/%3E%3C/g%3E%3C/svg%3E\")",
			},
			fontFamily: {
				'arcade': ['"Press Start 2P"', 'cursive'],
				'pixel': ['"VT323"', 'monospace'],
				'body': ['"Exo 2"', 'sans-serif'],
			},
			textShadow: {
				'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 20px currentColor',
				'pixel': '2px 2px 0 #000',
			},
			boxShadow: {
				'neon': '0 0 5px currentColor, 0 0 10px currentColor',
				'neon-strong': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
				'arcade': 'inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3)',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }) {
			const newUtilities = {
				'.text-shadow-neon': {
					textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 20px currentColor',
				},
				'.text-shadow-pixel': {
					textShadow: '2px 2px 0 #000',
				},
				'.pixelated': {
					'image-rendering': 'pixelated',
				},
				'.border-pixel': {
					border: '2px solid currentColor',
				},
			}
			addUtilities(newUtilities)
		},
	],
} satisfies Config;
