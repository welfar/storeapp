import React from "react";
import {
  MdLocationPin,
  MdOutlineEmail,
  MdOutlineSmartphone,
} from "react-icons/md";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>
              <b>Store App</b>
            </h3>

            <div className="row">
              <MdLocationPin style={{ color: "red" }} size={32} />
              <p>
                Carrera 19 N # 50 - 83
                <br />
                Armenia, Colombia
              </p>
            </div>

            <div className="i">
              <MdOutlineSmartphone size={32} />
              <p>Colombia +57 312 2574930 - (6)7475086</p>
            </div>

            <div className="i">
              <MdOutlineEmail size={32} />
            </div>
            <a href="mailto:contacto@storeapp.org">contacto@storeapp.org</a>
          </div>

          <div className="col-md-6">
            <h5>
              <b>Social Networks</b>
            </h5>
            <br />
            <SocialIcon url="https://instagram.com" />
            <SocialIcon url="https://facebook.com" />
          </div>
        </div>
      </div>
      <br />
    </footer>
  );
};
