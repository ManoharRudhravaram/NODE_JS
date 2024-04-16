let express=require('express')
let path=require('path')
let app=express()

let PORT=8000;
app.use(express.json())
// console.log(app);
app.get('/',(req,res)=>{
    console.log(req.method,'method')
    console.log(req.url,'url')
    console.log(req.baseUrl,'baseUrl')
    res.cookie('cookie','thisismycookie')
    res.send('hello i am home');
})

app.get('/clear',(req,res)=>{
    res.clearCookie('cookie')
    res.send('cleared')
})

// app.get('/:id',(req,res)=>{
//     console.log(req.params,'parms')
//     res.send('hwllo i am home')
// })

// app.post('/reg',(req,res)=>{
//     console.log(req.body);
//     console.log(req.method,'method');
//     console.log(req.url,'url')
//     console.log(req.baseUrl,'baseUrl')
//     res.send('hello i am registre')
// })

app.post('/logout',(req,res)=>{
    let {email,password}=req.body;
    if(email=='manu@gmail.com' && password=='1234'){
        res.redirect(301,'/')
    }
    else{
        res.send("something wrong")
    }
})

app.get('/book',(req,res)=>{
    let filePath=path.join(__dirname,'../ManoharRudhravaramResume (1) (1).pdf')
    console.log(filePath);
    res.download(filePath);
    // res.send('Downloading');
})


app.listen(PORT,()=>{
    console.log(`server started at localhost:8000`);
})