let express=require('express')
const { homeController, aboutController, contactController, usersController, contactPostController, allDataController } = require('../controller/assignmentController')

let route=express.Router()

route.get('/',homeController)
route.get('/about',aboutController)
route.post('/contact',contactPostController)
route.get('/contact',contactController)
route.get('/allData',allDataController)
route.get('/users',usersController)

module.exports=route