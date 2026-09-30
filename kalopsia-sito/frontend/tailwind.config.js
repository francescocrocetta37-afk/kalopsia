/** @type {import('tailwindcss').Config} */
module.exports = {
    blocklist: ["overline"],
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            colors: {
                ink: "#09090B",
                surface: "#121217",
                neon: "#FF007F",
                lime: "#CCFF00",
                ice: "#00FFFF",
            },
            fontFamily: {
                display: ["Unbounded", "sans-serif"],
                body: ["Outfit", "sans-serif"],
                serifit: ['"Instrument Serif"', "serif"],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            colors: {
                ink: "#09090B",
                surface: "#121217",
                neon: "#FF007F",
                lime: "#CCFF00",
                ice: "#00FFFF",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                border: "hsl(var(--border))",
                ring: "hsl(var(--ring))",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
