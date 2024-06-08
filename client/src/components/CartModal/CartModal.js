// CartModal.js
import React from "react";
import { Modal, Button } from "react-bootstrap";

const CartModal = ({ show, handleClose, cartItems }) => (
  <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>Carrinho</Modal.Title>
    </Modal.Header>
    <Modal.Body>
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
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Fechar
      </Button>
    </Modal.Footer>
  </Modal>
);

export default CartModal;
