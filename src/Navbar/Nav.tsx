import { Drawer } from 'antd';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navs = () => {

    const [open, Setopen] = useState(false);


    return (
        <section className="nav-contain">
            <Container>
                <div className="d-flex justify-content-between">
                    <NavLink to="/" className="link">
                        <div className="logo">
                            <img src="/assets/logo-1.png" className="img-fluid" alt="logo" />
                        </div>
                    </NavLink>

                    {/* Mobile view */}

                    <div className="d-lg-none">
                        {/* Menu Icon */}
                        <div
                            className="menu-div"
                            onClick={() => {
                                Setopen(!open);
                            }}
                        >
                            <i className="fi fi-rr-menu-burger menu"></i>
                        </div>

                        {/* Mobile Menu */}
                        <div className={open ? "right-div-1" : "hide"}>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? 'link active-nav-txt' : 'link'
                                }
                                onClick={() => Setopen(false)} // Close menu on click
                            >
                                <p className="nav-txt">Home</p>
                            </NavLink>
                            <NavLink
                                to="/product"
                                className={({ isActive }) =>
                                    isActive ? 'link active-nav-txt' : 'link'
                                }
                                onClick={() => Setopen(false)} // Close menu on click
                            >
                                <p className="nav-txt">Products</p>
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? 'link active-nav-txt' : 'link'
                                }
                                onClick={() => Setopen(false)} // Close menu on click
                            >
                                <p className="nav-txt">About</p>
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? 'link active-nav-txt' : 'link'
                                }
                                onClick={() => Setopen(false)} // Close menu on click
                            >
                                <p className="nav-txt">Contact</p>
                            </NavLink>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive ? 'link active-nav-txt' : 'link'
                                }
                                onClick={() => Setopen(false)} // Close menu on click
                            >
                                <p className="nav-txt">
                                    <i className="fi fi-rr-user user-icon"></i>
                                </p>
                            </NavLink>
                        </div>
                    </div>



                    {/* Laptop view */}
                    <div className="right-div">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'link active-nav-txt' : 'link'
                            }
                        >
                            <p className="nav-txt">Home</p>
                        </NavLink>
                        <NavLink
                            to="/product"
                            className={({ isActive }) =>
                                isActive ? 'link active-nav-txt' : 'link'
                            }
                        >
                            <p className="nav-txt">Products</p>
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? 'link active-nav-txt' : 'link'
                            }
                        >
                            <p className="nav-txt">About</p>
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? 'link active-nav-txt' : 'link'
                            }
                        >
                            <p className="nav-txt">Contact</p>
                        </NavLink>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? 'link active-nav-txt' : 'link'
                            }
                        >
                            <p className="nav-txt">
                                <i className="fi fi-rr-user user-icon"></i>
                            </p>
                        </NavLink>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Navs;


