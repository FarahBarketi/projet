// const User = require('..model/user')
// const express = require('express')
// const { findByIdAndDelete, findByIdAndUpdate } = require('../model/user')
// const route = express.Router()
// route.get('/test' , (req, res)=>(
//     res.send('test')
// ))
// route.post('/adduser', async (req , res)=>{
//     const{name , firstName , dateBirth , email , phone} = req.body
//     try {
//        let user = await new User({name , firstName , dateBirth , email , phone})
//         user.save()
//         res.send({'user added': user})
//     } catch (error) {
//         console.log('error add new user')
//     }
// })
// route.get('/getuser', async(req,res)=>{
//   try {
//       let user = await User.find()
//       res.status(200).send({"users" : users})
//     } catch (error) {
//       console.log('error get users')
//   }  
// })
// route.delete('/removeuser/:id', async(req,res)=>{
//   const {id} = req.params
//     try {
//         await User.findByIdAndDelete(id)
//         res.status(200).send('users deleted')
//       } catch (error) {
//         console.log('users not deleted')
//     }  
//   })
//   route.put('/updateuser/:id', async(req,res)=>{
//     const {id} = req.params
//     const {name , firstName , dateBirth , email , phone} = req.body
//       try {
//         let user =  await User.findByIdAndUpdate(id,{$set : {name , firstName , dateBirth , email , phone}})
//           res.status(200).send('users updated : user')
//         } catch (error) {
//           console.log('users not deleted')
//       }  
//     })
// module.exports = route