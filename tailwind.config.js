/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../assets/user.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily : {
        Embed :["Inter Tight", 'serif'],
      }
    },
  },
  plugins: [],
  "animation": {
    shimmer: "shimmer 2s linear infinite"
  },
  "keyframes": {
    shimmer: {
      from: {
        "backgroundPosition": "0 0"
      },
      to: {
        "backgroundPosition": "-200% 0"
      }
    }
  }
}


