const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre:{
        type: String,
        require: [true, 'el nombre es requerido']
    },
    password:{
        type: String,
        require: [true, 'la contraseña es obligatoria']
    },
    puntos:{
        type: Number
    }
})

UsuarioSchema.methods.toJSON = function(){
    const { _id,...usuario} = this.toObject();
    return usuario;
}

module.exports = model( 'Usuario', UsuarioSchema);