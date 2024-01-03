import { Route, Routes } from "react-router-dom";
import Avaka from "./Pages/Avaka";
import Cycling from "./Pages/Cycling";
import About from "./Pages/AboutAvaka";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/Pagenotfound";
import FirstComponent from "./Pages/firstcomponent";
import Newapp from "./Pages/newApi";
import TodoList from "./Pages/TodoList";
import Axios from "./Pages/Axios";
import AxiosPost from "./Pages/AxiosPost";
import DashboardHome from "./Pages/Home";
import AboutDashboard from "./Pages/About";
import Settings from "./Pages/Settings";
import Products from "./Pages/Products";

function Allroutes(){
    return(
        <Routes>
            <Route path="/" element={ <Avaka/> }/>
            <Route path="/cycling" element={ <Cycling/> }/>
            <Route path="/about-avaka" element={ <About/> }/>
            <Route path="/create-account" element={ <Register/> }  />
            <Route path="/user-login" element={ <Login/> }  />
            <Route path="/contact-us" element={<Contact/>} />
            <Route path="*" element={<PageNotFound/>} />
            <Route path="/first-component" element={<FirstComponent/>} />
            <Route path="/new-api" element={<Newapp/>} />
            <Route path="/todo-list" element={<TodoList/>} />
            <Route path="/axios" element={<Axios/>} />
            <Route path="/axios-post" element={<AxiosPost/>} />
            <Route path="/home" element={<DashboardHome/>} />
            <Route path="/about" element={<AboutDashboard/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/products" element={<Products/>} />
        </Routes>
    )
}

export default Allroutes