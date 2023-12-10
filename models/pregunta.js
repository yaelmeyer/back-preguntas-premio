const {Schema, model} = require('mongoose');

const PreguntaSchema = Schema({
    pregunta:   {
        type: String,
        require:[true, 'la pregunta es obligatoria']
    },
    respuesta:  {
        type: String,
        require:[true, 'la respuesta es obligatoria']
    },
    opciones:   {
        type: Array,
        require:[true, 'las opciones son obligatorias']
    },
    correcto:   {
        type: Boolean
    },
    respondida: {
        type: Boolean,
        require:[true, 'respondida es obligatorio']
    },
    dia:    {
        type: Number,
        require:[true, 'el dia es obligatorio']
    }
});

PreguntaSchema.methods.toJSON = function(){
    const {_id, dia,  ...pregunta} = this.toObject();
    pregunta.id = _id
    return pregunta;
}

module.exports = model('Pregunta', PreguntaSchema);