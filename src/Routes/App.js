import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
