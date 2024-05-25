/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import "./App.css";
import './styles.css';
import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import PizzaCarousel from "./components/PizzaCarroussel/PizzaCarroussel";

function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <PizzaCarousel />
    </div>
  );
}

export default App;
