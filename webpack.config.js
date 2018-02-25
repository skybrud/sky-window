const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');

const moduleName = 'SkyWindow';

var config = {
	output: {
		path: path.resolve(__dirname + '/dist/'),
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: __dirname,
				exclude: /node_modules/,
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.css$/,
				loader: 'style!less!css',
			},
		],
	},
	plugins: [
		new UglifyJsPlugin({
			sourceMap: false,
			uglifyOptions: {
				mangle: true,
				compress: {
					warnings: false,
				},
			},
		}),
	],
};

module.exports = [
	merge(config, {
		entry: path.resolve(__dirname + '/src/' + moduleName + '.js'),
		output: {
			filename: moduleName.toLocaleLowerCase() + '.js',
			libraryTarget: 'umd',
			library: moduleName,
			umdNamedDefine: true,
		},
	}),
];
