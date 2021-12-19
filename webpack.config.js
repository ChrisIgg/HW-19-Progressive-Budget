const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "development",
  entry: "./public/index.js",
  output: {
    publicPath: "/",
    path: __dirname + "/public/dist",
    filename: "index.bundle.js",
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      inject: false,
      name: "Budget Tracker App",
      short_name: "Budget Tracker App",
      description: "An application that allows budgets to be available offline",
      background_color: "#01579b",
      theme_color: "#ffffff",
      start_url: "/",
      icons: [
        {
          src: path.resolve(__dirname, "./public/icons/icon-192x192.png"),
          sizes: [192, 512],
          destination: path.join("dist", "icons"),
        },
      ],
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
