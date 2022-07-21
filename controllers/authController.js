const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const conexion = require('../database/db')
const{promisify} = require('util')

//procedimiento para registrarnos
exports.register = async(req, res) =>{
const name = req.body.name
const user = req.body.user
const pass = req.body.pass

console.log(name + " - " + user + " - " + pass)
}