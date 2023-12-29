import path from "path";

import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

import { NodeEnvironment } from "../config/setup";
import {
	getModes,
	getModuleRules,
	getWebpackPlugins,
	useConfig,
} from "../config/utils";
import { Configuration } from "./interfaces";

export default (mode: NodeEnvironment) => {
	// TODO: MAKE USE OF IT
	const { isProd, isDev } = getModes(mode);

	const config: Configuration = {
		mode, // performance CHECK THIS
		devServer: useConfig(isDev, {
			// HOT MODULE REPLACEMENT
			hot: true,
			open: true,
		}),
		resolve: {
			extensions: [".js", ".ts", ".tsx", ".jsx"],
		},
		devtool: isProd ? "cheap-module-source-map" : "source-map", // it's helpful for debugging code
		entry: path.resolve(__dirname, "..", "./src/bootstrap.tsx"),
		output: {
			path: path.resolve(__dirname, "..", "./public"),
			filename: "bundle.js",
		},
		module: {
			rules: [...getModuleRules(mode)],
		},
		optimization: {
			minimize: isProd,
			// I can omit the TerserPlugin as it's now built into Webpack 5
			minimizer: [new CssMinimizerPlugin()],
		},
		plugins: [...getWebpackPlugins(isDev)],
	};

	return config;
};
