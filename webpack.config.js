   
   const HtmlWebpackPlugin = require('html-webpack-plugin')
   
   const {join} =  require ('path')
    module.exports = {
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
        ]
    }