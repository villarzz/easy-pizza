const express = require('express');
const router = express.Router();
const pedidoController = require('../controller/pedidoController');

router.post('/pedidos', pedidoController.criarPedido);
router.get('/pedidos', pedidoController.listarPedidos);
router.delete('/pedidos/:id', pedidoController.deletarPedido);
router.put('/pedidos/:id', pedidoController.editarPedido);

module.exports = router;
