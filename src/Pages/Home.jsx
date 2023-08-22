import {createContext} from "react";
import '../App.css';
import Topheader from '../Component/Topheader';
import TransparentHeader from '../Component/TransparentHeader';
import Footer from '../Component/Footer';
import '../custom.css';
import SimpleSlider from '../Component/Mainslider';
import MainCarousel from "../Component/MainCarousel";




function Home(){
 
    return(
        <div className="App">
          <div className="common-header">
          <Topheader/>
          <TransparentHeader/>
          </div>
      
      <div className="main-slider">
      <SimpleSlider/>
      </div>

      <div className="home-sec2">
       <h2>World's Best Electric City Bikes</h2> 
       <div className="row">
        <div className="col-md-3">
        <div className="img-div"><img src="images/shipping.png"/></div>
        <h3>Free shipping</h3>
        <p>from EU warehouse 2-6 days delivery time</p>
        </div>
        <div className="col-md-3">
        <div className="img-div"><img src="images/customer.png"/></div>
        <h3>EU Customer Support</h3>
        <p>Talk to us via chat</p>
        </div>
        <div className="col-md-3">
        <div className="img-div"><img src="images/credit.png"/></div>
        <h3>Pay by installments</h3>
        <p>Secure payment through Klarna</p>
        </div>
        <div className="col-md-3">
        <div className="img-div"><img src="images/thumbsup.png"/></div>
        <h3>Warranty and Guarantee</h3>
        <p>1-Year Warranty</p>
        </div>
       </div>
      </div>

      <div className="home-sec3">
      <div className="row">
        <div className="col-md-6 left">
        <h2>eBikes on Sale</h2>
        </div>
        <div className="col-md-6 right">
        <a>View All</a>
        </div>
      </div>


        <MainCarousel/>
      </div>

      <Footer/>
    </div>






    );
}

export default Home;