const {response, request} = require('express');
const Pregunta = require('../models/pregunta');

const preguntaGet = async(req = request, res = response) =>{
    const {dia} = req.query;
    const query = {dia:dia}

    const preguntas = await Pregunta.find(query);
    res.json({
        preguntas
    })
}

const preguntasPost = async(req = request, res = response ) =>{
    const {_id, correcto} = req.body
    console.log('body:' +req.body)
    // console.log('preguntas: '+ pregunta)
    // for(cont = 0; cont < preguntas.length; cont++){
    let query = {
        _id
    }

    let p = await Pregunta.find(query)
    console.log("p: "+p[0])
    p[0].respondida = true
    p[0].correcto = correcto

    await p[0].save()
    // }

    res.json({
        msg: 'pregunta actualizada'
    })
 
} 

const getPreguntasRespondidas =  async(req = request, res = response) =>{
    const query = {respondida: true}
    const preguntas = await Pregunta.find(query)

    res.json({
        msg: 'preguntas encontradas',
        preguntas
    })
}

module.exports = {
    preguntaGet,
    preguntasPost,
    getPreguntasRespondidas
}