import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
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

function Allroutes(){
    return(
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/cycling" element={ <Cycling/> }/>
            <Route path="/about" element={ <About/> }/>
            <Route path="/create-account" element={ <Register/> }  />
            <Route path="/user-login" element={ <Login/> }  />
            <Route path="/contact-us" element={<Contact/>} />
            <Route path="*" element={<PageNotFound/>} />
            <Route path="/first-component" element={<FirstComponent/>} />
            <Route path="/new-api" element={<Newapp/>} />
            <Route path="/todo-list" element={<TodoList/>} />
            <Route path="/axios" element={<Axios/>} />
            <Route path="/axios-post" element={<AxiosPost/>} />
        </Routes>
    )
}

export default Allroutes