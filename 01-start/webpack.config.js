const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js', // 打包的文件名 
        clean: true,
        path: path.resolve(__dirname, './dist') // __dirname表示当前路径
    },
    mode: 'none', // 模式
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // html模板
            filename: 'app.html',
            inject: 'body' // 生成的html js插入到body里面
        })
    ],
}