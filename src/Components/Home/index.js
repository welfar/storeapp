import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetProductsLimited } from "../../Actions/productsInfoActions";
import { Loader } from "../Loader";

export const Home = () => {
  const dispatch = useDispatch();
  const productsInfo = useSelector((state) => state.productsInfo.data);
  const isLoading = useSelector((state) => state.Ui.isLoading);

  useEffect(() => {
    dispatch(GetProductsLimited());
  }, []);

  const renderLimitList = () => (
    <>
      {productsInfo &&
        productsInfo.length > 0 &&
        productsInfo.map((item) => {
          return (
            <div key={item.id}>
              <div className="cardConfig">
                <figure>
                  <img
                    src={item.image}
                    className="cardImgTop"
                    alt={item.title}
                    title={item.title}
                  />
                </figure>
                <div className="textContent">
                  <p>
                    <b>Category:</b> {item.category}
                  </p>
                  <br />
                  <p>
                    <b>Title:</b> {item.title}
                  </p>
                  <br />
                  <p>
                    <b>Price:</b> $ {item.price}
                  </p>
                </div>
              </div>

              <br />
            </div>
          );
        })}
    </>
  );

  return (
    <div className="bodyContainer">
      <br />
      <section>
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/453/533/non_2x/big-sale-discount-banner-template-promotion-illustration-free-vector.jpg"
          alt="Descuentos"
          className="imgBannerContainer"
        />
      </section>
      <br />

      {!isLoading ? (
        <section className="homeProducts">{renderLimitList()}</section>
      ) : (
        <Loader />
      )}
      <br />

      <section className="aboutContainer">
        <b>¿About us?</b>
        <p className="textAlign">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          labore voluptatibus atque repellat doloribus ducimus corporis. Maxime
          rem officia, repellat accusantium quae, provident, facere tenetur cum
          quod nisi consequuntur et.
        </p>
      </section>
      <br />
    </div>
  );
};
