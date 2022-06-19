
 const HtmlWebpackPlugin = require('html-webpack-plugin')
 const {join} = require('path')   
    module.exports = {
        mode:'development',
        entry:'./src/main.js',
        output:{
            path:join(__dirname,'lib'),
            filename:'webpack-demo.js',
            clean:true
        },
        plugins:[
        new HtmlWebpackPlugin({
            template:join(__dirname,'public/index.html')
        }),
        new MiniCssExtractPlugin(),
        ],
        devServer:{
            open:true,
            port:44444
        },
        module:{
            rules:[
                {
                    test:/\.css/i,
                    use:[MiniCssExtractPlugin.loader,'css-loader']
                    // use:['style-loader','css-loader']
                },
                {
                    test:/\.less/i,
                    use:['style-loader','css-loader','less-loader']
                },
                {
                    test:/\.(gif|png)$/i,
                    // type:'asset/resource'
                    type:'asset',
                    generator:{
                        filename:'images/[hash:6][ext]'
                    }
                },
                {
                    test:/\.(eot|svg|ttf|woff|woff2)$/i,
                    type:'asset/resource',
                    generator:{
                        filename:'fonts/[hash:6][ext]'
                    }
                },
                {
                    test:/\.js$/i,
                    // use:[{
                    //     loader:'babel-loader',
                    //     options:{
                    //         presets:['@babel/preset-env']
                    //     }
                    // }]
                    use:['babel-loader']
                }
            ]
        },

    }