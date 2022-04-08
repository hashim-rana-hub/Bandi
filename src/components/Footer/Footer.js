import React from "react";
import logo from "../images/footer-logo.gif";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <div className="footerMain">
      <div className="footerlogo">
        <img src={logo} />

        <h1>Swap ’til you drop</h1>
        <div className="social">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60.553"
              height="71.568"
              viewBox="0 0 60.553 71.568"
            >
              <path
                id="Union_1"
                data-name="Union 1"
                d="M7.287,3.318C2.815,7.113,0,15.645,0,33.179,0,44.551,3.37,55.457,11.772,61.616a68.977,68.977,0,0,0,13.843,7.2c-.56-3.046-1.063-6.349-1.516-9.936a33.911,33.911,0,0,1-.291-4.214,33.911,33.911,0,0,0,.291,4.214c.454,3.588.957,6.89,1.516,9.936a37.343,37.343,0,0,0,12.518,2.75c10.149,0,18.216-10.3,21.187-24.63A61.088,61.088,0,0,0,60.553,34.6C60.553,9.008,35.883,0,19.621,0,14.587,0,10.657.467,7.287,3.318ZM37.758,42.571h0Zm-.026,0a28.031,28.031,0,0,0-3.406.194A28.011,28.011,0,0,1,37.732,42.571Zm21.09,4.192.154.054Z"
                transform="translate(60.553 71.568) rotate(180)"
                fill="#fffbf2"
              ></path>
              <InstagramIcon className="insta" />
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60.553"
              height="71.568"
              viewBox="0 0 60.553 71.568"
            >
              <path
                id="Union_1"
                data-name="Union 1"
                d="M7.287,68.25C2.815,64.455,0,55.924,0,38.389,0,27.017,3.37,16.111,11.772,9.952a68.977,68.977,0,0,1,13.843-7.2C25.055,5.8,24.552,9.1,24.1,12.687a33.91,33.91,0,0,0-.291,4.214,33.91,33.91,0,0,1,.291-4.214c.454-3.588.957-6.89,1.516-9.936A37.343,37.343,0,0,1,38.133,0C48.281,0,56.349,10.3,59.32,24.629a61.088,61.088,0,0,1,1.234,12.339c0,25.591-24.671,34.6-40.932,34.6C14.587,71.568,10.657,71.1,7.287,68.25ZM37.758,29h0Zm-.026,0a28.031,28.031,0,0,1-3.406-.194A28.011,28.011,0,0,0,37.732,29ZM58.822,24.8l.154-.054Z"
                fill="#fffbf2"
              ></path>
              <FacebookIcon />
            </svg>
          </a>
        </div>
        <p>
          Copyright 2021 Bandi App. All rights reserved. To get in touch,{" "}
          <a href="maito:hello@bandiapp.co.uk">send us an email</a>.
        </p>
      </div>
    </div>
  );
};

export default Footer;
