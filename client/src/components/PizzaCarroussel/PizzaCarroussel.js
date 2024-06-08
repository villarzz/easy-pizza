import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import PizzaModal from "../PizzaModal/PizzaModal";
import '../../css/custom-buttom.css';

const Card = ({ imageSrc, text, buttonText, altura, largura, onClick }) => (
  <div
    style={{
      textAlign: "center",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      display: "inline-block",
      margin: "0 10px",
      backgroundColor: "#4b4b4b",
      color: "#ffffff",
    }}
  >
    <img
      src={imageSrc}
      alt="Card"
      style={{ maxWidth: "100%", height: altura, width: largura}}
    />
    <h5 className="my-3">{text}</h5>
    <button className="btn custom-button" onClick={onClick}>{buttonText}</button>
  </div>
);

const PizzaCarousel = ({ onAddToCart }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({ imageSrc: "", text: "", ingredients: ""});

  const handleShowModal = (imageSrc, text, ingredients) => {
    setModalInfo({ imageSrc, text, ingredients });
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <h1 style={{ textAlign: "left", color:"white" }} className="mt-3 ms-5">Nosso sabores</h1>
      <Carousel slide={3} className="mt-3 mb-5">
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card
              imageSrc="/pizza-peperoni1.jpg"
              text="Pizza de peperoni"
              buttonText="Detalhes"
              altura="300px"
              largura="300px"
              onClick={() => handleShowModal("/pizza-peperoni1.jpg", "Pizza de peperoni", "Mussarela, molho de tomate, peperoni, orégano")}
            />
            <Card
              imageSrc="https://via.placeholder.com/300"
              text="Pizza Margherita"
              buttonText="Detalhes"
              altura="300px"
              largura="300px"
              onClick={() => handleShowModal("https://via.placeholder.com/300", "Pizza Margherita" , "Mussarela, molho de tomate, peperoni, orégano")}
            />
            <Card
              imageSrc="https://via.placeholder.com/300"
              text="Pizza Quatro Queijos"
              buttonText="Detalhes"
              altura="300px"
              largura="300px"
              onClick={() => handleShowModal("https://via.placeholder.com/300", "Pizza Quatro Queijos" , "Mussarela, molho de tomate, peperoni, orégano")}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card
              imageSrc="https://via.placeholder.com/300"
              text="Pizza Calabresa"
              buttonText="Detalhes"
              altura="300px"
              largura="300px"
              onClick={() => handleShowModal("https://via.placeholder.com/300", "Pizza Calabresa" , "Mussarela, molho de tomate, peperoni, orégano")}
            />
            <Card
              imageSrc="https://via.placeholder.com/300"
              text="Pizza Portuguesa"
              buttonText="Detalhes"
              altura="300px"
              largura="300px"
              onClick={() => handleShowModal("https://via.placeholder.com/300", "Pizza Portuguesa" , "Mussarela, molho de tomate, peperoni, orégano")}
            />
            <Card
              imageSrc="https://via.placeholder.com/300"
              text="Pizza de Frango com Catupiry"
              buttonText="Detalhes"
              altura="300px"
              largura="300px"
              onClick={() => handleShowModal("https://via.placeholder.com/300", "Pizza de Frango com Catupiry" , "Mussarela, molho de tomate, peperoni, orégano")}
            />
          </div>
        </Carousel.Item>
      </Carousel>

      <PizzaModal
        show={showModal}
        handleClose={handleCloseModal}
        imageSrc={modalInfo.imageSrc}
        text={modalInfo.text}
        ingredients={modalInfo.ingredients}
        handleAddToCart={onAddToCart}
      />
    </div>
  );
};

export default PizzaCarousel;
