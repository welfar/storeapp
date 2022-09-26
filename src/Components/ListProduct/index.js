import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { GetAllProducts } from "../../Actions/productsInfoActions";
import { ProductItem } from "../ProductItem";
import { Loader } from "../Loader";

export const ListProduct = () => {
  const dispatch = useDispatch();
  const productsInfo = useSelector((state) => state.productsInfo.data);
  const isLoading = useSelector((state) => state.Ui.isLoading);

  useEffect(() => {
    dispatch(GetAllProducts());
  }, []);

  return (
    <>
      <p className="text-center titleConfig">List of Products</p>
      <div className="listProductBody">
        {!isLoading ? (
          productsInfo &&
          productsInfo.length > 0 &&
          productsInfo.map((product) => {
            return (
              <div className="linkConfig" key={product.id}>
                <Link to={`/details/${product.id}`}>
                  Go to Details
                  <ProductItem product={product} />
                </Link>
              </div>
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};
