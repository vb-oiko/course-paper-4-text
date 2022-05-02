const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
require("dotenv").config();

module.exports = {
  mode: "development",
  resolve: {
    alias: {
      ["@"]: path.resolve(__dirname, "src/"),
    },
  },
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.flow$|\.mmd$|\.html$|\.c$/i,
        use: "raw-loader",
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "markdown-latex-loader",
            options: {
              div: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name(resourcePath, resourceQuery) {
            return "[folder]-[name].[ext]";
          },
          outputPath: "images",
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "docs"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new webpack.DefinePlugin({
    //   PAGES: JSON.stringify(htmlPageNames),
    // }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["main"],
    }),
  ],
};
