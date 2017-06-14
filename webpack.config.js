'use strict';

const path = require('path');

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = {
  /**
   * Developer tool to enhance debugging
   *
   * See: http://webpack.github.io/docs/configuration.html#devtool
   * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
   */
  devtool: 'cheap-module-source-map',
  /**
   * The entry point for the bundle
   *
   * See: http://webpack.github.io/docs/configuration.html#entry
   */
  entry: './main.ts',

  /**
   * Options affecting the output of the compilation.
   *
   * See: http://webpack.github.io/docs/configuration.html#output
   */
  output: {
    /**
     * Specifies the name of each output file on disk.
     * IMPORTANT: You must not specify an absolute path here!
     *
     * See: http://webpack.github.io/docs/configuration.html#output-filename
     */
    filename: '[name].js',
    path: path.resolve('./public')
  },

  /**
   * Options affecting the resolving of modules.
   *
   * See: http://webpack.github.io/docs/configuration.html#resolve
   */
  resolve: {
    /**
     * An array of extensions that should be used to resolve modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
     */
    extensions: ['.ts', '.js', '.json']
  },

  /**
   * Options affecting the normal modules.
   *
   * See: http://webpack.github.io/docs/configuration.html#module
   */
  module: {
    loaders: [
      /**
       * Typescript loader support for .ts
       */
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  }
};