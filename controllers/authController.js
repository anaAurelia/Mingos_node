const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const conexion = require('../database/db')
const { promisify } = require('util')

//procedimiento para registrarnos
exports.register = async (req, res) => {
    try {
        const name = req.body.name
        const user = req.body.user
        const pass = req.body.pass
        let passHash = await bcryptjs.hash(pass, 8)
        //console.log(passHash)
        conexion.query('INSERT INTO users SET ?', {user:user, name:name, pass:passHash},(error, results)=>{
          if(error){console.log(error)}
          res.redirect('/')
        })
    } catch (error) {
        console.log(error)
    }



}

exports.login = async (req, res)=>{
   try{
    const user = req.body.user
    const pass = req.body.pass
    if(!user || !pass){
        res.render('login',{
            alert:true,
            alertTitle: "Advertencia",
            alertMessage: "Ingrese un usuario y contraseña",
            alertIcon: 'info',
            showConfirmButton: true,
            timer: false,
            ruta:'login'
        })
    }else{
       conexion.query('SELECT * FROM users WHERE user = ?', [user], (error, results)=>{
        if(results.length == 0 ||!(await bcryptjs.compare(pass, results[0].pass)) ){
            
        }
        
    }) 
    }
   }catch (error){

   } 
}