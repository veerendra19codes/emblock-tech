/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        360: "360deg",
      },
      scale: {
        100: "1",
        110: "1.1",
        120: "1.2",
      },
      colors: {
        customgray: {
          DEFAULT: "#2F2F2F",
          light: "#2F2F2F",
        },
        customgrayhover: "rgba(47, 47, 47, .6)",
        customgreen: "#82FF1F",
        customblack: "#1C1C1C",
        customblackhover: "rgb(17, 17, 17)",
      },
      fontFamily: {
        biennale: "Biennale",
        manrope: "Manrope",
      },
      animation: {
        marquee: "marquee 5s linear infinite",
        marqueeslow: "marquee 20s linear infinite",

        marqueeright: "marqueeright 5s linear infinite",
        marqueerightslow: "marqueeright 20s linear infinite",

        "slide-down": "slide-down 1.5s ease-out 0.7s forwards",
        "slide-down-fast": "slide-down 0.5s ease-out 0.5s forwards",
        "slide-down-nav": "slide-down 0.1s ease-out 0.5s forwards",
        "slide-left": "slide-left 1.5s ease-out forwards",
        "slide-down-text-1": "slide-down-text-1 1.5s ease-out forwards",
        "slide-left-text-1": "slide-left-text-1 1.5s ease-out forwards",
        "slide-up-text-1": "slide-up-text-1 1.5s ease-out forwards",
        "slide-up-text-2": "slide-up-text-1 1.5s ease-out 0.1s forwards",
        "slide-up-text-3": "slide-up-text-1 1.5s ease-out 0.2s forwards",
        "slide-up-text-4": "slide-up-text-1 1.5s ease-out 0.3s forwards",
        "slide-left-text-5": "slide-left-text-1 1.5s ease-out 0.4s forwards",
        "slide-up-text-6": "slide-up-text-1 1.5s ease-out 0.5s forwards",
        fadeInUp: "fadeInUp 0.6s ease-out",
      },
      animationFillMode: {
        "fill-mode-forwards": "forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueeright: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-left": {
          "0%": { transform: "translateX(30%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-down-text-1": {
          "0%": { transform: "translateY(-30%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-left-text-1": {
          "0%": { transform: "translateX(30%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-up-text-1": {
          "0%": { transform: "translateY(30%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
