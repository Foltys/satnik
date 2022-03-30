require('dotenv').config({ override: true })

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
	// devServerPort: 8002
	serverBuildTarget: "node-cjs",
}
