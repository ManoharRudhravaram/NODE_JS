let express = require("express")
let app = express()
app.use(express.json())
app.set('view engine', 'ejs')
let path = require("path");
let fs = require("fs");
let dbPath = path.join(__dirname, "db/db.js")
app.get("/", (req, res) => {
    res.render("pages/home.ejs", { title: "Home" })
})

app.post("/service", (req, res) => {
    let { name, subject, rating } = req.body;
    if (!name || !subject || !rating) {
        res.send({ message: "All fields required" })
    }
    else {
        fs.readFile(dbPath, "utf-8", (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                let obj = { id: Math.floor(Math.random() * 1000), name, subject, rating }
                let originalData = JSON.parse(data);
                let newUpdatedData = [obj, ...originalData]
                fs.writeFile(dbPath, JSON.stringify(newUpdatedData), (err) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.send({ message: "success", success: true })
                    }
                })
            }
        })
    }
})

app.get("/about", (req, res) => {
    res.render("pages/about.ejs", { title: "About" })
})

app.get("/service", (req, res) => {
    res.render("pages/service.ejs", { title: "Service" })
})

app.get("/trainers", (req, res) => {
    res.render("pages/trainers.ejs", { title: "Trainers" })
})

app.get("/trainersdata",(req,res)=>{
    fs.readFile(dbPath,'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            let originalData=JSON.parse(data)
            res.send({data:originalData,success:true})
        }
    })
})

app.listen(8000, () => {
    console.log('server started at http://localhost:8000');
})