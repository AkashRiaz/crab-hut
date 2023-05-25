/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#4c3696",
        
"secondary": "#c7e2fc",
        
"accent": "#ed857d",
        
"neutral": "#232439",
        
"base-100": "#F8F9FB",
        
"info": "#79ADDC",
        
"success": "#3FE9D8",
        
"warning": "#E6B30A",
        
"error": "#EC6A88",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

