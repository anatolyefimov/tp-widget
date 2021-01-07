const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/widget/index.ts',
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
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ] 
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.css'],
    alias: {
      '@' : path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ]
};

