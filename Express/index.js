let express=require('express')
let route=require('./route/route');
let app=express()

app.use(express.json())

// //aplication level middle ware
// app.use((req,res,next)=>{
//     let {name}=req.body;
//     if(name=='manohar'){
//         next()
//     }
//     else{
//         res.send('you are not authorized to get response')
//     }
// })

// //route level middleware
// app.use(route)

app.use((err,req,res,next)=>{
    if(err){
        res.send(err.message)
    }
    else{
        next()
    }
})

app.get('/',(req,res)=>{
   try {
        res.sen('xyz')
   } catch (err) {
    throw new Error('error in syntax')
   }
})

app.listen(8000,()=>{
    console.log('server started');
})