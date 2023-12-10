const{response, request} = require('express');
const Premio = require('../models/premio');

const premioGet = async(req = request, res = response) => {
    
    const premios = await Premio.find();

    premios.sort((a,b) => a.puntajeMin -b.puntajeMin)

    res.json({
        premios
    })
}

const premiosParcialGet = async(req = request, res = response) => {
    const {puntos} = req.query
    const query = {
        puntajeMin: {$lte: puntos}
    }
    console.log('query: '+query)
    const premios = await Premio.find(query)

    premios.sort((a,b) => a.puntajeMin -b.puntajeMin)

    res.json({
        msg: puntos,
        premios
    })

}

module.exports = {
    premioGet,
    premiosParcialGet
}