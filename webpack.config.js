const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    alias: {
      'containers': __dirname + '/src/containers',
      'components': __dirname + '/src/components',
      'hooks': __dirname + '/src/hooks'
    }
  },
  plugins: [
    new HtmlWebPackPlugin()
  ],
  entry: __dirname + '/src/index.js',
};