// components/PizzaCarousel.js
import React from "react";
import { Carousel } from "react-bootstrap";

const Card = ({ imageSrc, text, buttonText, altura, largura }) => (
  <div
    style={{
      textAlign: "center",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      display: "inline-block",
      margin: "0 10px",
      backgroundColor: "white",
    }}
  >
    <img
      src={imageSrc}
      alt="Card"
      style={{ maxWidth: "100%", height: altura, width: largura }}
    />
    <p>{text}</p>
    <button className="btn btn-primary">{buttonText}</button>
  </div>
);

const PizzaCarousel = () => {
  return (
    <div>
      <h1 style={{ textAlign: "left" }} className="mt-3 ms-5">Nosso sabores</h1>
      <Carousel slide={3} className="mt-3 mb-5">
        {" "}
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <Card
              imageSrc="/pizza-peperoni1.jpg"
              text="Pizza de peperoni"
              buttonText="Adicionar ao carrinho"
              altura="300px"
              largura="300px"
            />
            <Card
              imageSrc="https://via.placeholder.com/300"
              text="tlgd"
              buttonText="Adicionar ao carrinho"
              altura="300px"
              largura="300px"
            />
            <Card
              imageSrc="https://via.placeholder.com/300"
              text="tlgd"
              buttonText="Adicionar ao carrinho"
              altura="300px"
              largura="300px"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card
              imageSrc="https://via.placeholder.com/300"
              text="Card 4"
              buttonText="Adicionar ao carrinho"
              altura="300px"
              largura="300px"
            />
            <Card
              imageSrc="https://via.placeholder.com/300"
              text="Card 5"
              buttonText="Adicionar ao carrinho"
              altura="300px"
              largura="300px"
            />
            <Card
              imageSrc="https://via.placeholder.com/300"
              text="Adicionar ao carrinho"
              buttonText="Adicionar ao carrinho"
              altura="300px"
              largura="300px"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default PizzaCarousel;
