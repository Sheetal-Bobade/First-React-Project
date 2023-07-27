import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Cycling from "./Cycling";
import About from "./AboutAvaka";
import MyAccount from "./MyAccount";
import Login from "./Login";
function Allroutes(){
    return(
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/cycling" element={ <Cycling/> }/>
            <Route path="/about" element={ <About/> }/>
            <Route path="/my-account" element={ <MyAccount/> }  />
            <Route path="/user-login" element={ <Login/> }  />

        </Routes>
    )
}

export default Allroutes