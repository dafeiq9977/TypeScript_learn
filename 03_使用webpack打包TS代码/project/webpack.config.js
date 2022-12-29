// 引入一个包
const path = require('path');
// 让webpack自动生成一个html文件，并把资源放入这个html文件中
// npm i -D html-webpack-plugin
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 引入clean插件
// npm i -D clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// webpack中所有配置信息都应该写在module.exports中
module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",

    // 指定打包文件
    output: {
        // 指定打包后的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件名称
        filename: "bundle.js",

        // webpack默认也不支持IE环境了，生成的立即调用函数是一个箭头函数，需要手动设置一下支持老版本浏览器
        environment: {
            // 告诉webpack，你自动生成代码的时候不要使用箭头函数
            arrowFunction: false,
        }
    },
    // webpack打包时要使用的模块
    module: {
        // 指定加载的规则
        rules: [
            {
                // 指定规则生效的文件
                test: /\.ts$/,
                // 使用ts-loader处理ts文件
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: "babel-loader",
                        // 设置babel
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11",
                                        },
                                        "corejs": "3",
                                        // 使用corejs的方式
                                        "useBuiltIns": "usage"  // usage表示按需加载
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader',
                ],
                // node-modules里的文件不要处理
                exclude: /node-modules/,
            }
        ]
    },
    // 配置webpack的插件
    plugins: [
        // 每次生成新的文件时都先清空输出目录里的老文件
        new CleanWebpackPlugin(),
        // 自动帮我们生成一个html文件，并在这个html文件里引入我们生成的JS，CSS文件
        new HTMLWebpackPlugin({
            //title: "这是一个自定义的title"
            // 设置html文件的模板，在这个文件的基础上生成html文件
            template: "./src/index.html"
        }),
    ],

    // 用来设置哪些文件可以作为模块
    resolve:{
        // 文件名后缀是.ts或者.js的文件可以作为模块来使用
        extensions: ['.ts', '.js']
    },

    mode: "production"
}

/* 
    npm i -D webpack-dev-server
    下载webpack-dev-server作为webpack的一个自动更新的服务器 
    package.json文件里要加上 "start": "webpack serve --open index.html"脚本
*/