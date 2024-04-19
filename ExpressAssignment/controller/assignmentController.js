let path = require('path')
let fs = require('fs')

let homeController = (req, res) => {
    let homePath = path.join(__dirname, '../public/home.html')
    res.sendFile(homePath)
}

let aboutController = (req, res) => {
    let aboutPath = path.join(__dirname, '../public/about.html')
    res.sendFile(aboutPath)
}

let contactController = (req, res) => {
    let contactPath = path.join(__dirname, '../public/contact.html')
    res.sendFile(contactPath)
}

let userController = (req, res) => {
    let dbPath = path.join(__dirname, '../db/db.js')
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            throw new Error('somthig wrong while registring user')
        }
        else {
            let orignalData = JSON.parse(data)
            res.send({ success: true, data: orignalData })
        }
    })
}

let allDataController = (req, res) => {
    let allUserPath = path.join(__dirname, '../public/allUser.html')
    res.status(200).sendFile(allUserPath)
}

let contactPostController = (req, res) => {
    let { text, email } = req.body;
    if (!text || !email) {
        throw new Error('all fields required')
    }
    else {
        let dbPath = path.join(__dirname, '../db/db.js')
        let obj = { id: Math.floor(Math.random() * 1000), text, email }
        fs.readFile(dbPath, 'utf-8', (err, data) => {
            if (err) {
                throw new Error('something wrong while registering')
            }
            else {
                let originalData = JSON.parse(data)
                let newUpdatedData = [obj, ...originalData]
                fs.writeFile(dbPath, JSON.stringify(newUpdatedData), (err) => {
                    if (err) {
                        throw new Error('something wrong while regestering')
                    }
                    else {
                        res.status(200).send({ message: "user is registred", data: newUpdatedData, success: true })
                    }
                })
            }
        })
    }
}

let searchController = (req, res) => {
    let { search } = req.query;
    let dbPath = path.join(__dirname, '../db/db.js')
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            throw new Error('something wrong while searching')
        }
        else {
            let originalData = JSON.parse(data)
            let searchedData = originalData.filter((item) => {
                return item.text.toLowerCase().trim().includes(search.toLowerCase().trim())
            })
            res.send({ data: searchedData, success: true })
        }
    })
}

let deleteController = (req, res) => {
    let { id } = req.params;
    let dbPath = path.join(__dirname, '../db/db.js')
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            throw new Error('something wrong while searching')
        }
        else {
            let originalData=JSON.parse(data)
            let deletedData = originalData.filter((item) => {
                return item.id != id
            })
            fs.writeFile(dbPath, JSON.stringify(deletedData), (err) => {
                if (err) {
                    throw new Error('soemthing wrong while deleting')
                }
                else {
                   res.send({data:deletedData,success:true})
                }
            })
        }
    })
}

let singleController=(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let dbPath = path.join(__dirname, '../db/db.js')
    fs.readFile(dbPath,'utf-8',(err,data)=>{
        if(err){
            throw new Error('something wrong while reading')
        }
        else{
            let orignalData=JSON.parse(data);
            let singleData=orignalData.find((data)=>{
                return data.id==id
            })
            res.send({data:singleData,success:true})
        }
    })
}

module.exports = { homeController, aboutController, contactController, userController, contactPostController, allDataController, searchController, deleteController, singleController }