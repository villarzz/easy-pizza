const express = require('express');
const router = express.Router();
const itemPedidoCtlr = require("../controller/itemPedidoController");

router.post('/criarItem', itemPedidoCtlr.criarItem);
router.get('/getAllItem', itemPedidoCtlr.getAllItem);
router.delete('/deletarItem/:id', itemPedidoCtlr.deletarItem);
router.put('/editarItem/:id', itemPedidoCtlr.editarItem);

module.exports = router;
