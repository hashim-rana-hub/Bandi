import React from "react";
import "./Icon.css";
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

const Icon = () => {
  return (
    <div
      className="logo"
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="2000"
      data-aos-easing="linear"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <svg
        className="logosvg"
        xmlns="http://www.w3.org/2000/svg"
        width="187.442"
        height="200.005"
        viewBox="0 0 187.442 200.005"
      >
        <g
          id="Group_612"
          data-name="Group 612"
          transform="translate(-392.094 -205.36)"
        >
          <path
            id="Path_16"
            data-name="Path 16"
            d="M459.568,332.392c-18.645-2.347-22.211-14.293-20.017-31.721.89-7.066,1.883-13.569,2.986-19.568a135.579,135.579,0,0,0-27.259,14.184c-16.564,12.129-23.184,33.6-23.184,56,0,34.527,5.541,51.329,14.348,58.8,6.649,5.6,14.377,6.534,24.291,6.534,32.019,0,80.6-17.739,80.6-68.13a120.094,120.094,0,0,0-2.43-24.3C490.35,330.792,472.058,333.964,459.568,332.392Z"
            transform="translate(0 -11.255)"
            fill="#b0dde3"
          />
          <path
            id="Path_17"
            data-name="Path 17"
            d="M518.183,206.2c-14.9-1.876-26.424-.673-35.89,4.329-14.935,7.891-24.717,25.385-30.953,59.322,8.937-3.388,17.588-5.417,24.65-5.417,19.984,0,35.872,20.276,41.72,48.5,33.134-11.8,67.112-34.538,70.414-60.772C591.631,224.287,551.73,210.42,518.183,206.2Z"
            transform="translate(-8.804)"
            fill="#ff8756"
          />
          <path
            id="Path_18"
            data-name="Path 18"
            d="M475.369,274.742c-7.062,0-15.713,2.029-24.65,5.417-1.1,6-2.1,12.5-2.986,19.568-2.193,17.427,1.372,29.373,20.017,31.721,12.49,1.572,30.782-1.6,49.339-8.206C511.241,295.018,495.353,274.742,475.369,274.742Z"
            transform="translate(-8.183 -10.31)"
            fill="#578191"
          />
        </g>
      </svg>
    </div>
  );
};

export default Icon;
