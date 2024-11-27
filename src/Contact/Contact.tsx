import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { Button, Container } from "react-bootstrap";


const Contact = () => {
    return (
        <>
            <section className="img-contact">
                <div className="d-flex justify-content-end">
                    <div className="contact-content">
                        <h2 className="head-txt-2">We’re Here to Help—Reach Out for Recipe Queries or Tips!</h2>
                    </div>
                </div>
            </section>
            <section className="form-bg">
                <div className="pt-3">
                    <Container>
                        <div>
                            <h2 className="head-txt text-center">Got a Recipe Request? Let Us Know!</h2>
                            <div className="d-flex justify-content-center pt-4">
                                <div className="form-ctn">
                                    <label className="label">Name</label>
                                    <Input placeholder="Enter Your Name" className="input-ctn" />
                                    <label className="label">Email</label>
                                    <Input placeholder="Enter Your Email"  className="input-ctn"/>
                                    <label className="label">Phone No</label>
                                    <Input placeholder="Enter Your Phone No" className="input-ctn" />
                                    <label className="label">Receipe Name</label>
                                    <Input placeholder="Enter Your Receipe Name"  className="input-ctn"/>
                                    <label className="label">Message</label>
                                    <TextArea className="input-ctn" placeholder="Message"/>
                                    <div className="d-flex justify-content-center pt-3">
                                        <Button className="btn-3">Submit</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Contact;