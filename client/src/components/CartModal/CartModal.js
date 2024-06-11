import Axios from "axios";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CartModal = ({ show, handleClose, cartItems, handleShowReviewModal }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [address, setAddress] = useState("");

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleConfirmOrder = () => {
    const order = {
      valorTotal: calculateTotal(),
      itens: cartItems.map(item => item.text),
      endereco: address
    };
    console.log(order);
    order.itens.forEach(item => {
      Axios.post("http://localhost:3001/pedido/pedidos", {
        valorTotal: order.valorTotal,
        nomeItem: order.itens[0],
        endereco: order.endereco,
      }).then((response) => {
        alert('Pedido realizado com sucesso!')
      })
    });
    handleClose();
    handleShowReviewModal();
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
      return total + price;
    }, 0).toFixed(2);
  };

  return (
    <Modal show={show} onHide={handleClose} centered style={{ color: 'white' }}>
      <Modal.Header closeButton className="modal-custom-bg">
        <Modal.Title>Carrinho</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-custom-bg">
        {cartItems.length === 0 ? (
          <p>O carrinho está vazio</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={item.imageSrc} alt={item.text} style={{ width: "50px", marginRight: "10px" }} />
                    <div>
                      <p>{item.text}</p>
                      <p>Ingredientes: {item.ingredients}</p>
                      <p>Preço: {item.price}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <h5>Total: R$ {calculateTotal()}</h5>
          </>
        )}
        {isCheckout && (
          <Form>
            <Form.Group controlId="formPaymentMethod">
              <Form.Label>Forma de Pagamento</Form.Label>
              <Form.Control as="select" value={paymentMethod} onChange={handlePaymentChange}>
                <option value="">Selecione</option>
                <option value="credit">Cartão de Crédito</option>
                <option value="debit">Cartão de Débito</option>
                <option value="cash">Dinheiro</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Endereço</Form.Label>
              <Form.Control as="textarea" rows={3} value={address} onChange={handleAddressChange} />
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer className="modal-custom-bg">
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        {!isCheckout ? (
          <Button variant="primary" onClick={handleCheckout}>
            Finalizar Pedido
          </Button>
        ) : (
          <Button variant="primary" onClick={handleConfirmOrder}>
            Confirmar
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
