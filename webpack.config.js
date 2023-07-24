const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'eval-cheap-source-map',
    entry: './client/index.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'index.html'
    })],
    mode: process.env.NODE_ENV,
    devServer: {
        proxy: {
          '/api': {
            target: 'http://localhost:3000',
        },
        },
        static: path.join(__dirname, './client'),
        compress: true,
        port: 8080,
        historyApiFallback: true
        // devMiddleware:{npm 
        //     publicPath: '/'
        // } 
    },
    module: {
        rules: [
            {
              test: /\.jsx?/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    ['@babel/preset-env', { targets: "defaults" }],
                    ['@babel/preset-react', { targets: "defaults" }]
                  ]
                }
              }
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                "style-loader",
                "css-loader",
                "sass-loader",
              ],
            },
            {
              test: /\.(png|svg|jpg|jpeg)$/i,
              type: 'asset/resource'
            }
          ]  
    }
};
