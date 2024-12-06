import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <section className='pad-gap-1'>
                <Container>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <Link to="/" className='link'>
                                <div className='logo-f'>
                                    <img src='/assets/logo-1.png' className='img-fluid' alt='img' />
                                </div>
                            </Link>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div>
                                <h3 className='head-txt-1'>Quick Links</h3>
                                <div className='footer-link'>
                                    <p>
                                        <Link className='link' to='/'>Home</Link>
                                    </p>
                                    <p>
                                        <Link className='link' to='/product'>Products</Link>
                                    </p>
                                    <p>
                                        <Link className='link' to='/about'>About</Link>
                                    </p>
                                    <p>
                                        <Link className='link' to='/contact'>Contact</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div>
                                <h3 className='head-txt-1'>Contact Us</h3>
                                <div className='d-flex gap-3 pb-2'>
                                    <div className='f-icon'>
                                        <i className="fi fi-rr-phone-call social"></i>
                                    </div>
                                    <div>+91 6385345029</div>
                                </div>
                                <div className='d-flex gap-3  pb-2'>
                                    <div className='f-icon'>
                                        <i className="fi fi-rr-marker social"></i>
                                    </div>
                                    <div>No : 75,76 Om sakthi garden, Theethipalayam, Coimbatore -641010</div>
                                </div>
                                <div className='d-flex gap-3  pb-2'>
                                    <div className='f-icon'>
                                        <i className="fi fi-rr-envelope social"></i>
                                    </div>
                                    <div>pimpompaatioil@gmail.com</div>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <p className='head-txt-2'>09 : 00 am - 06 : 00 pm</p>
                            <div className='social-icons'>
                                <Link to={'https://www.instagram.com/pimpom_lifestyle/?hl=en'} className='link'>
                                    <div>
                                        <i className="fi fi-brands-instagram social"></i>
                                    </div>
                                </Link>
                                <Link to={'https://www.facebook.com/Pimpomlifestyle/'} className='link'>
                                    <div>
                                        <i className="fi fi-brands-facebook social"></i>
                                    </div>
                                </Link>
                                <Link to="https://www.youtube.com/c/PimpomLifestyle" className='link'>
                                    <div>
                                        <i className="fi fi-brands-youtube social"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <p className='f-f-txt'>@copywrite 2024 @karthika</p>
                </Container>
            </section>
        </>
    )
}
