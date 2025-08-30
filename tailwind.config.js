/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                bodyColor: "#fff",
                primary: "rgba(255, 105, 180, 1)",
                primaryLight: "rgba(255, 105, 180, 0.16)",
                secondary:"rgba(40,83,95,1)",
                secondaryLight:"rgba(40,83,95,0.16)",
                textColor: "rgba(129, 129, 129, 1)",
                lightTextColor: "rgba(129, 129, 129, 0.07)",
                lightGrey: "rgba(69,83,96,1)",
               
            },
            fontSize: {
                h1: "40px",
                h2: "21px",
                h3: "18px",
                h4: "16px",
                h5: "14px",
                h6: "12px",
            },
            fontFamily: {
                nunito: ['"Nunito Sans"', "sans-serif"],
            },
            screens: {
                xs: "554px",
                xxs: "360px",
            },
            boxShadow: {
                left: "-4px 0 4px -2px rgba(0, 0, 0, 0.1)",
            },
        },
    },
    plugins: [],
};
