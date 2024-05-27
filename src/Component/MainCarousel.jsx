import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function MainCarousel() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4.15,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
          <div>
            <img src="/images/cycle.jpg"  alt="caro-1" />
          </div>
          <div>
          <img src="/images/cycle.jpg"  alt="caro-2"  />
          </div>
          <div>
          <img src="/images/cycle.jpg"  alt="caro-3" />
          </div>
          <div>
          <img src="/images/cycle.jpg"  alt="caro-4"  />
          </div>
          <div>
          <img src="/images/cycle.jpg"  alt="caro-5"  />
          </div>
        
        </Slider>
      );
}