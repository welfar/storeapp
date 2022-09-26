import React from "react";

export const ProductItem = ({ product }) => {
  const renderProduct = () => (
    <div className="productContainer">
      <div className="cardConfig">
        <figure>
          <img
            src={product.image}
            className="cardImgTop"
            alt={product.title}
            title={product.title}
          />
        </figure>
        <div className="textContent textContent-productItem">
          <p>
            <b>Title:</b> {product.title}
          </p>
          <br />
          <p>
            <b>Price:</b> $ {product.price}
          </p>
        </div>
      </div>
    </div>
  );

  return <>{renderProduct()}</>;
};
