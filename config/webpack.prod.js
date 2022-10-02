const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
	mode: "production",
	output: {
		filename: "[name].[contenthash].js",
		publicPath: "/latest/",
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "container",
			remotes: {
				home: `mfe_home@${domain}/latest/remoteEntry.js`,
				about: `mfe_about@${domain}/latest/remoteEntry.js`,
				dashboard: `mfe_dashboard@${domain}/latest/remoteEntry.js`,
			},
			shared: packageJson.dependencies,
		}),
	],
};

module.exports = merge(commonConfig, prodConfig);
