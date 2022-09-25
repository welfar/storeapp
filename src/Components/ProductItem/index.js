import React from "react";

import "./style.css";

export const ProductItem = ({ product }) => {
  const renderProduct = () => (
    <>
      <div className="productContainer">
        <div
          className="card text-bg-dark border-light "
          style={{ width: "18rem" }}
        >
          <figure>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
              title={product.title}
            />
          </figure>
          <div className="card-body">
            <p className="card-text">
              <b>Title:</b> {product.title}
            </p>
            <br />
            <p className="card-text">
              <b>Price:</b> $ {product.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );

  return <>{renderProduct()}</>;
};
