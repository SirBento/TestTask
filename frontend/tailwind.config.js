/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: "#00162A", 
        secondary: "#08081B",
        textWhite:"#E6F3FF",
        bgWhite:"#F2F8FF", 
        textBlue: "#1E92FB",
        textBlueSecond:"#035AA9", 
        textBlueThird: "#035DAF",
        borderBlue: "#02437D",
        borderBlueSecond:"#82C2FD",
        textRed: "#EC2125",
        blue: "#7FB7F2",
        dimBlue: "#02437D",
        lightBlue: '#C5E3FF',
        hoverbg: "#061F35"

      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
     
    },

    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

