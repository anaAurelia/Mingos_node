/*Invocando los módulos*/
const express = require('express')
const dotenv = require ('dotenv')
const cookieParser = require('cookie-parser')

const app = express()

//Seteamos el motor de las plantillas 
app.set('view engine', 'ejs')

//seteamos la carpeta public 
app.use(express.static('public'))
app.use(express.json())

//Seteamos nuestras variables de entorno 
dotenv.config({path: '/env/.env'})

//Setear las cookies
//app.use(cookieParser)

//Llamar al router 
app.use('/', require('./routes/router'))

/*En que puerto va escuchar nuestro servidor*/
app.listen(3001, ()=>{
    console.log('SERVER UP runnung in http://localhost:3001')
})

