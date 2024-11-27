import { Checkbox, Input } from "antd";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const Signin = () => {
    return (
        <>
            <section className="signin-bg">
                <Container>
                    <div className="d-flex justify-content-center pt-lg-5">
                        <div className="login-form-contain">
                            <h2 className="head-txt text-center pt-lg-2">Signin</h2>

                            <div>
                                <label className="label">
                                    Name
                                </label>
                                <Input className="input-ctn" placeholder="Enter Your Name" />

                                <label className="label">
                                    Email
                                </label>
                                <Input className="input-ctn" placeholder="Enter Your Email" />

                                <label className="label">Password</label>

                                <Input className="input-ctn" placeholder="***************" />


                                <div className="d-flex justify-content-center">
                                    <div className="login-txt-1">Already have an account? <Link to="/login" className="link"><span>Login</span></Link></div>
                                </div>

                                <div className="d-flex justify-content-center mt-4">
                                    <Button className="btn-3">
                                        Signin
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Signin;