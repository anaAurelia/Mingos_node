/*Llamamiento de los módulos a través de las constantes*/ 
const express = require('express')
const dotenv = require ('dotenv')
const cookieParser = require('cookie-parser')

const app = express() 

//Seteamos el motor de las plantillas ejs
app.set('view engine', 'ejs')

//Seteamos la carpera public para archivos estaticos 
app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Seteamos nuestras variables de entorno 
dotenv.config({path: './env/.env'})

//para trabajar con las cookies 
//app.use(cookieParser)

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(3000, ()=>{
    console.log('SERVER UP runnung in http://localhost:3000')
})