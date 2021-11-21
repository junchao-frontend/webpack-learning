const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWPlugin = require('css-minimizer-webpack-plugin')
const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js', // 打包的文件名 
        clean: true,
        path: path.resolve(__dirname, './dist') // __dirname表示当前路径
    },
    devtool: 'inline-source-map', // 工具
    mode: 'production', // 模式
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // html模板
            filename: 'app.html',
            inject: 'body' // 生成的html js插入到body里面
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[contenthash].css'
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
            }
        ]
    },

    optimization:{
        minimizer:[
            new CssMinimizerWPlugin()
        ]
    }

}