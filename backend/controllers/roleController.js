const asyncHandler = require('express-async-handler')

// @description Get goals
// @route Get/api/goals
// @access Private


const getRoles = asyncHandler(async (req, res) => {
 res.status(200).json({message: 'Get roles'})

})


// @description set role
// @route POST/api/goals
// @access Private


const setRole =asyncHandler( async (req, res) => {
 if (!req.body.text){
     res.status(400)
     throw new Error('Please add a text field')
    }   
 res.status(200).json({message: 'set team roles'})
   
})

// @description update goals
// @route PUT/api/goals
// @access Private


const updateRole =asyncHandler(async (req, res) => {
 
 res.status(200).json({message: `Update roles ${req.params.id}` })
   
 })
   
 // @description Get goals
// @route Get/api/goals
// @access Private


const deleteRole = asyncHandler(async (req, res) => {
 res.status(200).json({message: `Delete roles ${req.params.id}` })
   
})
     

module.exports = {
 getRoles, 
 setRole,
 updateRole,
 deleteRole,

}