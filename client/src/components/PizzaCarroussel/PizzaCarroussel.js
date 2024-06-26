import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import PizzaModal from "../PizzaModal/PizzaModal";
import "../../css/custom-buttom.css";

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
      style={{ maxWidth: "100%", height: altura, width: largura }}
    />
    <h5 className="my-3">{text}</h5>
    <button className="btn custom-button" onClick={onClick}>
      {buttonText}
    </button>
  </div>
);

const PizzaCarousel = ({ onAddToCart }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    imageSrc: "",
    text: "",
    ingredients: "",
    price: "",
  });

  const handleShowModal = (imageSrc, text, ingredients, price) => {
    setModalInfo({ imageSrc, text, ingredients, price });
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <h1 style={{ textAlign: "left", color: "white" }} className="mt-3 ms-5">
        Nosso sabores
      </h1>
      <Carousel slide={3} className="mt-3 mb-5">
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card
              imageSrc="/pizza-peperoni1.jpg"
              text="Pizza de peperoni"
              buttonText="Detalhes"
              altura="300px"
              largura="300px"
              onClick={() =>
                handleShowModal(
                  "/pizza-peperoni1.jpg",
                  "Pizza de peperoni",
                  "Mussarela, molho de tomate, peperoni, orégano",
                  "R$ 35,00"
                )
              }
            />
            <Card
              imageSrc="/PizzaIMG_2.jpg"
              text="Pizza Margherita"
              buttonText="Detalhes"
              altura="300px"
              largura="300px"
              onClick={() =>
                handleShowModal(
                  "/PizzaIMG_2.jpg",
                  "Pizza Margherita",
                  "Mussarela, molho de tomate, peperoni, orégano",
                  "R$ 35,00"
                )
              }
            />
            <Card
              imageSrc="/PizzaIMG_1.jpg"
              text="Pizza Quatro Queijos"
              buttonText="Detalhes"
              altura="300px"
              largura="300px"
              onClick={() =>
                handleShowModal(
                  "/PizzaIMG_1.jpg",
                  "Pizza Quatro Queijos",
                  "Mussarela, molho de tomate, peperoni, orégano",
                  "R$ 35,00"
                )
              }
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card
              imageSrc="/PizzaIMG_4.jpg"
              text="Pizza Calabresa"
              buttonText="Detalhes"
              altura="300px"
              largura="300px"
              onClick={() =>
                handleShowModal(
                  "/PizzaIMG_4.jpg",
                  "Pizza Calabresa",
                  "Mussarela, molho de tomate, peperoni, orégano",
                  "R$ 35,00"
                )
              }
            />
            <Card
              imageSrc="/PizzaIMG_3.jpg"
              text="Pizza Portuguesa"
              buttonText="Detalhes"
              altura="300px"
              largura="300px"
              onClick={() =>
                handleShowModal(
                  "/PizzaIMG_3.jpg",
                  "Pizza Portuguesa",
                  "Mussarela, molho de tomate, peperoni, orégano",
                  "R$ 35,00"
                )
              }
            />
            <Card
              imageSrc="/PizzaIMG_5.jpg"
              text="Pizza de Frango com Catupiry"
              buttonText="Detalhes"
              altura="300px"
              largura="300px"
              onClick={() =>
                handleShowModal(
                  "/PizzaIMG_5.jpg",
                  "Pizza de Frango com Catupiry",
                  "Mussarela, molho de tomate, peperoni, orégano",
                  "R$ 35,00"
                )
              }
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
        price={modalInfo.price}
        handleAddToCart={onAddToCart}
      />
    </div>
  );
};

export default PizzaCarousel;
