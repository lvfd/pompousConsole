const path = require('path')
const env = process.env.NODE_ENV? process.env.NODE_ENV: 'production'
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const project_name = require('./project.config').project_name
const webpack = require('webpack')
const config = {
	entry: {
		main: './build/main'
	},
	devtool: env === 'production'? 'source-map': 'inline-source-map',
	mode: env,
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
			},
			{
        test: /\.ejs$/,
        loader: 'ejs-loader',
        options: {
          variable: 'data',
          interpolate : '\\{\\{(.+?)\\}\\}',
          evaluate : '\\[\\[(.+?)\\]\\]'
        }
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
				},
				chart: {
					name: 'chart',
					filename: '[name].js',
					test: /[\\/]node_modules[\\/]chart\.js[\\/]/,
					priority: 1
				},
				jquery: {
					name: 'jquery',
					filename: '[name].js',
					test: /[\\/]node_modules[\\/]jquery[\\/]/,
					priority: 1
				}
			}
		}
	},
	output: {
		clean: true,
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, env === 'production'? 'dist': 'test')
	},
	plugins: [
		new MomentLocalesPlugin(),
		new webpack.ProvidePlugin({
        _: "underscore"
    }),
		new HtmlWebpackPlugin({
			template: 'views/index.ejs',
			filename: 'pages/index.html',
			publicPath: `/${project_name}/dist`,
			inject: 'head',
			scriptLoading: 'blocking'
		})
	],
	resolve: {
		alias: {
			'@build': path.resolve(__dirname, 'build'),
			'@data': path.resolve(__dirname, 'data')
		}
	},
	watch: env === 'development'? true: false,
	watchOptions: {
		aggregateTimeout: 1000,
		ignored: /node_modules/
	}
}
module.exports = config