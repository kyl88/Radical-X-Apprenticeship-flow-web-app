const asyncHandler = require('express-async-handler')

const Role = require('../model/roleModel')

// @description Get goals
// @route Get/api/goals
// @access Private


const getRoles = asyncHandler(async (req, res) => {
 const roles = await Role.find()
 res.status(200).json(roles)


})


// @description set role
// @route POST/api/goals
// @access Private


const setRole = asyncHandler( async (req, res) => {
 if (!req.body.text){
     res.status(400)
     throw new Error('Please add a text field')
    }
    
    const role = await Role.create({
     text: req.body.text

    })
     res.status(200).json(role)
   
})

// @description update goals
// @route PUT/api/goals
// @access Private


const updateRole =asyncHandler(async (req, res) => {
   const role = await Role.findById(req.params.id)
   
   if (!role){
     res.status(400)
     throw new Error('Role not found')

   }
    const updatedRole = await Role.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
   })
    
 
   res.status(200).json(updatedRole)
   
 })
   
 // @description Get goals
// @route Get/api/goals
// @access Private


const deleteRole = asyncHandler(async (req, res) => {
  const role = await Role.findById(req.params.id)
  
  if (!role){

    res.status(400)
    throw new Error ('Role not found')
  }

   await role.remove()
   res.status(200).json({id: req.params.id })
   
})
     

module.exports = {
 getRoles, 
 setRole,
 updateRole,
 deleteRole,

}