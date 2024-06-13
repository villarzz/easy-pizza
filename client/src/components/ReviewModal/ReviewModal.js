import React from "react";
import Axios from "axios";
import { Modal, Button } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.min.css';

const ReviewModal = ({ show, handleClose }) => {
  const handleReview = (feedback) => {
    console.log(`Feedback: ${feedback}`);
    Axios.post("http://localhost:3001/feedback/feedbacks", {
      avaliacao: feedback,
    }).then((response) => {
      alert('Feedback enviado com sucesso!')
      window.location.reload();
    });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Avalie sua experiência</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        <Button variant="light" onClick={() => handleReview(1)}>
          <i className="fas fa-thumbs-up" style={{ fontSize: "2rem", color: "green" }}></i>
        </Button>
        <Button variant="light" onClick={() => handleReview(0)}>
          <i className="fas fa-thumbs-down" style={{ fontSize: "2rem", color: "red" }}></i>
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default ReviewModal;
