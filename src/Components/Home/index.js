import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetProductsLimited } from "../../Actions/productsInfo";

export const Home = () => {
  const dispatch = useDispatch();
  const productsInfo = useSelector((state) => state.productsInfo.data);

  useEffect(() => {
    dispatch(GetProductsLimited());
  }, []);

  return (
    <>
      <br />
      <section>
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/453/533/non_2x/big-sale-discount-banner-template-promotion-illustration-free-vector.jpg"
          alt="Descuentos"
          height={300}
        />
      </section>
      <br />

      <section>
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
                    title={item.title}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <b>Price:</b> $ {item.price}
                    </p>
                    <p className="card-text">
                      <b>Description:</b> {item.description}
                    </p>
                    <p className="card-text">
                      <b>Rating:</b>
                      <br />
                      Rate: {item.rating.rate}
                      <br />
                      Count: {item.rating.count}
                    </p>
                  </div>
                </div>

                <br />
              </div>
            );
          })}
      </section>
      <br />

      <section>
        <b>¿Quiénes somos?</b>
        <br />

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          labore voluptatibus atque repellat doloribus ducimus corporis. Maxime
          rem officia, repellat accusantium quae, provident, facere tenetur cum
          quod nisi consequuntur et.
        </p>
      </section>
      <br />
    </>
  );
};
