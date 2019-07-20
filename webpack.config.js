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
      },
      {
        test: /\.md$/i,
        use: 'raw-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'containers': __dirname + '/src/containers',
      'components': __dirname + '/src/components',
      'hooks': __dirname + '/src/hooks',
      'markdown': __dirname + '/static/markdown'
    }
  },
  plugins: [
    new HtmlWebPackPlugin()
  ],
  entry: __dirname + '/src/index.js',
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /.*/, to: "" }]
    }
  }
};