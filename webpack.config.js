const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
    mode: "production",
    entry: {
        index: "./public/index.js"
  },
  output: {
    path: __dirname + "/public/index.js",
    filename: '[name].bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new WebpackPwaManifest({
      filename: "manifest.json",
      inject: false,
      fingerprints: false,
      name: 'every-dollar-counts',
      short_name: 'every-dollar',
      description: 'An application that allows you to keep track of your expenses online & offline.',
      background_color: '#e6f542',
      theme_color: '#e6f542',
      start_url: '/',
      icons: [
        {
          src: path.resolve(
              __dirname,
              "public/icons/icon-512x512.png"
          ),
          sizes: [72, 96, 128, 192, 256, 384, 512],
          destination: path.join('assets', 'icons'),
        },
      ],
    }),
  ],
};

module.exports = config;
