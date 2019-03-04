import React from 'react';
import Article from '../components/Article';
import Backing from '../components/Backing';

export default function Component() {
  return (
    <Backing>
      <Article>
        <h1>webpack.config.ts tested</h1>
        <div>
          <p>
            At the first there is a big list of <code>devDependencies</code>{' '}
            used for webpack and TypeScript integration.
          </p>
          <p className="inverted">
            <kbd>
              yarn add -D @types/webpack @types/webpack-dev-server ts-loader
              ts-node typescript webpack webpack-cli webpack-dev-server
            </kbd>
          </p>
          <p>
            Then we should create <code>tsconfig.json</code> and specify minimal
            properties.
          </p>
          <p className="inverted">
            <kbd>npx tsc --init</kbd>
          </p>
          <p>
            Add the <code>webpack.config.ts</code>.
          </p>
          <pre className="inverted">
            <code>
              {`import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/dist'
  }
};

export default config;`}
            </code>
          </pre>
          <p>
            The last step is to add <code>webpack-dev</code> and{' '}
            <code>webpack-build</code> scripts in <code>package.json</code> that
            can be used to <code>start</code> and <code>build</code> scripts.
          </p>
          <p className="inverted">
            <code>
              "webpack-dev": "webpack-dev-server --config ./webpack.config.ts
              --mode development", "webpack-build": "webpack --config
              ./webpack.config.ts --mode production",
            </code>
          </p>
          <p>What is next?</p>
        </div>
      </Article>
    </Backing>
  );
}
