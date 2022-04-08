import React, { Component } from "react";
import Slider from "react-slick";
import car1 from "../images/car1.jpg";
import car2 from "../images/car2.jpg";
import car3 from "../images/car3.jpg";
import car4 from "../images/car4.jpg";
import car5 from "../images/car5.jpg";
import './style.css'

export default class CarouselComponent extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div className="sliderContainer">
        <Slider {...settings} >
          <div className="sliderImages" >
            <img src={car1} />
          </div>
          <div className="sliderImages">
            <img src={car2} />
          </div>
          <div className="sliderImages">
            <img src={car3} />
          </div>
          <div className="sliderImages">
            <img src={car4} />{" "}
          </div>
          <div className="sliderImages">
            <img src={car5} />{" "}
          </div>
        </Slider>
      </div>
    );
  }
}
