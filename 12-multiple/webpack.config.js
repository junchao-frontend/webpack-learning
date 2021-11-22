const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWPlugin = require('css-minimizer-webpack-plugin')
const json5 = require('json5')
const path = require('path')
module.exports = {
    entry: {
        index: './src/index.js',
        another: './src/another.js'
    },
    output: {
        // scripts是把js文件都放到这个文件夹下 [name]是读取entry里面的key值
        // [contenthash]是生成哈希字符串 每当内容发生改变的时候 字符串就会发生改变 
        filename: 'scripts/[name].[contenthash].js', 
        clean: true, //每次打包之前把没用的文件清理掉
        path: path.resolve(__dirname, './dist'), // __dirname表示当前路径 打包到dis目录下
        publicPath: 'http://localhost:8080/'
    },
    devtool: 'inline-source-map', // 工具 有助于追踪错误和警告在源代码中的原始位置
    mode: 'development', // 模式
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // html模板
            filename: 'app.html', // 打包好的入口文件
            inject: 'body' // 生成的html js插入到body里面
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[contenthash].css' // 用于抽离css
        })
    ],
    devServer: {
        static: './dist'
    },
    module: {
        rules:[
            {
            test: /\.png$/,// 加载jpg后缀的图片
            type: 'asset/resource',
            generator: {
                filename: 'images/[contenthash][ext]'
            }
            },
            {
                test: /\.txt$/,
                type: 'asset/source'
            },
            {
                test: /\.(css|less)$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','less-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(csv|tsv)$/,
                use: 'csv-loader'
            },
            {
                test: /\.xml$/,
                use: 'xml-loader'
            },
            {
                test: /\.json5$/,
                type: 'json',
                parser: {
                    parse: json5.parse
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除依赖里面的js文件
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            [
                                '@babel/plugin-transform-runtime'
                            ]
                        ]
                    }
                }
            }
        ]
    },
    optimization:{
        minimizer:[
            new CssMinimizerWPlugin() // 压缩css
        ],
        splitChunks: {
            // 缓存第三方库
           cacheGroups: {
               vendor: {
                   test: /[\\/]node_modules[\\/]/,
                   name: 'vendors',
                   chunks: 'all'
               }
           }
        }
    }

}