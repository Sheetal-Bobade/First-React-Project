import React from "react";
import './App.css';
import Topheader from './Component/Topheader';
import Header from './Component/Header';
import Footer from './Component/Footer';
import './custom.css';

function Cycling(){
    return(
        <div className="App">
      <Topheader/>
      <Header/>
      
      <Footer/>
    </div>
    );
}

export default Cycling;