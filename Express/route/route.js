let express=require('express')

let route=express.Router()
route.get('/home',(req,res)=>{
    res.send({message:'this is home page'})
})
route.post('/reg',(req,res)=>{
    let {name,age}=req.body;
    res.send({name,age})
})

module.exports=route;