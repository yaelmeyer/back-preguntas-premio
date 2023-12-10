const mongoose = require('mongoose');

const dbConnection = async() => {
    try{
        await mongoose.connect("mongodb+srv://userNode:Node.20231A@cluster0.pug61n0.mongodb.net/preguntas-premio")
        console.log('base de datos online');
    }
    catch(err){
        throw new Error('Error al iniciar la base de datos');
    }
}

module.exports = {
    dbConnection
}