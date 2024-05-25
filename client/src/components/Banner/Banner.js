import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img
        src={process.env.PUBLIC_URL + "/pizza-banner1.jpg"}
        alt="Banner"
        className="banner-image"
      />
      <div className="text-overlay">
        <h2>Easy pizza</h2>
        <p>
          Peça sua pizza favorita com facilidade e rapidez na nossa pizzaria.
          Experimente a simplicidade sem abrir mão do sabor incrível. Faça seu
          pedido agora!
        </p>
      </div>
    </div>
  );
}

export default Banner;
