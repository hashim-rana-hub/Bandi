import { TextField } from "@mui/material";
import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <>
      <div className="mainForm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1801 183.608"
          marginTop="-20%"
        >
          <path
            id="Intersection_1"
            data-name="Intersection 1"
            d="M10632-457h1800v14.658c-250.875-15.765-542.394-18.29-862.813,10.864-358.507,32.61-674.418,92.665-937.187,156.95Z"
            transform="translate(-10631.501 457.499)"
            fill="#7cd9bc"
            stroke="rgba(0,0,0,0)"
            stroke-miterlimit="10"
            stroke-width="1"
          ></path>
        </svg>
        <h1>Going green shouldn’t mean going without</h1>
        <p>
          Sign up to our newsletter to be notified when we launch and receive
          the odd email with useful sustainability tips and news.
        </p>
        <div>
          <form className="form">
            <div className="form1st">
              <input  type="text" placeholder="   FirstName" />
              <br />
              <input type="text" placeholder=" LastName" />
            </div>

            <div className="form2nd">
              <input  type="text" placeholder="Email Address" />
            </div>
            <div>
              <button className="subscribe">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
