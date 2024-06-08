/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import "./App.css";
import './styles.css';
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import PizzaCarousel from "./components/PizzaCarroussel/PizzaCarroussel";
import ReviewModal from "./components/ReviewModal/ReviewModal";

function App() {
  const [cart, setCart] = useState([]);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleShowReviewModal = () => setShowReviewModal(true);
  const handleCloseReviewModal = () => setShowReviewModal(false);

  return (
    <div className='App'>
      <Header cartItems={cart} handleShowReviewModal={handleShowReviewModal} />
      <Banner />
      <PizzaCarousel onAddToCart={handleAddToCart} />
      <ReviewModal show={showReviewModal} handleClose={handleCloseReviewModal} />
    </div>
  );
}

export default App;
