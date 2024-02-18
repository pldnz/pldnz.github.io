/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./style/*.css", "index.html"],
    theme: {
        extend: {
            fontFamily: {
                "montserrat-400": ["Montserrat Regular", "sans-serif"],
                "montserrat-700": ["Montserrat Bold", "sans-serif"],
                "exo-light": ["Exo Light", "monospace"],
                "exo-light-italic": ["Exo Light Italic", "monospace"],
                "exo-regular": ["Exo Regular", "monospace"],
                barcode: ["LibreBarcode", "monospace"],
            },
            colors: {
                alto: "#d9d9d9",
            },
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant("active", ".is-active &");
            addVariant("current", ".is-current &");
            addVariant("open", ".is-open &");
            addVariant("viewport", ".in-viewport &");
        },
    ],
};
