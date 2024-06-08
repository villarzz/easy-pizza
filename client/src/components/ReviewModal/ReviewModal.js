import React from "react";
import { Modal, Button } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.min.css';

const ReviewModal = ({ show, handleClose }) => {
  const handleReview = (feedback) => {
    console.log(`Feedback: ${feedback}`);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Avalie sua experiência</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        <Button variant="light" onClick={() => handleReview("like")}>
          <i className="fas fa-thumbs-up" style={{ fontSize: "2rem", color: "green" }}></i>
        </Button>
        <Button variant="light" onClick={() => handleReview("dislike")}>
          <i className="fas fa-thumbs-down" style={{ fontSize: "2rem", color: "red" }}></i>
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default ReviewModal;
