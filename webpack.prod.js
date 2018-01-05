const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		bundle: path.resolve(__dirname, './src/index.tsx'),
		vendor: [
			'react',
			'react-dom',
			'react-hot-loader',
			'react-redux',
			'react-router-dom',
			'semantic-ui-css',
			'react-router-redux',
			'history',

		],
	},
	output: {
		filename: 'script/[name].[chunkhash].min.js',
		path: path.resolve(__dirname, './dist'),
	},
	resolve: {
		modules: ['node_modules', path.resolve(__dirname, './src')],
		extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.css', '.scss'],
		descriptionFiles: ['package.json'],
	},
	target: 'web',
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
		new CleanWebpackPlugin(['./dist']),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
		}),
		new webpack.HashedModuleIdsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new ExtractTextPlugin({
			filename: 'style/style.min.css',
			disable: false,
			allChunks: true,
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.min\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorOptions: { discardComments: { removeAll: true } },
			canPrint: true,
		}),
		new webpack.optimize.UglifyJsPlugin({
			mangle: true,
			compress: {
				warnings: false, // Suppress uglification warnings
				pure_getters: true,
				unsafe: true,
				unsafe_comps: true,
				screw_ie8: true
			},
			output: {
				comments: false,
			}
		}),
	],
};
