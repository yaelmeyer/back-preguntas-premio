const {Schema, model} = require('mongoose')

const PaqueteSchema = Schema({
    _id:{
        type: String,
        require:[true, 'requerido']
    },
    descripcion:{
        type: String,
        require:[true, 'requerido']
    }
})

PaqueteSchema.methods.toJson = function(){
    const {_id, ...paquete} = this.toObject()
    // paquete.id = _id
    return paquete
}

module.exports = model('Paquete', PaqueteSchema)