const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const purgeCSS = require("@fullhuman/postcss-purgecss");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.pug" }),
    new MiniCssExtractPlugin(),
    new FaviconsWebpackPlugin("./src/images/favicon.png"),
    new Dotenv(),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ["pug-loader"],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("tailwindcss"),
                  require("autoprefixer"),
                  purgeCSS({
                    content: ["./**/*.pug", "./**/*.html"],
                    extractors: [
                      {
                        extractor: content => {
                          return content.match(/[A-z0-9-:\/]+/g) || [];
                        },
                        extensions: ["css", "html", "pug"],
                      },
                    ],
                    safelist: [/btn-in-progress/],
                  }),
                ],
              },
            },
          },
        ],
      },
    ],
  },
};