import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Cycling from "./Cycling";
import About from "./AboutAvaka";
import Register from "./Register";
import Login from "./Login";
import Contact from "./Contact";
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