import React from "react";

import "./styles.css";

export const Loader = () => {
  return (
    <div className="spinner__container">
      <div className="spinner"></div>
      <div className="spinner--txt">
        <span>Loading...</span>
      </div>
    </div>
  );
};
