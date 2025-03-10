module.exports = {
  content: [
    "./App.{js,ts,tsx}",
    "./src/components/**/*.{js,ts,tsx}",
    "./src/form/**/*.{js,ts,tsx}",
    "./src/shared/**/*.{js,ts,tsx}",
    "./src/utils/**/*.{js,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        bgLight: "#F3F6FF",
        bgDark: "#494F55",
        iColorLight: "#37000A",
        iColorDark: "#F5F5F5",
        bgSelectL: "#ACE1C9",
        bgSelectD: "#D4E2DB",
        textColorL: "#15593A",
        textColorD: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
