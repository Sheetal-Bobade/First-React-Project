import { Link } from "react-router-dom";
function Header(){
    return(
       <div className="menu-sec">
        <div className="menu-list-div">
        <ul className="menu-list">
  <li><Link to="#">Shop eBikes</Link></li>
  <li><Link to="/cycling">Cycling Accessories</Link></li>
  <li><Link to="#">eBike Sale</Link></li>
  <li><Link to="/about">About AVAKA</Link></li>
</ul>
        </div>
       
<div className="menu-logo">
  <Link to="/"><img src="/images/logo.png" alt="avaka"/></Link>
</div>

<div className="menu-icons">
<p className="eur">EUR</p>    
<p className="eng">English</p>
<img className="search" src="/images/search.png" alt="search"/>
<a href="/create-account"><img className="user" src="/images/user.svg" alt="user"/></a>
<img className="cart" src="/images/cart.png" alt="cart"/>

</div>
</div>
    )
}

export default Header;