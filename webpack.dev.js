const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: path.resolve(__dirname, './src/index.tsx'),
	output: {
		filename: 'script/bundle.js',
		path: path.resolve(__dirname, './dist'),
	},
	resolve: {
		modules: ['node_modules', path.resolve(__dirname, './src')],
		extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.css', '.scss'],
		descriptionFiles: ['package.json'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)?$/,
				include: /src/,
				loader: 'awesome-typescript-loader',
				options: {
					silent: true,
				},
			},
			{
				test: /\.(css|scss)?$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader'],
					publicPath: path.resolve(__dirname, './dist/style'),
				}),
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg|ttf|woff|woff2|eot)$/,
				loader: 'url-loader',
				options: {
					limit: 25000,
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
		}),
		new ExtractTextPlugin({
			filename: 'style/style.css',
			disable: false,
			allChunks: true,
		}),
		new webpack.NamedModulesPlugin(),
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
