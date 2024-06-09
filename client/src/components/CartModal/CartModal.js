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
      endereco: address,
      metodoPagamento: paymentMethod,
      itens: cartItems.map(item => item.text)
    };
    console.log(order);
    handleClose();
    handleShowReviewModal();
  };

  return (
    <Modal show={show} onHide={handleClose} centered style={{color:'white'}}>
      <Modal.Header closeButton className="modal-custom-bg">
        <Modal.Title>Carrinho</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-custom-bg">
        {cartItems.length === 0 ? (
          <p>O carrinho está vazio</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <div>
                  <img src={item.imageSrc} alt={item.text} style={{ width: "50px", marginRight: "10px" }} />
                  {item.text}
                </div>
                <p>Ingredientes: {item.ingredients}</p>
              </li>
            ))}
          </ul>
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
