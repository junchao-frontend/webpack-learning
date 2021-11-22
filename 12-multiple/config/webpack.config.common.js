const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const json5 = require('json5')
const path = require('path')
module.exports = {
    entry: {
        index: './src/index.js',
        another: './src/another.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'), // __dirname表示当前路径 打包到dis目录下
        clean: true //每次打包之前把没用的文件清理掉
    },
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