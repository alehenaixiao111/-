   
   const HtmlWebpackPlugin = require('html-webpack-plugin')
   
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
            })
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
                }
            ]
        }
    }