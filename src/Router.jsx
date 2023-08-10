import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Cycling from "./Pages/Cycling";
import About from "./Pages/AboutAvaka";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
function Allroutes(){
    return(
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/cycling" element={ <Cycling/> }/>
            <Route path="/about" element={ <About/> }/>
            <Route path="/create-account" element={ <Register/> }  />
            <Route path="/user-login" element={ <Login/> }  />
            <Route path="/contact-us" element={<Contact/>} />

        </Routes>
    )
}

export default Allroutes