const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new FaviconsWebpackPlugin("./src/images/favicon.png"),
    new webpack.DefinePlugin({
      "process.env": {
        EMAILJS_USER_ID: JSON.stringify(process.env.EMAILJS_USER_ID),
        EMAILJS_SERVICE_ID: JSON.stringify(process.env.EMAILJS_SERVICE_ID),
        EMAILJS_TEMPLATE_ID: JSON.stringify(process.env.EMAILJS_TEMPLATE_ID),
      },
    }),
  ],
});
