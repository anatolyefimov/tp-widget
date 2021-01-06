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
        use: ['style-loader', 'css-loader'] 
      },
    ],
  },
  plugins: [
  
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
};

