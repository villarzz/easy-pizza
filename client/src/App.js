/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import "./App.css";
import Header from './components/Header';
import React, { useState } from "react";
import './styles.css';
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
    </div>
  );
}

export default App;
