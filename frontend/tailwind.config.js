/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark':'#1b1e42',
        'primary': '#014CC4',
        'light-primary': '#01BDF3',
        'lighter-primary': '#598fff',
        'lighter-primary-opacity': '#e9f2ff',
        'secondary': '#595f73',
        'light': '#f5f5f5',
        'success': '#3dae14',
        'light-success': '#93cf88',
        'warning': '#fdbe00',
        'light-warning': '#fbf2d9',
        'orange': '#FF8811',
        'light-orange': '#f8efea',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
