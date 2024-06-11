const pedidoModel = require("../models/pedidoModel");


exports.criarPedido = (req, res) => {
    const { valorTotal, nomeItem, endereco } = req.body;
    pedidoModel.criarPedido(valorTotal, nomeItem, endereco, (err, idPedido) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao criar o pedido." });
        }
        res.status(201).json({ idPedido });
    });
};

exports.listarPedidos = (req, res) => {
    pedidoModel.listarPedidos((err, pedidos) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao listar os pedidos." });
        }
        res.status(200).json({ pedidos });
    });
};

exports.deletarPedido = (req, res) => {
    const pedidoId = req.params.id;
    pedidoModel.deletarPedido(pedidoId, (err, rowsAffected) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao deletar o pedido." });
        }
        if (rowsAffected === 0) {
            return res.status(404).json({ error: "Pedido não encontrado." });
        }
        res.status(200).json({ message: "Pedido deletado com sucesso." });
    });
};

exports.editarPedido = (req, res) => {
    const pedidoId = req.params.id;
    const { valorTotal, nomeItem, endereco } = req.body;
    pedidoModel.editarPedido(pedidoId, valorTotal, nomeItem, endereco, (err, rowsAffected) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao editar o pedido." });
        }
        if (rowsAffected === 0) {
            return res.status(404).json({ error: "Pedido não encontrado." });
        }
        res.status(200).json({ message: "Pedido editado com sucesso." });
    });
};
