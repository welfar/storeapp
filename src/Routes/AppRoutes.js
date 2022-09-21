import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomeView } from "../Pages/HomeView";
import { NotFound } from "../Pages/NotFound";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomeView />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
