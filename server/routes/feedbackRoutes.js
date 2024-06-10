const express = require('express');
const router = express.Router();
const feedbackController = require('../controller/feedbackController');


router.post('/feedbacks', feedbackController.criarFeedback);
router.get('/feedbacks', feedbackController.listarFeedbacks);
router.put('/feedbacks/:id', feedbackController.atualizarFeedback);
router.delete('/feedbacks/:id', feedbackController.deletarFeedback);

module.exports = router;
