import path from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";
import { NodeEnvironment, pluginOptions } from "../config/setup";
import { getModes } from "../config/utils";

export default (mode: NodeEnvironment) => {
	// TODO: MAKE USE OF IT
	const { isProd, isDev } = getModes(mode);

	const config: Configuration = {
		mode,
		entry: path.resolve(__dirname, "..", "./src/bootstrap.tsx"),
		output: {
			path: path.resolve(__dirname, "..", "./public"),
			filename: "bundle.js",
		},
		resolve: {
			extensions: [".js", ".ts", ".tsx", ".jsx"],
		},
		plugins: [
			new HTMLWebpackPlugin({
				template: path.resolve(__dirname, "..", "./public/index.html"),
				inject: true,
				favicon: "./public/favicon.ico",
				...pluginOptions.htmlWebpackPluginOptions,
			}),
		],
		module: {
			rules: [
				{
					test: /\.(ts|js)$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
					},
				},
				// ADD TYPESCRIPT
				{
					test: /\.(ts|tsx)$/,
					exclude: /node_modules/,
					use: "ts-loader",
				},
				// ADD CSS FILES
				{
					test: /\.css$/,
					exclude: /node_modules/,
					use: ["style-loader", "css-loader"],
				},
				// WEBPACK 5 HAS SUPPORT FOR IMAGES OUT OF THE BOX
				// ADD SUPPORT FOR IMAGES
				{
					test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
					type: "asset/resource",
				},
				// ADD SUPPORT FOR ASSETS
				{
					test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
					type: "asset/inline",
				},
			],
		},
	};

	return config;
};
