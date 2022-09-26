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
              <MdLocationPin style={{ color: "red" }} className="iconFooter" />
              <p style={{ marginLeft: "8px" }}>
                Cra 19 N # 50 - 83
                <br />
                Armenia, Colombia
              </p>
            </div>

            <div className="telContainer">
              <MdOutlineSmartphone className="iconFooter" />
              <p style={{ marginLeft: "8px" }}>+57 312 2574930 </p>
            </div>

            <div className="emailContainer">
              <MdOutlineEmail className="iconFooter" />
              <a
                style={{ marginLeft: "8px" }}
                href="mailto:contacto@storeapp.org"
              >
                storeapp@mail.org
              </a>
            </div>
          </div>

          <div className="col-md-6 rigthContent">
            <h5 className="footerTitle">
              <b>Social Networks</b>
            </h5>

            <div className="socialBtnContainer">
              <div style={{ marginRight: "8px" }}>
                <SocialIcon
                  className="iconConfig"
                  url="https://instagram.com"
                />
              </div>
              <div>
                <SocialIcon className="iconConfig" url="https://facebook.com" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </footer>
  );
};
