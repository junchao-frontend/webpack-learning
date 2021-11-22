const CssMinimizerWPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
    output: {
        filename: 'scripts/[name].[contenthash].js', 
        publicPath: 'http://localhost:8080/'
    },
    mode: 'production', // 模式
    
    optimization:{
        minimizer:[
            new CssMinimizerWPlugin(), // 压缩css
            new TerserPlugin() // 压缩js
        ],
    }

}