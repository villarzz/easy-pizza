const Pedido = require('../models/pedidoModel');

exports.criarPedido = (req, res) => {
    const { valorTotal, idUsuario, idItemPedido } = req.body;
    
    Pedido.criarPedido(valorTotal, idUsuario, idItemPedido, (err, idPedido) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao criar pedido' });
        }
        res.status(201).json({ message: 'Pedido criado com sucesso', idPedido });
    });
};

exports.listarPedidos = (req, res) => {
    Pedido.listarPedidos((err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao listar pedidos' });
        }
        res.json(result);
    });
};

exports.deletarPedido = (req, res) => {
    const pedidoId = req.params.id;
    
    Pedido.deletarPedido(pedidoId, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao excluir pedido' });
        }
        res.json({ message: 'Pedido excluído com sucesso' });
    });
};

exports.editarPedido = (req, res) => {
    const pedidoId = req.params.id;
    const { valorTotal, idUsuario, idItemPedido } = req.body;
    
    Pedido.editarPedido(pedidoId, valorTotal, idUsuario, idItemPedido, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao editar pedido' });
        }
        res.json({ message: 'Pedido editado com sucesso' });
    });
};
