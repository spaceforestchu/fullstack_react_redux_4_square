var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		app: './src/app.js'
	},
	output: {
		path: path.join(__dirname, 'public/build'),
		filename: 'bundle.js'
	},
	devtool: '#source-map',
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				exclude: /(node_modules)/,
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
}
