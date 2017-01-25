var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
   entry: [
    './app/server.tsx'
  ],
  target: "node",
   resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
  output: {
    path: path.join(__dirname, 'server'),
    filename: 'server.js',
  },
  plugins: [
    
  ],
  module: {
    loaders: [
     {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
}
