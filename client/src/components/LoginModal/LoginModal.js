import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";

const LoginModal = ({ show, handleClose }) => {
  const [telefone, setTelefone] = useState("");
  const [name, setName] = useState("");
  const [endereco, setEndereco] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Check for userId in localStorage on component mount
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleLogin = () => {
    Axios.post("http://localhost:3001/usuario/registraUsuario", {
      nome: name,
      endereco: endereco,
      telefone: telefone,
    })
      .then((response) => {
        console.log(response.data);
        if (response.data && response.data.userId) {
          // Save the user ID to localStorage
          localStorage.setItem("userId", response.data.userId);
          setUserId(response.data.userId); // Update state with new userId
          alert("Usuário cadastrado com sucesso!");
        } else {
          alert("Erro ao cadastrar o usuário.");
        }
      })
      .catch((error) => {
        console.error("There was an error registering the user!", error);
        alert("Erro ao cadastrar o usuário.");
      });
    handleClose();
  };

  const handleDeleteAccount = () => {
    Axios.delete(`http://localhost:3001/usuario/deletarUsuario/${userId}`)
      .then(() => {
        localStorage.removeItem("userId");
        setUserId(null); // Clear userId from state
        alert("Conta deletada com sucesso!");
      })
      .catch((error) => {
        console.error("There was an error deleting the user!", error);
        alert("Erro ao deletar a conta.");
      });
    handleClose();
  };
  
  

  return (
    <Modal show={show} onHide={handleClose} centered>
      {userId ? (
        <>
          <Modal.Header closeButton>
            <Modal.Title>Conta de Usuário</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Você já está cadastrado. Deseja deletar sua conta?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDeleteAccount}>
              Deletar Conta
            </Button>
          </Modal.Footer>
        </>
      ) : (
        <>
          <Modal.Header closeButton>
            <Modal.Title>Cadastro</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <h5>Para se cadastrar, preencha os campos abaixo:</h5>
              <p>
                OBS: não é necessário realizar o cadastro para realizar um pedido
              </p>
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
        </>
      )}
    </Modal>
  );
};

export default LoginModal;
