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
              src={product ? product.image : null}
              className="card-img-top"
              alt={product ? product.title : null}
              title={product ? product.title : null}
            />
          </figure>
          <div className="card-body">
            <p className="card-text">
              <b>Title:</b> {product ? product.title : null}
            </p>
            <p className="card-text">
              <b>Price:</b> $ {product ? product.price : null}
            </p>
          </div>
        </div>
      </div>
    </>
  );

  return <>{renderProduct()}</>;
};
