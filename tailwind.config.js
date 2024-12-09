/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", 'sans-serif'],
      },
      colors: {
        'Green-lighter': 'hsl(148, 38%, 91%)',
        'Green-medium': 'hsl(169, 82%, 27%)',
        Red: 'hsl(0, 66%, 54%)',
        Neutral: {
          White: 'hsl(0, 0%, 100%)',
          'Grey-medium': ' hsl(186, 15%, 59%)',
          'Grey-darker': 'hsl(187, 24%, 22%)',
        }
      },

    }
  },

  plugins: [],
}

