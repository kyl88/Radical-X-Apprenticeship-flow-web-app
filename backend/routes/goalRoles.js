const express = require('express')
const router = express.Router()
const {getRoles,setRole,updateRole,deleteRole} = require('../controllers/roleController')

router.route('/').get(getRoles).post(setRole)
router.route('/:id').delete(deleteRole).put(updateRole)


module.exports = router