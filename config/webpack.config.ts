import path from 'path';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

import { NodeEnvironment, appPaths } from '../config/setup';
import { getModes, getModuleRules, getWebpackPlugins, useConfig } from '../config/utils';

import { Configuration } from './interfaces';

export default (mode: NodeEnvironment) => {
  const { isProd, isDev } = getModes(mode);

  const config: Configuration = {
    mode: 'development',
    devServer: useConfig(isDev, {
      hot: true,
      open: false,
    }),

    resolve: {
      alias: {
        src: appPaths.src,
        react: path.resolve('node_modules/react'),
        'react-dom': path.resolve('./node_modules/react-dom'),
        'react-router-dom': path.resolve('./node_modules/react-router-dom'),
        'styled-components': path.resolve('./node_modules/styled-components'),
        '@tanstack/react-query': path.resolve('./node_modules/@tanstack/react-query'),
      },
      extensions: ['.js', '.ts', '.tsx', '.jsx'],
    },
    devtool: isProd ? 'source-map' : 'eval-source-map', // it's helpful for debugging code
    entry: appPaths.entry,
    output: {
      path: appPaths.dist,
      filename: 'bundle.js',
    },
    module: {
      rules: [...getModuleRules(mode)],
    },
    optimization: {
      minimize: isProd,
      minimizer: [new CssMinimizerPlugin()],
    },
    plugins: [...getWebpackPlugins(isDev)],
  };

  return config;
};
