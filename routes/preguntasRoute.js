const {Router} = require('express');
const {check} = require('express-validator');
const {preguntaGet, preguntasPost, getPreguntasRespondidas, getPreguntasByPaquete,getPaquetes} = require('../controllers/preguntasController');

const router = Router();

router.get('/', preguntaGet);

router.post('/', preguntasPost)

router.get('/respondidas', getPreguntasRespondidas)

router.get('/byPaquetes', getPreguntasByPaquete)

router.get('/paquetes', getPaquetes)


module.exports = router;