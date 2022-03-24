require('dotenv').config({ override: true })
const config = require('config')

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
	server: './server.js',
	devServerBroadcastDelay: 1000,
	ignoredRouteFiles: ['.*'],
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// serverBuildPath: "functions/[[path]].js",
	//publicPath: config.get('publicPath'),
	// devServerPort: 8002
	serverBuildTarget: "node-cjs",
}
