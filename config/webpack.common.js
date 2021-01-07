const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    widget: './src/widget/index.ts',
    demo: './src/demo.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'config/tsconfig.json'
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              configFile: 'config/.eslintrc'
            }
          },
        ], 
        exclude: /node_modules/,
      },
      { 
        test: /\.html$/i, 
        use: 'html-loader' 
      },
      { 
        test: /\.css$/i, 
        use: [
          'style-loader', 
          'css-loader?modules',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [ "postcss-preset-env" ],
              },
            },
          },
        ] 
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['demo']
    }),
  ],
  output: {
    filename: '[name].js',
  }
};

