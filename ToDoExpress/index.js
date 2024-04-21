let express=require('express')
let fs=require('fs')
let path=require('path')
let app=express()
app.use(express.json())
app.use((err,req,res,next)=>{
    if(err){
        res.send({err:err.message})
    }
    else{
        next()
    }
})
let htmlPath=path.join(__dirname,'index.html');
let dbPath=path.join(__dirname,'db.js');
app.get('/',(req,res)=>{
    res.sendFile(htmlPath)
})
app.post('/',(req,res)=>{
    let {task}=req.body;
    let obj = { id: Math.floor(Math.random() * 1000), task }
    fs.readFile(dbPath,'utf-8',(err,data)=>{
        if(err){
            throw new Error("something wrong while reading file")
        }
        else{
            let originalData=JSON.parse(data)
            let newUpdatedData = [obj, ...originalData]
            fs.writeFile(dbPath,JSON.stringify(newUpdatedData),(err)=>{
                if(err){
                    throw new Error("something wrong while writing file")
                }
                else{
                    res.send({data:newUpdatedData,success:true,message:"task added"})
                }
            })
        }
    })
})

app.put("/",(req,res)=>{
    let {id,task}=req.body;
    fs.readFile(dbPath,'utf-8',(err,data)=>{
        if(err){
            throw new Error("something wrong while reading file")
        }
        else{
            let originalData=JSON.parse(data)
            let updatedData=originalData.map((item)=>{
               if(item.id==id){
                return {...item,task:task};
               }
               else{
                return item;
               }
            })
            console.log(updatedData);
            fs.writeFile(dbPath,JSON.stringify(updatedData),(err)=>{
                if(err){
                    throw new Error("something wromg while updating file")
                }
                else{
                    res.send({data:updatedData,success:true,message:"updated successfully"})
                }
            })
        }
    })
})

app.delete("/",(req,res)=>{
    let {id}=req.body;
    fs.readFile(dbPath,"utf-8",(err,data)=>{
        if(err){
            throw new Error("somrthing wrong whie reading")
        }
        else{
            let originalData=JSON.parse(data)
            let updatedData=originalData.filter(item=>item.id!==id)
            fs.writeFile(dbPath,JSON.stringify(updatedData),(err)=>{
                if (err) {
                    throw new Error('something wrong while deleting')
                }
                else{
                    res.send({data:updatedData,success:true,message:"deleted successfully"})
                }
            })
        }
    })
})

app.listen(8000,()=>{
    console.log("http://localhost:8000");
})