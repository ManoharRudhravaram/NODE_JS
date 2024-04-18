let express=require('express');
const route = require('./routes/routes');

let app=express();
app.use(express.json())
app.use(express.static('public'))
app.use((err,req,res,next)=>{
    if(err){
        res.status(500).send({message:err.message})
    }
    else{
        next()
    }
})
app.use(route)

app.listen(8000,()=>{
    console.log('server started at http://localhost:8000');
});