import React, { useState } from "react";
import Axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";

const LoginModal = ({ show, handleClose }) => {
  const [telefone, setTelefone] = useState("");
  const [name, setName] = useState("");
  const [endereco, setEndereco] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    Axios.post("http://localhost:3001/usuario/registraUsuario", {
      nome: name,
      endereco: endereco,
      telefone: telefone,
    }).then((response) => {
      alert('Usuário cadastrado com sucesso!')
    })
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Cadastro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <h5>Para se cadastrar, preencha os campos abaixo:</h5>
        <p>OBS: não é necessário realizar o cadastro para realizar um pedido</p>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              type="text"
              placeholder="Endereço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
