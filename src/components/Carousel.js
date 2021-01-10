import React, { Component } from "react";
import image3 from "../images/image3.jpeg";
import image4 from "../images/image4.jpeg";
import image5 from "../images/image5.jpeg";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuid } from "uuid";
import { config } from "react-spring";

export default class CarouselClass extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.slow,
  };

  slides = [
    {
      key: uuid(),
      content: <img src={image3} alt="1" />,
    },
    {
      key: uuid(),
      content: <img src={image4} alt="2" />,
    },
    {
      key: uuid(),
      content: <img src={image5} alt="3" />,
    },
    {
      key: uuid(),
      content: <img src={image3} alt="4" />,
    },
    {
      key: uuid(),
      content: <img src={image4} alt="5" />,
    },
    {
      key: uuid(),
      content: <img src={image5} alt="6" />,
    },
    {
      key: uuid(),
      content: <img src={image3} alt="7" />,
    },
    {
      key: uuid(),
      content: <img src={image3} alt="8" />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  render() {
    console.log(this.state.config);
    return (
      <div
        // className="row"
        style={{ width: "80%", height: "500px", margin: "0 auto" }}
      >
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
