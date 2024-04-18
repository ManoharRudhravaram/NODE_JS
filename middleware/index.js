let express=require('express')
let path=require('path')

let app=express()
app.use(express.json())
app.use(express.static('public'))
app.get('/',(req,res)=>{
    let tempPath=path.join(__dirname,'public/index.html')
    res.sendFile(tempPath)
})

app.get('/about',(req,res)=>{
    
})

app.listen(8000,()=>{
    console.log('server started at http://localhost:8000');
})