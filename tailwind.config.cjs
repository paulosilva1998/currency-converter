module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: '#ecf0f1',
                secondary: '#2ecc71',
                accent: '#f39c12',
                background: '#2c3e50',
                card: '#34495e',
                text: '#ecf0f1',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};  