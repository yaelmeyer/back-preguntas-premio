const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config');

class Server{
    constructor(){
        this.app = express();
        this.port = 8280;
        this.puntosPath = "/api/puntos";
        this.preguntasPath ="/api/preguntas";
        this.premiosPath = "/api/premios";
        this.usuarioPath = '/api/usuario';

        //conectar a la base de datos
        this.conectarDB();

        //middlewares
        this.middlewares();

        //rutas de la app
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        //cors
        this.app.use(cors());
        //parseo y lectura del body
        this.app.use(express.json());
        //dierctorio publico
        this.app.use(express.static('public'));
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log(`Example app listening on port ${this.port}`);
        });
    }

    routes(){
        this.app.use(this.preguntasPath, require('../routes/preguntasRoute')),
        this.app.use(this.premiosPath, require('../routes/premiosRoute')),
        this.app.use(this.usuarioPath, require('../routes/usuarioRoute'))
    }
}

module.exports = Server;