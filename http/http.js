let http=require('http')
let server=http.createServer((req,res)=>{
    console.log('method',req.method);
    console.log('url',req.url);
    console.log('headers',req.headers);
    console.log('params',req.params);
    console.log('query',req.query);
    console.log('body',req.body);
    console.log('-----------------------');
    res.end('done')
})
server.listen(8080,()=>{
    console.log('server started');
})