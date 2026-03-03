/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'republic-blue': {
                    50: '#e8ecf3',
                    100: '#c5cfe0',
                    200: '#9eafcc',
                    300: '#778fb8',
                    400: '#5977a8',
                    500: '#3b5f99',
                    600: '#2d4a7a',
                    700: '#1f355b',
                    800: '#1B2A4A',
                    900: '#111c33',
                    950: '#0a1120',
                },
                'republic-red': {
                    50: '#fdf2f2',
                    100: '#fde3e3',
                    200: '#fbcccc',
                    300: '#f7a8a8',
                    400: '#f07575',
                    500: '#e54848',
                    600: '#C53030',
                    700: '#a52424',
                    800: '#882222',
                    900: '#712222',
                    950: '#3d0e0e',
                },
                'republic-gold': {
                    50: '#faf6eb',
                    100: '#f3eacc',
                    200: '#e8d59c',
                    300: '#dabb63',
                    400: '#C9A84C',
                    500: '#b8912e',
                    600: '#9e7325',
                    700: '#7e5621',
                    800: '#6a4722',
                    900: '#5b3c22',
                    950: '#341f10',
                },
                'offwhite': '#F5F0EB',
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
