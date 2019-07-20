const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
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
      '@api': __dirname + '/src/api/',
      '@containers': __dirname + '/src/containers',
      '@components': __dirname + '/src/components',
      '@hooks': __dirname + '/src/hooks',
      '@markdown': __dirname + '/static/markdown',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/static/template/index.html',
      base: '/'
    })
  ],
  entry: __dirname + '/src/index.js',
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' }
      }
    }
  }
};