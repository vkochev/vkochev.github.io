import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  entry: './lib/src/index.js',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/dist'
  }
};

export default config;
