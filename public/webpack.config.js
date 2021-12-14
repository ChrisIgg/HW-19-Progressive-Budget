const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    entry: {
      home: "./assets/js/index.js",
      topic: "./assets/js/topic.js",
      favorites: "./assets/js/favorites.js",
    },
    output: {
      path: __dirname + "/dist",
      filename: "[name].bundle.js",
    },
    mode: "development",
    plugins: [
      new WebpackPwaManifest({
        name: "News App",
        short_name: "News App",
        inject: false,
        fingerprints: false,
        description: "An application for news",
        background_color: "#01579b",
        theme_color: "#ffffff",
        "theme-color": "#ffffff",
        start_url: "/",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
  };
  
  module.exports = config;