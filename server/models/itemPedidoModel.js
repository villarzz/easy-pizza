const db = require("../config/database");

exports.criarItem = (nome, descricao, valor, retorno) => {
    const SQL = "INSERT INTO itemPedido (nome, descricao, valor) VALUES (?, ?, ?)";
    db.query(SQL, [nome, descricao, valor], retorno);
};

exports.getAllItem = (retorno) => {
    const SQL = "SELECT * FROM itemPedido";
    db.query(SQL, retorno);
};

exports.deletarItem = (itemPedidoId, retorno) => {
    const SQL = "DELETE FROM itemPedido WHERE id = ?";
    db.query(SQL, [itemPedidoId], retorno);
};

exports.editarItem = (itemPedidoId, nome, descricao, valor, retorno) => {
    const SQL = "UPDATE itemPedido SET nome = ?, descricao = ?, valor = ? WHERE id = ?";
    db.query(SQL, [nome, descricao, valor, itemPedidoId], retorno);
};
