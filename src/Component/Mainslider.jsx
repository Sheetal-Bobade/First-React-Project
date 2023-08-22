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
          <img src="/images/slide1.jpg" />
        </div>
        <div>
        <img src="/images/slide2.jpg" />
        </div>
        <div>
        <img src="/images/slide3.jpg" />
        </div>
        <div>
        <img src="/images/slide4.jpg" />
        </div>
      
      </Slider>
    );
  }