const db = require('../config/database');

exports.registraUsuario = (nome, endereco, telefone, retorno) => {
    const SQL = "INSERT INTO usuario(nome, endereco, telefone) VALUES (?, ?, ?)";
    db.query(SQL, [nome, endereco, telefone], (err, result) => {
        if (err) {
            retorno(err, null);
        } else {
            console.log(result);
            // result.insertId will contain the ID of the newly inserted row
            retorno(null, result.insertId);
        }
    });
};


exports.getAllUsuario = (retorno) => {
    const SQL = "SELECT * FROM usuario";
    db.query(SQL, retorno);
};

exports.deletarUsuario = (usuarioId, retorno) => {
    const SQL = "DELETE FROM usuario WHERE id = ?";
    db.query(SQL, [usuarioId], retorno);
};

exports.editarUsuario = (usuarioId, nome, endereco, telefone, retorno) => {
    const SQL = "UPDATE usuario SET nome = ?, endereco = ?, telefone = ? WHERE id = ?";
    db.query(SQL, [nome, endereco, telefone, usuarioId], retorno);
};
