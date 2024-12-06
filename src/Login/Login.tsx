import { Input } from 'antd';
import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className='section-1'>
            <Container>
                <h2 className='head-txt text-center'>Login</h2>

                <div className='login-contain'>
                    <div className='login-div'>
                        <div>
                            <label className='label'>Email</label>
                            <br />
                            <Input placeholder="Enter Your Email" className='input' />
                        </div>
                        <div>
                            <label className='label'>Password</label>
                            <br />
                            <Input placeholder="*********" className='input' />
                        </div>

                        <div className='login-txt'>
                            <p className='forgot'>Forgot Password?</p>

                            <Link to="/signup" className='link'>
                                <p className='sign-txt'>SignUp</p>
                            </Link>
                        </div>

                        <div className='d-flex justify-content-center'>
                            <Button className='btn-2'>
                                Login
                            </Button>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default Login;
