const path = require("path");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  mode: "development",
  watch: true,
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["transform-class-properties"]
          }
        }
      }
    ]
  },
  plugins: [
    // Developemt
    // new UglifyJsPlugin(),
    new MiniCssExtractPlugin({
      //   filename: "styles[contenthash].css"
      filename: "styles.css"
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "WebPack Project"
    })
  ]
};
