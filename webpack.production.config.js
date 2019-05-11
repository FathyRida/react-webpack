// ,-.----.
// \    /  \                                                                  ___
// |   :    \                             ,---,                             ,--.'|_     ,--,
// |   |  .\ :   __  ,-.    ,---.       ,---.'|          ,--,               |  | :,'  ,--.'|       ,---.         ,---,
// .   :  |: | ,' ,'/ /|   '   ,'\      |   | :        ,'_ /|               :  : ' :  |  |,       '   ,'\    ,-+-. /  |
// |   |   \ : '  | |' |  /   /   |     |   | |   .--. |  | :     ,---.   .;__,'  /   `--'_      /   /   |  ,--.'|'   |
// |   : .   / |  |   ,' .   ; ,. :   ,--.__| | ,'_ /| :  . |    /     \  |  |   |    ,' ,'|    .   ; ,. : |   |  ,"' |
// ;   | |`-'  '  :  /   '   | |: :  /   ,'   | |  ' | |  . .   /    / '  :__,'| :    '  | |    '   | |: : |   | /  | |
// |   | ;     |  | '    '   | .; : .   '  /  | |  | ' |  | |  .    ' /     '  : |__  |  | :    '   | .; : |   | |  | |
// :   ' |     ;  : |    |   :    | '   ; |:  | :  | : ;  ; |  '   ; :__    |  | '.'| '  : |__  |   :    | |   | |  |/
// :   : :     |  , ;     \   \  /  |   | '/  ' '  :  `--'   \ '   | '.'|   ;  :    ; |  | '.'|  \   \  /  |   | |--'
// |   | :      ---'       `----'   |   :    :| :  ,      .-./ |   :    :   |  ,   /  ;  :    ;   `----'   |   |/
// `---'.|                           \   \  /    `--`----'      \   \  /     ---`-'   |  ,   /             '---'
//   `---`                            `----'                     `----'                ---`-'

const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// VGLOBAL VARIABLES

const BUILD_DIR = path.resolve(__dirname, "./dist");
const APP_DIR = path.resolve(__dirname, "./src");
const VENDOR_LIBS = ["react", "react-dom"];
module.exports = {
  entry: {
    bundle: "./index.js",
    vendor: VENDOR_LIBS
  },
  output: {
    path: BUILD_DIR,
    filename: "[name][hash:8].js",
    publicPath: ""
  },
  mode: "production",
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: true,
            presets: [],
            plugins: ["transform-class-properties"]
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles[contenthash].css"
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "WebPack Project",
      template: "./public/index.html"
    })
  ]
};
