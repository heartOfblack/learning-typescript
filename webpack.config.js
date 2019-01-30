const webpack = require( 'webpack' );
const {
  port
} = require( './global.config' );
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: process.env.HOT ? `http://localhost:${port}/dist` : './dist'
  },
  module: {
    rules: [ {
        test: /.js|ts$/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.css$/,
        use: [ {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }

    ]

  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    inline: true,
    hot: true,
    port
  },
  node: {
    __dirname: true
  }


}