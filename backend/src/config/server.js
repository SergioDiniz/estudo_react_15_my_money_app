const PORT = 3003

const bodyParse = require('body-parser')
const express = require('express')
const server = express()
const queryParse = require('express-query-int')

const allowCors = require('../config/cors')

server.use(bodyParse.urlencoded({extended:true}))
server.use(bodyParse.json())
server.use(allowCors)
server.use(queryParse())

server.listen(PORT, function(){
    console.log(`Server rodando na porta ${PORT}`)
})

module.exports = server