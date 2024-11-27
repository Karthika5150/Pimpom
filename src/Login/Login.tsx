import { Checkbox, Input } from "antd";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <>
            <section className="login-bg">
                <Container>
                    <div className="d-flex justify-content-center pt-lg-5">
                        <div className="login-form-contain">
                            <h2 className="head-txt text-center pt-lg-5">Login</h2>

                            <div>
                                <label className="label">
                                    Email
                                </label>
                                <Input className="input-ctn" placeholder="Enter Your Email" suffix={<i className="fi fi-rr-envelope f-icon"></i>} />

                                <label className="label">
                                    Password
                                </label>
                                <Input className="input-ctn" placeholder="*************" suffix={<i className="fi fi-rr-lock f-icon"></i>} />


                                <div className="d-flex justify-content-between">
                                    <div className="d-flex gap-2">
                                        <div>
                                            <input type="checkbox" className="checkbox" />
                                        </div>
                                        <p className="login-txt-1">Remember me</p>
                                    </div>
                                    <div className="login-txt-1"><span>Forgot Password?</span></div>
                                </div>

                                <div className="d-flex justify-content-center mt-1">
                                    <Button className="btn-3">
                                        Login
                                    </Button>
                                </div>

                                <div className="text-center">
                                    <Link to="/signin" className="link">
                                        <p className="login-txt-2">Signin</p>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Login;