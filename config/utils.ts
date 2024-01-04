/* eslint-disable react-hooks/rules-of-hooks */
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import webpack from 'webpack';

import { NodeEnvironment, appPaths, pluginOptions } from './setup';

const { ModuleFederationPlugin } = webpack.container;

export const getModes = (mode: NodeEnvironment) => ({
  isProd: mode === NodeEnvironment.production,
  isDev: mode === NodeEnvironment.development,
});

export const useConfig = <T>(condition: boolean, result: T | undefined) => (condition ? result : undefined);

export const useLoader = (condition: boolean, loader: Record<string, unknown> | string) => (condition ? [loader] : []);

export const getWebpackPlugins = (isDev: boolean) => [
  new BundleAnalyzerPlugin({ analyzerMode: 'disabled' }),
  new CleanWebpackPlugin(),
  new ModuleFederationPlugin({
    remotes: {
      SharedLayout: 'SharedLayout@https://effortless-sunshine-a6e22f.netlify.app/remoteEntry.js',
    },
  }),
  new HTMLWebpackPlugin({
    template: appPaths.template,
    inject: true,
    favicon: './public/favicon.ico',
    ...pluginOptions.htmlWebpackPluginOptions,
  }),

  isDev && new ReactRefreshWebpackPlugin(),
  !isDev &&
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
];

export const getModuleRules = (mode: NodeEnvironment) => {
  const { isProd, isDev } = getModes(mode);
  return [
    {
      test: /\.(ts|js)$/,
      exclude: /node_modules/,
      include: appPaths.src,
      use: {
        loader: 'babel-loader',
      },
    },

    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: 'ts-loader',
    },

    {
      test: /\.(scss|css)$/,
      exclude: /node_modules/,
      include: /\.module\.(scss|css)$/,
      use: [
        ...useLoader(isProd, MiniCssExtractPlugin.loader),
        ...useLoader(isDev, { loader: 'style-loader' }),
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            sourceMap: !isProd,
            modules: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: !isProd,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: !isProd,
          },
        },
      ],
    },
    {
      test: /\.(scss|css)$/,
      exclude: /\.module\.(scss|css)$/,
      use: [
        ...useLoader(isProd, MiniCssExtractPlugin.loader),
        ...useLoader(isDev, { loader: 'style-loader' }),
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            sourceMap: !isProd,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: !isProd,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: !isProd,
          },
        },
      ],
    },

    {
      test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
      type: 'asset/resource',
    },

    {
      test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
      type: 'asset/inline',
    },
  ];
};
