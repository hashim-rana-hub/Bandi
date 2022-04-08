import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import BandiSvg from "./components/Bandi/BandiSvg";
import Phone from "./components/Phones/Phone";
import Icon from "./components/icon/Icon";
import BandiText from "./components/BandiText/BandiText";
import Slider from "./components/Slider/Slider";
import FlowerSvg from "./components/Flower/FlowerSvg";
import FlowerText from "./components/Flower/FlowerText";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import CarouselComponent from "./components/Carousel/CarouselComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BandiSvg />
      <Phone />
      <Icon />
      <BandiText />
      <Slider />
      <FlowerSvg />
      <FlowerText  />
      <CarouselComponent />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
