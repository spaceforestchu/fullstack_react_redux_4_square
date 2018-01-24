var webpack = require('webpack');
var path = require('path');


module.exports = {
	entry: {
		app: ["babel-polyfill",'./src/app.js']
	},
	output: {
		path: path.join(__dirname, 'public/build'),
		filename: 'bundle.js'
	},
	node: {
	 console: false,
	 fs: 'empty',
	 net: 'empty',
	 tls: 'empty'
 },
 plugins: [
	 new webpack.ProvidePlugin({
		'$': 'jquery',
		'jQuery': 'jquery'
	})
 ],
	devtool: '#source-map',
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				exclude: /(node_modules)/,
				query: {
					presets: ['react', 'es2015', 'es2016', 'es2017', 'env', 'stage-0', 'stage-2'],
				},
			},
			 { test: /\.css$/,
				 loader: "style-loader!css-loader"
			 }
		]
	}
}
