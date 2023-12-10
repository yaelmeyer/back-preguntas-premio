const {Router} = require('express');
const {check} = require('express-validator');
const {preguntaGet, preguntasPost, getPreguntasRespondidas} = require('../controllers/preguntasController');

const router = Router();

router.get('/', preguntaGet);

router.post('/', preguntasPost)

router.get('/respondidas', getPreguntasRespondidas)


module.exports = router;