import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Navs from '../Navbar/Nav';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';
import ScrollToTop from '../Home/ScrollTop';
import Login from '../Login/Login';
import Sign from '../Login/Signup';

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Navs />
                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<Sign/>} />
                </Routes>
                <Footer />

            </BrowserRouter>
        </>
    )
}

export default Routing;
