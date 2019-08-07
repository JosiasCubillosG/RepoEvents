
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "src/public"),
		filename: "bundle.js"
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: {
					loader: "html-loader"
				}
			},
			{
				test: /\.css$/,
				loader: [
					MiniCSSExtractPlugin.loader,
					"css-loader"
				]
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: "./src/public/index.html",
			filename: "./index.html"
		}),
		new MiniCSSExtractPlugin()
	]
}
