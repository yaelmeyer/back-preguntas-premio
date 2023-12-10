const {Router} = require('express');
const {usuarioGet, puntosPost, usuarioGetAuth} = require('../controllers/usuarioController');
const router = Router();

router.get('/', usuarioGet);

router.get('/auth', usuarioGetAuth)

router.post('/guardar-puntos', puntosPost)

module.exports = router;