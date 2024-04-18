let path=require('path')
let fs=require('fs')

let homeController=(req,res)=>{
    let homePath=path.join(__dirname,'../public/home.html')
    res.sendFile(homePath)
}

let aboutController=(req,res)=>{
    let aboutPath=path.join(__dirname,'../public/about.html')
    res.sendFile(aboutPath)
}

let contactController=(req,res)=>{
    let contactPath=path.join(__dirname,'../public/contact.html')
    res.sendFile(contactPath)
}
let usersController=(req,res)=>{
    let usersPath=path.join(__dirname,'../public/users.html')
    res.sendFile(usersPath)
}
let allDataController=(req,res)=>{
    let allUserPath=path.join(__dirname,'../public/allUser.html')
    res.status(200).sendFile(allUserPath)
 }
let contactPostController=(req,res)=>{
   let {text,email}=req.body;
   if(!text || !email){
    throw new Error('all fields required')
   }
   else{
    let dbPath=path.join(__dirname,'../db/db.js')
    let obj={id:Math.floor(Math.random()*1000),text,email}
    fs.readFile(dbPath,'utf-8',(err,data)=>{
        if(err){
            throw new Error('something wrong while registering')
        }
        else{
            let originalData=JSON.parse(data)
            let newUpdatedData=[obj,...originalData]
            fs.writeFile(dbPath,JSON.stringify(newUpdatedData),(err)=>{
                if(err){
                    throw new Error('something wrong while regestering')
                }
                else{
                    res.status(200).send({message:"user is registred",data:newUpdatedData,success:true})
                }
            })
        }
    })
   }
}

module.exports={homeController,aboutController,contactController,usersController,contactPostController,allDataController}