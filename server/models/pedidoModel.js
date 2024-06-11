const db = require("../config/database");

exports.criarPedido = (valorTotal, nomeItem, endereco, retorno) => {
    const SQL = "INSERT INTO pedido (valorTotal, nomeItem, endereco) VALUES (?, ?, ?)";
    db.query(SQL, [valorTotal, nomeItem, endereco], (err, result) => {
        if (err) {
            return retorno(err, null);
        }
        const idPedido = result.insertId;
        retorno(null, idPedido);
    });
};

exports.listarPedidos = (retorno) => {
    const SQL = `
        SELECT pedido.id, pedido.valorTotal, pedido.dataPedido, 
               usuario.nome AS usuarioNome, usuario.endereco AS usuarioEndereco, usuario.telefone, 
               itemPedido.nome AS itemNome, itemPedido.descricao, itemPedido.valor
        FROM pedido
        JOIN usuario ON pedido.id_usuario = usuario.id
        JOIN itemPedido ON pedido.id_itemPedido = itemPedido.id
    `;
    db.query(SQL, (err, result) => {
        if (err) {
            return retorno(err, null);
        }
        retorno(null, result);
    });
};

exports.deletarPedido = (pedidoId, retorno) => {
    const SQL = "DELETE FROM pedido WHERE id = ?";
    db.query(SQL, [pedidoId], (err, result) => {
        if (err) {
            return retorno(err, null);
        }
        retorno(null, result.affectedRows);
    });
};

exports.editarPedido = (pedidoId, valorTotal, nomeItem, endereco, retorno) => {
    const SQL = "UPDATE pedido SET valorTotal = ?, nomeItem = ?, endereco = ? WHERE id = ?";
    db.query(SQL, [valorTotal, nomeItem, endereco, pedidoId], (err, result) => {
        if (err) {
            return retorno(err, null);
        }
        retorno(null, result.affectedRows);
    });
};
