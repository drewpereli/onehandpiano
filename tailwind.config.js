const imagesPath = "../images"; // Relative to ./src/styles/app.css

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "header-piano": `url('${imagesPath}/header-piano.jpg')`,
        "tuning-piano": `url('${imagesPath}/tuning-piano.jpg')`,
        "front-view-piano": `url('${imagesPath}/front-view-piano.jpg')`,
      },
      height: {
        "50vh": "50vh",
        "80vh": "80vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
