import React from 'react'
import "./product.scss";
import formatPrice from "../../utils/format";


function Product({ picture, title, price, category, goDetail }) {
  return (
    <div className="product-container">
      <div className="product-img" id="contenedor">
        <img src={picture} alt={title} />
      </div>

      <div className="product-detail" id="detalle">
        <div className="product-price">
          <p>
            {formatPrice(price)}
          </p>
          <p className="product-title">{title}</p>
        </div>
      </div>

      <div className="product-brand">
        <p>{category }</p>
      </div>
    </div>
  );
}

export default Product