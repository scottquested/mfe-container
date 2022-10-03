const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const devConfig = {
	mode: "development",
	output: {
		publicPath: "http://localhost:3000/",
	},
	devServer: {
		port: 3000,
		historyApiFallback: {
			index: "/index.html",
		},
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "container",
			remotes: {
				home: "mfe_home@http://localhost:3001/remoteEntry.js",
				about: "mfe_about@http://localhost:3002/remoteEntry.js",
				dashboard: "mfe_dashboard@http://localhost:3003/remoteEntry.js",
			},
			shared: {
				...packageJson.dependencies,
				react: {
					singleton: true,
					requiredVersion: packageJson.dependencies.react,
				},
				"react-dom": {
					singleton: true,
					requiredVersion: packageJson.dependencies["react-dom"],
				},
			},
		}),
	],
};

module.exports = merge(commonConfig, devConfig);
