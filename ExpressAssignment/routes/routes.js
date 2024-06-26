let express=require('express')
const { homeController, aboutController, contactController, userController, contactPostController, allDataController, searchController, deleteController, singleController, updateController, sortController } = require('../controller/assignmentController')

let route=express.Router()

route.get('/',homeController)
route.get('/about',aboutController)
route.post('/contact',contactPostController)
route.get('/contact',contactController)
route.get('/allData',allDataController)
route.get('/users',userController)
route.get('/search',searchController)
route.delete('/delete/:id',deleteController)
route.get('/single/:id',singleController)
route.put('/update/:id',updateController)
route.post('/sort',sortController)
module.exports=route