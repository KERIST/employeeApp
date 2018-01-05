const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: path.resolve(__dirname, './dist/index.html'),
	output: {
		filename: 'script/index.html',
		path: path.resolve(__dirname, './dist'),
	},
	resolve: {
		modules: ['node_modules', path.resolve(__dirname, './src')],
		extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.css', '.scss'],
		descriptionFiles: ['package.json'],
	},
	module: {
		rules: [
		
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	devtool: 'source-map',
	target: 'web',
	cache: false,
	watchOptions: {
		aggregateTimeout: 500,
		poll: true,
	},
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		historyApiFallback: true,
		compress: true,
		inline: true,
		port: 7070,
	},
};
