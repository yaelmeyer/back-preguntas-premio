const {response, request} = require('express');
const Pregunta = require('../models/pregunta');
const Paquete = require('../models/paquete')

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

const getPreguntasByPaquete = async(req = request, res =response) =>{
    const {_id} = req.query
    
    const query = {
        paquete: _id,
        respondida: false
    }
    console.log(_id)
    console.log(req.query)

    const preguntas = await Pregunta.find(query)

    res.json({
        msg: 'preguntas encontradas',
        preguntas
    })
}

const getPaquetes = async(req = request, res = response) =>{
    
    const paquetes = await Paquete.find()

    let paquetesFinal = []
    console.log(paquetes.length)
    for(let cont = 0; cont < paquetes.length; cont++){
        let query ={
            paquete:paquetes[cont]._id,
            respondida:false
        }
        let preguntas = await Pregunta.find(query)
        if (preguntas.length > 0)
            paquetesFinal.push(paquetes[cont])
    }

    res.json({
        msg: 'paquetes encontrados',
        paquetes: paquetesFinal
    })
}

module.exports = {
    preguntaGet,
    preguntasPost,
    getPreguntasRespondidas,
    getPreguntasByPaquete,
    getPaquetes
}