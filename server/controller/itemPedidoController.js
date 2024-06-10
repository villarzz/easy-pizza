const Item = require("../models/itemPedidoModel");

exports.criarItem = (req, res) => {
    const { nome, descricao, valor } = req.body;
    Item.criarItem(nome, descricao, valor, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Erro ao criar item" });
        } else {
            res.json({ message: "Item criado com sucesso" });
        }
    });
};

exports.getAllItem = (req, res) => {
    Item.getAllItem((err, result) => {
        if (err) {
            console.error(err);
            res.status(501).json({ error: "Erro ao listar item" });
        } else {
            res.json(result);
        }
    });
};

exports.deletarItem = (req, res) => {
    const itemPedidoId = req.params.id;
    Item.deletarItem(itemPedidoId, (err, result) => {
        if (err) {
            console.error(err);
            res.status(502).json({ error: "O item não foi deletado" });
        } else {
            res.json({ message: "Item excluído com sucesso" });
        }
    });
};

exports.editarItem = (req, res) => {
    const itemPedidoId = req.params.id;
    const { nome, descricao, valor } = req.body;
    Item.editarItem(itemPedidoId, nome, descricao, valor, (err, result) => {
        if (err) {
            console.error(err);
            res.status(503).json({ error: "Erro ao editar item" });
        } else {
            res.json({ message: "Item editado com sucesso" });
        }
    });
};
