/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#1f1d22",
        "ink-soft": "#6a6269",
        shell: "#fff8f7",
        "shell-strong": "#ffe3e0",
        "brand-red": "#c2001a",
        "brand-red-dark": "#900015",
        "brand-rose": "#ff6f61",
        "brand-sand": "#f7d7cc",
        ink: "#1b1448",
        "ink-soft": "#3a2a75",
        "sun-cream": "#f8f1d4",
        "sun-cream-strong": "#f1e0a8",
        "rocket-yellow": "#f3b23d",
        "rocket-gold": "#f6c25d",
        "rocket-purple": "#241446",
        "rocket-purple-dark": "#1a0f3a",
        "rocket-plum": "#35195c",
        "rocket-lilac": "#5d3bbf",
        "rocket-berry": "#802d8d",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"Manrope"', "sans-serif"],
      },
      boxShadow: {
        glow: "0 18px 50px -20px rgba(194, 0, 26, 0.45)",
        card: "0 22px 40px -25px rgba(144, 0, 21, 0.45)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(130deg, #c2001a 0%, #ff6f61 65%, #ffe3e0 100%)",
        "shell-gradient": "linear-gradient(135deg, #fffaf9 0%, #fff1ef 55%, #ffe3e0 100%)",
        "rose-radial": "radial-gradient(circle at 15% 20%, rgba(255, 111, 97, 0.28), transparent 60%)",
        glow: "0 18px 50px -15px rgba(36, 20, 70, 0.4)",
        card: "0 25px 45px -20px rgba(27, 20, 72, 0.3)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(140deg, #241446 0%, #35195c 40%, #5d3bbf 100%)",
        "cream-gradient": "linear-gradient(135deg, #fff8e5 0%, #f8f1d4 45%, #f1e0a8 100%)",
        "plum-radial": "radial-gradient(circle at 20% 20%, rgba(93, 59, 191, 0.3), transparent 55%)",
      },
    },
  },
  plugins: [],
};
