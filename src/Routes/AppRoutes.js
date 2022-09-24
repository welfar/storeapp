import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomeView } from "../Pages/HomeView";
import { ListProductsView } from "../Pages/ListProductsView";
import { ProductDetailView } from "../Pages/ProductDetailView";
import { NotFound } from "../Pages/NotFound";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomeView />} />
        <Route exact path="/list-of-products" element={<ListProductsView />} />
        <Route
          exact
          path="/details/:productId"
          element={<ProductDetailView />}
        />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
