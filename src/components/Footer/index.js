import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <section className="footer container">
      <p>© 2022 ChainScript.dev. All Rights Reserved.</p>
      <div className="social">
        <a href="#">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="https://mobile.twitter.com/Chainscript">
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="#">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/chainscript-labs-pvt-ltd/">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCabklVnIBEJM8hBhFDnXg3w">
          <i className="bx bxl-youtube"></i>
        </a>
      </div>
    </section>
  );
};

export default Footer;
