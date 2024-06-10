const db = require("../config/database");


exports.criarFeedback = (idUsuario, avaliacao, retorno) => {
    const SQL = "INSERT INTO feedback (id_usuario, avaliacao) VALUES (?, ?)";
    db.query(SQL, [idUsuario, avaliacao], (err, result) => {
        if (err) {
            return retorno(err, null);
        }
        const idFeedback = result.insertId;
        retorno(null, idFeedback);
    });
};

exports.listarFeedbacks = (retorno) => {
    const SQL = "SELECT * FROM feedback";
    db.query(SQL, retorno);
};

exports.atualizarFeedback = (idFeedback, idUsuario, avaliacao, retorno) => {
    const SQL = "UPDATE feedback SET id_usuario = ?, avaliacao = ? WHERE id = ?";
    db.query(SQL, [idUsuario, avaliacao, idFeedback], retorno);
};


exports.deletarFeedback = (idFeedback, retorno) => {
    const SQL = "DELETE FROM feedback WHERE id = ?";
    db.query(SQL, [idFeedback], retorno);
};
