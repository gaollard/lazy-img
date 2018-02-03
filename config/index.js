var path = require('path');
module.exports = {
	dev: {
		env: require('./dev.env'),
		port: 8088,
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {},
		cssSourceMap: true
	},
	build: {
		env: require('./prod.env'),
		index: path.resolve(__dirname, '../dist/index.html'),
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: './',
		productionSourceMap: false,
		productionGzip: true,
		productionGzipExtensions: ['js', 'css'],
	}
}