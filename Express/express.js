let express=require('express')
let app=express()
let PORT=8000;
app.use(express.json())

app.get('/',(req,res)=>{
    console.log(req.method,'method')
    console.log(req.url,'url')
    console.log(req.baseUrl,'baseUrl')
    res.send('hello i am home')
})

app.get('/:id',(req,res)=>{
    console.log(req.params,'parms')
    res.send('hwllo i am home')
})

app.post('/reg',(req,res)=>{
    console.log(req.body);
    console.log(req.method,'method');
    console.log(req.url,'url')
    console.log(req.baseUrl,'baseUrl')
    res.send('hello i am registre')
})

app.listen(PORT,()=>{
    console.log(`server started at localhost:8000`);
})