import React from "react";
import {
  MdLocationPin,
  MdOutlineEmail,
  MdOutlineSmartphone,
} from "react-icons/md";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
  return (
    <footer style={{ color: "#fff" }} className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="footerTitle">
              <b>Store App</b>
            </h3>

            <div className="addresContainer">
              <MdLocationPin style={{ color: "red" }} size={32} />
              <p style={{ marginLeft: "8px" }}>
                Carrera 19 N # 50 - 83
                <br />
                Armenia, Colombia
              </p>
            </div>

            <div className="telContainer">
              <MdOutlineSmartphone size={32} />
              <p style={{ marginLeft: "8px" }}>+57 312 2574930 - (6)7475086</p>
            </div>

            <div className="emailContainer">
              <MdOutlineEmail size={32} />
              <a
                style={{ marginLeft: "8px" }}
                href="mailto:contacto@storeapp.org"
              >
                contacto@storeapp.org
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <h5 className="footerTitle">
              <b>Social Networks</b>
            </h5>

            <div className="socialBtnContainer">
              <div style={{ marginRight: "8px" }}>
                <SocialIcon url="https://instagram.com" />
              </div>
              <div>
                <SocialIcon url="https://facebook.com" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </footer>
  );
};
