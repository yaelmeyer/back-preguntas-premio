const {response, request} = require('express');
const Usuario = require('../models/usuario');

const puntosPost = async(req = request, res = response) =>{
    const {puntos, usuario, ...rest} = req.body;
    const user = usuario.usuario
    const pass = usuario.password
    const query = {usuario:user, password: pass}

    const usuarioObtenido = await Usuario.find(query)
    // console.log(usuarioObtenido)
    usuarioObtenido[0].puntos += puntos

    await usuarioObtenido[0].save()
    res.json({
        msg: 'puntaje guardado'
    })

}

const usuarioGet = async(req = request, res = response) => {

    const{ usuario} = req.query;
    const query = {usuario};

    const usuarioObtenido = await Usuario.find(query);

    const msg = usuarioObtenido.length>0? "usuario encontrado": "no se encontro usuario/contraseña";
    const encontrado =usuarioObtenido.length> 0;

    res.json({
        msg,
        usuarioObtenido,
        encontrado
    })
}

const usuarioGetAuth = async(req = request, res = response) => {

    const{ usuario, password} = req.query;
    const query = {usuario, password};

    const usuarioObtenido = await Usuario.find(query);

    // console.log('usuario:'+usuario)
    // console.log('pass: '+password)
    // console.log(usuarioObtenido)

    // console.log(usuarioObtenido.length)
    const msg = usuarioObtenido.length>0? "usuario encontrado": "no se encontro usuario/contraseña";
    const encontrado =usuarioObtenido.length> 0;

    res.json({
        msg,
        usuarioObtenido,
        encontrado,
    })
}

const terminarDia = async(req = request, res = response) =>{

    const {usuario, dia} = req.body

    const query = {
        usuario: usuario.usuario,
        password: usuario.password
    }

    user = await Usuario.find(query)

    user[0].diasTerminados.push(dia)

    user[0].save()

    res.json({
        msg: 'dia guardado'
    })
}

module.exports = {
    usuarioGet,
    puntosPost,
    usuarioGetAuth,
    terminarDia
}