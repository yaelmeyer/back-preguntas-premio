const {Schema, model} = require('mongoose');

const PremioSchema = Schema({
    descripcion: {
        type: String,
        required:[true, 'la descripcion es obligatoria']
    },
    puntajeMin: {
        type: Number,
        required:[true, 'el puntaje minimo es obligatorio']
    }
})

PremioSchema.methods.toJSON = function(){
    const {_id, ...premio} = this.toObject();
    return premio;
}

module.exports = model('Premio', PremioSchema);