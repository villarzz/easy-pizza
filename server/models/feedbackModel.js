const db = require("../config/database");


exports.criarFeedback = (avaliacao, retorno) => {
    const SQL = "INSERT INTO feedback (avaliacao) VALUES (?)";
    db.query(SQL, [avaliacao], (err, result) => {
        if (err) {
            return retorno(err, null);
        }
        const idFeedback = result.insertId;
        retorno(null, idFeedback);
    });
};

exports.listarFeedbacks = (retorno) => {
    const SQL = "SELECT * FROM feedback";
    db.query(SQL, (err, result) => {
        if (err) {
            return retorno(err, null);
        }
        retorno(null, result);
    });
};

exports.atualizarFeedback = (idFeedback, avaliacao, retorno) => {
    const SQL = "UPDATE feedback SET avaliacao = ? WHERE id = ?";
    db.query(SQL, [avaliacao, idFeedback], retorno);
};


exports.deletarFeedback = (idFeedback, retorno) => {
    const SQL = "DELETE FROM feedback WHERE id = ?";
    db.query(SQL, [idFeedback], retorno);
};
