const PORT = 3003

const bodyParse = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParse.urlencoded({extended:true}))
server.use(bodyParse.json())

server.listen(PORT, function(){
    console.log(`Server rodando na porta ${PORT}`)
})

module.exports = server