const express = require('express');
const router = express.Router();
const usuarioCtlr = require('../controller/usuarioController');

router.post('/registraUsuario', usuarioCtlr.registraUsuario);
router.get('/getAllUsuario', usuarioCtlr.getAllUsuario);
router.delete('/deletarUsuario/:id', usuarioCtlr.deletarUsuario);
router.put('/editarUsuario/:id', usuarioCtlr.editarUsuario);

module.exports = router;
