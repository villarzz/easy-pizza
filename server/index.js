const express = require("express");
const app = express();
const cors = require("cors");
const itemPedidoRoutes = require('./routes/itemPedidoRoutes'); 
const usuarioRoutes = require('./routes/usuarioRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes'); 
const feedbackRoutes = require('./routes/feedbackRoutes');

app.use(cors());
app.use(express.json());
app.use('/itemPedido', itemPedidoRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/pedido', pedidoRoutes);
app.use('/feedback', feedbackRoutes);

app.get('/', (req, res) => {
    res.send("Bem vindo!!!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
