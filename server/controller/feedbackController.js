const feedbackModel = require("../models/feedbackModel");


exports.criarFeedback = (req, res) => {
    const { avaliacao } = req.body;
    feedbackModel.criarFeedback(avaliacao, (err, idFeedback) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao criar o feedback." });
        }
        res.status(201).json({ idFeedback });
    });
};

exports.listarFeedbacks = (req, res) => {
    feedbackModel.listarFeedbacks((err, feedbacks) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao listar os feedbacks." });
        }
        res.status(200).json({ feedbacks });
    });
};

exports.atualizarFeedback = (req, res) => {
    const idFeedback = req.params.id;
    const { avaliacao } = req.body;
    feedbackModel.atualizarFeedback(idFeedback, avaliacao, (err, rowsAffected) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao atualizar o feedback." });
        }
        if (rowsAffected === 0) {
            return res.status(404).json({ error: "Feedback não encontrado." });
        }
        res.status(200).json({ message: "Feedback atualizado com sucesso." });
    });
};

exports.deletarFeedback = (req, res) => {
    const idFeedback = req.params.id;
    feedbackModel.deletarFeedback(idFeedback, (err, rowsAffected) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao deletar o feedback." });
        }
        if (rowsAffected === 0) {
            return res.status(404).json({ error: "Feedback não encontrado." });
        }
        res.status(200).json({ message: "Feedback deletado com sucesso." });
    });
};
