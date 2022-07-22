const express =  require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

const app = express()

//seteamos el mootor de las plantillas
app.set('view engine', 'ejs')

//seteamos la carpeta public para archivos estáticos
app.use(express.static('public'))

//para procesar datos enviadors desde forms
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//seteamos las variables de entorno 
dotenv.config({path: '/env/.env'})

//para setear las cookies 
app.use(cookieParser())

//Llamar al router
app.use('/', require('./routes/router'))

//Donde va a escuchar nuestro servidor
app.listen(3001, ()=>{
    console.log('SERVER UP runnung in http://localhost:3001')
})