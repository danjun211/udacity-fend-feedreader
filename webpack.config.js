const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  context: __dirname + "/src",
  entry: {
    "js/app": __dirname + "/src/js/app.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ["env"]
        }
      }
    ]
  },
  plugins: [],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        sourceMap: true
      })
    ]
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".json", ".jsx", ".css"]
  }
};
