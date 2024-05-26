import { BiSolidChevronRight } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";

function Footer(){
    return(
        <div className="footer-sec">
            <div className="footer-inner-first">
                <div className="column-first">
                    <h3>Inside Avaka</h3>
                    <ul>
                        <li><a href="/">About AVAKA</a></li>
                        <li><a href="/">Partner with us</a></li>
                        <li><a href="/">Wholesaler application</a></li>
                        <li><a href="/">Blogs & latest news</a></li>
                        <li><a href="/">Become partner</a></li>
                    </ul>
                </div>

                <div className="column-second">
                <h3>Support</h3>
                    <ul>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="/contact-us">Contact us</a></li>
                        <li><a href="#">Warranty</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                        <li><a href="#">Return Policy</a></li>
                    </ul>
                </div>

                <div className="column-third">
                <h3>Legal</h3>
                    <ul>
                        <li><a href="#">Payment policy</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Terms of use</a></li>
                    </ul>
                </div>

                <div className="column-fourth">
                <h2>Sign me up!</h2>
                    <ul>
                        <li><a href="">Get special offers, exclusive product news, and event info straight to your inbox.</a></li>
                    </ul>
                    <div>
                    <form class="newsletter">
                      <input class="email" type="email" id="email" name="Email" placeholder="E-mail"/>
                    <button class="submit">
                    <BiSolidChevronRight/>
                    </button>
                   </form> 
                    </div>
                    
                </div>
            </div>

            <div className="footer-inner-second">
            <div className="column-first">
              <div className="social-icons">
              <BiLogoFacebook/>
              <BiLogoTwitter/>
              <BiLogoInstagram/>
              <BiLogoYoutube/>
              </div>
              <div>
                <p>© 2023, AVAKA BIKES EU. All rights reserved.</p>
              </div>

            </div>

            <div className="column-second">
              
            </div>

            </div>
    


        </div>
    )
}

export default Footer;