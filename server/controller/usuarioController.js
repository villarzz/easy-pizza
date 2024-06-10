const Usuario = require('../models/usuarioModel');

exports.registraUsuario = (req, res) => {
    const { nome, endereco, telefone } = req.body;
    Usuario.registraUsuario(nome, endereco, telefone, (err, result) => {
        if (err) {
            console.error(err);
            res.status(504).json({ error: "Erro ao registrar o usuário" });
        } else {
            res.json({ message: "Usuário registrado" });
        }
    });
};

exports.getAllUsuario = (req, res) => {
    Usuario.getAllUsuario((err, result) => {
        if (err) {
            console.error(err);
            res.status(505).json({ error: "Erro ao listar Usuário" });
        } else {
            res.json(result);
        }
    });
};

exports.deletarUsuario = (req, res) => {
    const usuarioId = req.params.id;

    Usuario.deletarUsuario(usuarioId, (err, result) => {
        if (err) {
            console.error(err);
            res.status(506).json({ error: "Erro ao excluir o usuário" });
        } else {
            res.json({ message: "Usuário excluído" });
        }
    });
};

exports.editarUsuario = (req, res) => {
    const usuarioId = req.params.id;
    const { nome, endereco, telefone } = req.body;

    Usuario.editarUsuario(usuarioId, nome, endereco, telefone, (err, result) => {
        if (err) {
            console.error(err);
            res.status(507).json({ error: "Usuário não editado" });
        } else {
            res.json({ message: "Usuário editado com sucesso" });
        }
    });
};
