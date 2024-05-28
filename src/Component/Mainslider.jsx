import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img src="/images/slide1.jpg" alt="slider1" />
        </div>
        <div>
        <img src="/images/slide2.jpg" alt="slider2" />
        </div>
        <div>
        <img src="/images/slide3.jpg" alt="slider3" />
        </div>
        <div>
        <img src="/images/slide4.jpg" alt="slider4" />
        </div>
      
      </Slider>
    );
  }