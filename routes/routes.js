
const express = require('express')

const {home, createuser, getUsers, userEdit, deleteUser} = require('../controller/controller')

const router = express.Router()

router.get('/', home)
router.post('/createuser', createuser)
router.get('/getusers', getUsers)
router.put('/edituser/:id', userEdit)
router.delete('/deleteuser/:id', deleteUser)


module.exports = router