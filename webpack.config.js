var path = require('path')
var htmlWebpackplugin = require('html-webpack-plugin')

var VueLoaderPlugin = require('vue-loader/lib/plugin');

// 根据webpack 或者webpack-dev-server，打包，如果没有指定入口和出口路径，会自己加载这问配置文件中的内容
module.exports = {
    mode: "development", 
    entry : path.join(__dirname,'./src/main.js'),
    output : {
        path : path.join(__dirname,'./dist'),
        filename : 'bundle.js'
    },
    plugins : [
        new htmlWebpackplugin({
            template : path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin() // make sure to include the plugin for the magic
    ],
    module : {// 用于加载第三方的loader的模块
        rules : [
            {test : /\.css$/,use : ['style-loader','css-loader']},
            {test : /\.scss$/,use : ['style-loader','css-loader','sass-loader']},
            {test : /\.(jpg|png|jpeg|bmp)$/,use : 'url-loader?limit=212575&name=[hash:8]-[name].[ext]'},// 处理图片的loader,limit如果大于，默认为base64转码，小于或大于，则不会转,name和ext.表示保持原有名称和后缀名
            {test : /\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},// 处理字体文件
            // {test : /\.js$/, use : 'babel-loader', exclude: /node_moduels/},//配置babel，转化高级的ES的语法
            {test : /\.vue$/,use:'vue-loader'}
        ]
    },
    resolve : {
        alias : {
            "vue$" : "vue/dist/vue.js"
        }
    }
}