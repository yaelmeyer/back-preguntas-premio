const {Router} = require('express');
const {premioGet, premiosParcialGet} = require('../controllers/premiosController');

const router = Router();

router.get('/', premioGet);

router.get('/parciales', premiosParcialGet)

module.exports = router;