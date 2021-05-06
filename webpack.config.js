const path = require("path");
// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/index.js", // Elegimos nuestro punto de entrada
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
    clean: true,
  }, // Añadimos nuestro punto de salida
  externals: ["react", "react-dom"],

  //   externals: [nodeExternals()],
  resolve: {
    extensions: [".js", ".jsx"], // Añadimos el soporte para la extencion de JSX
    alias: {
      react: path.resolve("./node_modules/react-js"),
      "@": path.resolve(__dirname, "src/"),
      umany: path.resolve(__dirname),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // Ignora la carpeta de node_modules
        use: {
          loader: "babel-loader", // Utiliza la configuracion de Babel
        },
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
};
