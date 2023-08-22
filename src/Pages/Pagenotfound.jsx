import React from 'react';
import '../App.css';
import Topheader from '../Component/Topheader';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import '../custom.css';

function PageNotFound(){
   
    return(
    <div className="App">
      <Topheader/>
      <Header/>
      <div>
        404 Page not found
      </div>
      
      <Footer/>
    </div>
    );
}

export default PageNotFound;