import React from "react";
import { Link } from "react-router-dom";
function Footer({ isLocationFooter = true }) {
  const socialItems = [
    {
      name: "twitter",
      logo: <i className="ri-twitter-fill col-1 social-icon"></i>,
      url: "https://twitter.com/CodeNexus69",
      key: 1,
    },
    {
      name: "linkedin",
      logo: <i className="ri-linkedin-box-fill col-1 social-icon"></i>,
      url: "#",
      key: 2,
    },
  ];
  return (
    <div
      className="footer-component"
      style={{ flexDirection: isLocationFooter ? "row" : "column" }}
    >
      <div className="footer-logo">Find me on</div>
      <div className="footer-items">
        {socialItems.map((m, i) => {
          return (
            <Link to={m.url} key={i} target="_blank">
              <span className="social-icon" key={i}>
                {m.logo}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="footer-username">
        @arpitj007<i className="ri-github-fill"></i>
      </div>
    </div>
  );
}

export default Footer;
