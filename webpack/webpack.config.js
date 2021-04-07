const modoDev= process.env.NODE_ENV !=='production'
const webpack= require('webpack')
const MiniCssExtractPlugin= require('mini-css-extract-plugin')
const uglifyPlugin= require('uglifyjs-webpack-plugin')
const OptimizeCSSassetsPlugin=require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports={
    mode: modoDev? 'development': 'production',
    entry: './src/principal.js',
    output: {
      filename: 'principal.js',
      path: __dirname+ '/public'
    },
    optimization:{
        minimizer:[
        new UglifyJsPlugin({
            cache: true,
            parallel:true
        }),
        new OptimizeCSSassetsPlugin({})
    ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    module:{
        rules:[{
            test: /\.s?[ac]ss$/,
            use:[
                MiniCssExtractPlugin.loader,
                //'style-loader', //adiciona CSS na DOM injetando a tag style
                'css-loader', ///interpreta @import, url()
                "sass-loader"
            ]
        }]
    }
}