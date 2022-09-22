import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetAllProducts } from "../../Actions/productsInfo";

export const ListProduct = () => {
  const dispatch = useDispatch();
  const productsInfo = useSelector((state) => state.productsInfo.data);

  useEffect(() => {
    dispatch(GetAllProducts());
  }, []);

  return (
    <>
      <h3>List of Products</h3>
      {productsInfo &&
        productsInfo.length > 0 &&
        productsInfo.map((item) => {
          return (
            <div key={item.id}>
              <div
                className="card text-bg-dark border-light"
                style={{ width: "18rem" }}
              >
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.category}
                />
                <div className="card-body">
                  <p className="card-text">
                    <b>Price:</b> $ {item.price}
                  </p>
                  <p className="card-text">{item.title}</p>
                </div>
              </div>

              <br />
            </div>
          );
        })}
    </>
  );
};
