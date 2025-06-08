/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["var(--font-montserrat)"],
            },
            colors: {
                bloodRed: "hsl(0 68% 42%)",
                bloodOrange: "hsl(0 84% 60%)",
                darkBlood: "hsl(0 75% 25%)",
            },
            boxShadow: {
                "inner-xl":
                    "inset 0 2px 4px 0 rgba(0,0,0,0.06), inset 0 0 0 1px rgba(0,0,0,0.02)",
                "blood-glow":
                    "0 0 15px hsla(0, 100%, 50%, 0.7), 0 0 30px hsla(0, 100%, 60%, 0.4)",
            },
            textShadow: {
                sm: "0 1px 2px var(--tw-shadow-color)",
                DEFAULT: "0 2px 4px var(--tw-shadow-color)",
                md: "0 4px 6px var(--tw-shadow-color)",
                lg: "0 8px 16px var(--tw-shadow-color)",
                xl: "0 10px 20px var(--tw-shadow-color)",
                blood: "0 0 8px hsla(0, 40%, 40%, 0.9), 0 0 12px hsla(0, 60%, 40%, 0.6), 0 0 24px hsla(0, 100%, 60%, 0.3)",
            },
            keyframes: {
                pulseBlood: {
                    "0%, 100%": {
                        boxShadow:
                            "0 0 15px hsla(0, 100%, 50%, 0.7), 0 0 25px hsla(0, 100%, 60%, 0.4)",
                        transform: "scale(1)",
                        borderColor: "hsl(var(--p))",
                    },
                    "50%": {
                        boxShadow:
                            "0 0 25px hsla(0, 100%, 50%, 0.9), 0 0 40px hsla(0, 100%, 60%, 0.6)",
                        transform: "scale(1.02)",
                        borderColor: "hsl(var(--s))",
                    },
                },
                bloodOverlay: {
                    "0%": { transform: "scaleX(0)", opacity: "0" },
                    "100%": { transform: "scaleX(1)", opacity: "0.8" },
                },
            },
            animation: {
                "pulse-blood": "pulseBlood 1.5s infinite ease-in-out",
                "blood-overlay": "bloodOverlay 0.3s ease-out forwards",
            },
        },
    },
    plugins: [
        require("daisyui"),
        function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "text-shadow": (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme("textShadow") }
            );
        },
    ],
    daisyui: {
        themes: [
            {
                dracula: {
                    ...require("daisyui/src/theming/themes")["dracula"],
                    primary: "hsl(0 68% 42%)",
                    "primary-focus": "hsl(0 75% 35%)",
                    "primary-content": "hsl(0 0% 98%)",

                    secondary: "hsl(0 84% 60%)",
                    "secondary-focus": "hsl(0 90% 50%)",
                    "secondary-content": "hsl(0 0% 98%)",

                    accent: "hsl(0 80% 71%)",
                    "accent-focus": "hsl(0 85% 65%)",
                    "accent-content": "hsl(0 0% 98%)",

                    neutral: "hsl(0 0% 7%)",
                    "neutral-focus": "hsl(0 0% 5%)",
                    "neutral-content": "hsl(0 0% 90%)",

                    "base-100": "hsl(0 0% 4%)",
                    "base-200": "hsl(0 0% 7%)",
                    "base-300": "hsl(0 0% 10%)",
                    "base-content": "hsl(0 0% 90%)",
                    info: "hsl(220 70% 50%)",
                    success: "hsl(120 70% 40%)",
                    warning: "hsl(40 90% 50%)",
                    error: "hsl(0 68% 42%)",
                },
            },
        ],
        darkTheme: "dracula",
    },
};

export default config;
