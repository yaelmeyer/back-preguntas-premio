const {response, request} = require('express');

const home = (req = request, res =response) =>{
    res.send('bienbenido a la app')
}

module.exports = {
    home
}