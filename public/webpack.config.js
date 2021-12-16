const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: {
    home: "./assets/js/index.js",
    // topic: "./assets/js/topic.js",
    // favorites: "./assets/js/favorites.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
  },
  mode: "development",
  plugins: [
    new WebpackPwaManifest({
      name: "Budget App",
      short_name: "Budget App",
      inject: false,
      fingerprints: false,
      description: "An application for news",
      background_color: "#01579b",
      theme_color: "#ffffff",
      "theme-color": "#ffffff",
      start_url: "/",
      // icons: [
      //   {
      //     src: path.resolve("/assets/icons/icon-192x192.png"),
      //     sizes: [192, 512],
      //     destination: path.join("assets", "icons"),
      //   },
      // ],
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
