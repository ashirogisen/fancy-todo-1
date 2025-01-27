const router = require('express').Router()
const userRoutes = require('./userRoutes')
const todoRoutes = require('./todoRoutes')
const projectRoutes = require('./projectRoutes')
const messageRoutes = require('./messageRoutes')

router.use('/', userRoutes)
router.use('/todos', todoRoutes)
router.use('/projects', projectRoutes)
router.use('/messages', messageRoutes)

module.exports = router