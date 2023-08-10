import React from "react";
import '../App.css';
import Topheader from '../Component/Topheader';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import '../custom.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function About(){
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical:true,
    verticalScrolling:true,
    verticalSwiping: true,
    dots: true
  };
  
    return(
    <div className="App">
      <Topheader/>
      <Header/>
      <div className="about-main">
      <img src="images/about-main.jpg"/>
      <div className="text">
      <h3>ABOUT US</h3>
      <h1>Avaka E-Bike</h1>
      <p>Make city cycling  safe  and enjoyable for everyone</p>
      </div>
      </div>
      <div className="about-sec2">
       <div className="text">
       <h2>Our vision</h2>
       <p>Create a world where everyone has access to affordable, reliable, and eco-friendly transportation solutions that promote healthy and active lifestyles.</p>
       </div> 
      </div>

      <div className="about-sec3">
        <div className="ver-slider">

        <Slider {...settings}>
          <div className="ver-slide">
            <div className="row">
            <div className="col-md-6">
            <img src="/images/about-slide1.png" />
            </div>
            <div className="col-md-6 text">
            <h3>01</h3>
            <h2>Our Value</h2>
            <p>At Avaka, we believe in the power of cycling to change the way we move and live in our cities. Our brand values reflect our commitment to quality, sustainability, innovation, and community.</p>
            </div>
            </div>
            
          </div>
          <div className="ver-slide">
          <div className="row">
            <div className="col-md-6">
            <img src="/images/about-slide2.png" />
            </div>
            <div className="col-md-6 text">
            <h3>01</h3>
            <h2>Our Value</h2>
            <p>At Avaka, we believe in the power of cycling to change the way we move and live in our cities. Our brand values reflect our commitment to quality, sustainability, innovation, and community.</p>
            </div>
            </div>
          </div>
          <div className="ver-slide">
          <div className="row">
            <div className="col-md-6">
            <img src="/images/about-slide3.png" />
            </div>
            <div className="col-md-6 text">
            <h3>01</h3>
            <h2>Our Value</h2>
            <p>At Avaka, we believe in the power of cycling to change the way we move and live in our cities. Our brand values reflect our commitment to quality, sustainability, innovation, and community.</p>
            </div>
            </div>
          </div>
          </Slider>

          </div>
      </div>

      
      <Footer/>
    </div>
    );
}

export default About;