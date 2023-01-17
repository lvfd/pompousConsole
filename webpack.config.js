const path = require('path')
const env = process.env.NODE_ENV
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const config = {
	entry: {
		main: './build/main'
	},
	devtool: 'inline-source-map',
	mode: env === 'development'? 'development': 'production',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				include: path.resolve(__dirname, 'build'),
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									'targets': {'ie': '11'},
									'useBuiltIns': 'usage',
									'corejs': '3'
								}
							]
						]
					}
				}
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'asset/images/[hash][ext]'
				}
			},
			{
				test: /\.css$/i,
				type: 'asset/resource',
				generator: {
					filename: 'asset/css/[hash][ext]'
				}
			},
			{
				test: /\.(js)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'asset/js/[hash][ext]'
				},
				include: [
					path.resolve(__dirname, 'node_modules/uikit/dist'),
					path.resolve(__dirname, 'node_modules/dom4')
				]
			}
		]
	},
	name: 'pompousConsole',
	optimization: {
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				commons: {
					name: 'commons',
					chunks: 'initial',
					minChunks: 2
				},
				libs: {
					name: 'libs',
					filename: '[name].js',
					test: /[\\/]node_modules[\\/]/
				}
			}
		}
	},
	output: {
		clean: true,
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new MomentLocalesPlugin()
	],
	resolve: {
		alias: {
			'@build': path.resolve(__dirname, 'build'),
			'@data': path.resolve(__dirname, 'data')
		}
	},
	watch: true,
	watchOptions: {
		aggregateTimeout: 1000,
		ignored: /node_modules/
	}
}
module.exports = config