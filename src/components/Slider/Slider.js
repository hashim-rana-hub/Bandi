import React, { useState } from "react";
import "./Slider.css";
import sandle from "../images/sandle.jpg";
import shirt from "../images/shirt.jpg";
import Bag from "../images/Bag.jpg";
import AOS from "aos";
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const Slider = () => {
  const [active, setActive] = useState("tab1");
  const switchImages = () => {
    switch (active) {
      case "tab1":
        return sandle;
      case "tab2":
        return shirt;
      case "tab3":
        return Bag;
      default:
        return sandle;
    }
  };

  return (
    <div className="main">
      <div className="left">
        <div className="slider">
          <span
            className="sliderspan"
            style={{
              backgroundColor: active === "tab1" && "rgb(231, 138, 23)",
            }}
          ></span>
          <span
            className="sliderspan1"
            style={{
              backgroundColor: active === "tab2" && "rgb(231, 138, 23)",
            }}
          ></span>
          <span
            className="sliderspan2"
            style={{
              backgroundColor: active === "tab3" && "rgb(231, 138, 23)",
            }}
          ></span>
        </div>
        <div className="paraSlider">
          <p
            style={{ color: active === "tab1" && "rgb(231, 138, 23)" }}
            onClick={() => setActive("tab1")}
          >
            Create a profile & upload your pre-loved garments
          </p>
          <p
            style={{ color: active === "tab2" && "rgb(231, 138, 23)" }}
            onClick={() => setActive("tab2")}
          >
            Find your clothes twin and swap for years to come
          </p>
          <p
            style={{ color: active === "tab3" && "rgb(231, 138, 23)" }}
            onClick={() => setActive("tab3")}
          >
            Send your item & wait for syour new garment to arrive
          </p>
        </div>
      </div>
      <div className="right">
        <img src={switchImages()} />
      </div>
    </div>
  );
};

export default Slider;
