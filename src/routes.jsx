import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Usuario from "./components/Usuario";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <div>
                <Usuario/>
                <Routes>
                    <Route path="/" element={ <Home/> }/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default RoutesApp;