/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import "./App.css";
import './styles.css';
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import PizzaCarousel from "./components/PizzaCarroussel/PizzaCarroussel";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className='App'>
      <Header cartItems={cart} />
      <Banner />
      <PizzaCarousel onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
