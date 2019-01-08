const express = require('express')
const path = require('path')
const app = express()
var proxy = require('http-proxy-middleware')
var options = {
        target: 'http://localhost:8080', // 目标主机
        changeOrigin: true, 
        pathRewrite: {
          '^/api': '/'
        }
    };

var exampleProxy = proxy(options);  //开启代理功能，并加载配置
app.use('/api', exampleProxy);//对地址为’/‘的请求全部转发
app.use(express.static(path.join(__dirname, 'dist')))
app.listen(3000, () => {
  console.log(`App listening at port 3000`)
})
