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
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|png|woff2?|ttf|)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ]
  },
  resolve: {
    alias: {
      '@api': __dirname + '/src/api',
      '@components': __dirname + '/src/components',
      '@containers': __dirname + '/src/containers',
      '@config': __dirname + '/src/config',
      '@hooks': __dirname + '/src/hooks',
      '@utils': __dirname + '/src/utils',
      '@markdown': __dirname + '/static/markdown',
      '@style': __dirname + '/static/style',
      '@template': __dirname + '/static/template',
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