import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import HtmlWebpackPlugin from 'html-webpack-plugin';
import { AngularWebpackPlugin } from '@ngtools/webpack';
import linkerPlugin from '@angular/compiler-cli/linker/babel';

export default {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [linkerPlugin],
            compact: false,
            cacheDirectory: true,
          },
        },
      },
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: '@ngtools/webpack',
      },
      {
        test: /\.html?$/,
        use: 'html-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: [/node_modules/, resolve(__dirname, 'src/angular/app')],
      },
      {
        test: /\.scss$/,
        use: ['raw-loader', 'sass-loader'],
        include: [resolve(__dirname, 'src/angular/app')],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  plugins: [
    new AngularWebpackPlugin({
      tsConfigPath: './tsconfig.json',
      sourceMap: true,
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
