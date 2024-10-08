import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBg: '#1A1C24',
        navbarBg: 'rgba(40, 42, 54, 0.8)',
      },
      fontFamily: {
        'jacquarda': ['"Jacquarda Bastarda 9"', 'system-ui', 'sans-serif'],
        'logo' : ['"Pacifico"', 'cursive'],
      }
    },
    
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  
  plugins:[require('daisyui'),require('autoprefixer')],
  daisyui: {
    themes: ["coffee","fantasy","forest","dracula","nord","dim"],
  },
};
export default config;
