const Feedback = require('../models/feedbackModel');


exports.criarFeedback = (req, res) => {
    const { id_usuario, avaliacao } = req.body;
    
    Feedback.criarFeedback(id_usuario, avaliacao, (err, idFeedback) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao criar feedback." });
        }
        res.status(201).json({ id: idFeedback, message: "Feedback criado com sucesso." });
    });
};

exports.listarFeedbacks = (req, res) => {
    Feedback.listarFeedbacks((err, feedbacks) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao listar feedbacks." });
        }
        res.status(200).json(feedbacks);
    });
};

exports.atualizarFeedback = (req, res) => {
    const idFeedback = req.params.id;
    const { id_usuario, avaliacao } = req.body;

    Feedback.atualizarFeedback(idFeedback, id_usuario, avaliacao, (err) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao atualizar feedback." });
        }
        res.status(200).json({ message: "Feedback atualizado com sucesso." });
    });
};

exports.deletarFeedback = (req, res) => {
    const idFeedback = req.params.id;

    Feedback.deletarFeedback(idFeedback, (err) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao deletar feedback." });
        }
        res.status(200).json({ message: "Feedback deletado com sucesso." });
    });
};
