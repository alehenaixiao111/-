   
   const HtmlWebpackPlugin = require('html-webpack-plugin')
   
   const { VueLoaderPlugin } = require('vue-loader')

   const {join} =  require ('path')
    module.exports = {
        mode:'development',
        entry:'./src/main.js',
        output:{
            path:join(__dirname,'lib'),
            filename:'working-demo.js',
            clean:true
        },
        plugins:[
            new HtmlWebpackPlugin({
                template:'./public/index.html',
                filename:'index.html'
            }),
            new VueLoaderPlugin()

        ],
        devServer:{
            open:true,
            port:30000
        },
        module:{
            rules:[
                {
                    test:/\.css$/i,
                    use:['style-loader','css-loader']
                },
                {
                    test:/\.less$/i,
                    use:['style-loader','css-loader','less-loader']
                },
                {
                    test:/\.(gif|png|svg)$/i,
                    type:'asset',
                    parser:{
                        dataUrlCondition:{
                            maxSize:2*1024
                        }
                    },
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
                    test:/.js$/i,
                    use:['babel-loader']
                },
                {
                    test:/\.vue$/i,
                    loader:'vue-loader'
                }
            ]
        },

    }