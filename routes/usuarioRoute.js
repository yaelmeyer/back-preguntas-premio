const {Router} = require('express');
const {usuarioGet, puntosPost, usuarioGetAuth, terminarDia} = require('../controllers/usuarioController');
const router = Router();

router.get('/', usuarioGet);

router.get('/auth', usuarioGetAuth)

router.post('/guardar-puntos', puntosPost)

router.post('/terminarDia', terminarDia)

module.exports = router;