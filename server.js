let http = require('http');
let users = [
    {id: 1, name: 'zyj'},
    {id: 2, name: 'lxq'}
]
let server = http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*')
    if(req.url === '/api/users'){
        res.end(JSON.stringify(users));
    }else{
        res.end('not found')
    }
})

server.listen('3000', ()=>{
    console.log('后端api服务器已经启动 3000端口')
})