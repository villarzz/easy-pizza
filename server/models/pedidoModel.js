const db = require("../config/database");

exports.criarPedido = (valorTotal, idUsuario, idItemPedido, retorno) => {
    const SQL = "INSERT INTO pedido (valorTotal, id_usuario, id_itemPedido) VALUES (?, ?, ?)";
    db.query(SQL, [valorTotal, idUsuario, idItemPedido], (err, result) => {
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
               usuario.nome AS usuarioNome, usuario.endereco, usuario.telefone, 
               itemPedido.nome AS itemNome, itemPedido.descricao, itemPedido.valor
        FROM pedido
        JOIN usuario ON pedido.id_usuario = usuario.id
        JOIN itemPedido ON pedido.id_itemPedido = itemPedido.id
    `;
    db.query(SQL, retorno);
};

exports.deletarPedido = (pedidoId, retorno) => {
    const SQL = "DELETE FROM pedido WHERE id = ?";
    db.query(SQL, [pedidoId], retorno);
};

exports.editarPedido = (pedidoId, valorTotal, idUsuario, idItemPedido, retorno) => {
    const SQL = "UPDATE pedido SET valorTotal = ?, id_usuario = ?, id_itemPedido = ? WHERE id = ?";
    db.query(SQL, [valorTotal, idUsuario, idItemPedido, pedidoId], retorno);
};
