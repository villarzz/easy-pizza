import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../../css/custom-buttom.css";

const PizzaModal = ({ show, handleClose, imageSrc, text, ingredients }) => (
  <Modal show={show} onHide={handleClose} centered style={{color:"white"}}>
    <Modal.Header closeButton className="modal-custom-bg">
      <Modal.Title>{text}</Modal.Title>
    </Modal.Header>
    <Modal.Body className="modal-custom-bg">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img
          src={imageSrc}
          alt={text}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <h4 style={{ textAlign: "center" }} className="my-3">{text}</h4>
      <p style={{ textAlign: "center" }}>Ingredientes: {ingredients}</p>
    </Modal.Body>
    <Modal.Footer className="modal-custom-bg">
      <Button variant="secondary" onClick={handleClose}>
        Fechar
      </Button>
      <button className="custom-button">
        Adicionar ao carrinho
      </button>
    </Modal.Footer>
  </Modal>
);

export default PizzaModal;

