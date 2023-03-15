const tailwindcss = require("tailwindcss");

module.exports = {
  Plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
};
