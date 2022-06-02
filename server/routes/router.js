const express=require('express')
const route=express()

const service=require('../services/render')
const controller=require('../controller/controller')


route.get('/',service.homeRouts)

route.get('/add_user',service.add_user)

route.get('/update_user',service.update_user)


//API
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete) 


module.exports=route