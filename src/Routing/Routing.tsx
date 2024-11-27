import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Professional from "../Professional/Professional";
import FoodCategory from "../FoodCategory/FoodCategory";
// import FoodCategory from "../FoodCategory/Demo";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Login from "../Login/Login";
import Navs from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import ScrollToTop from "../Home/ScroolTop";
import Signin from "../Login/Signup";



const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Navs />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/professional" element={<Professional />} />
                    <Route path="/food-category" element={<FoodCategory />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signin" element={<Signin />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default Routing;