import { Input } from 'antd';
import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sign = () => {
    return (
        <section className='section-1'>
            <Container>
                <h2 className='head-txt text-center'>Create Account</h2>

                <div className='login-contain'>
                    <div className='login-div'>
                        <div>
                            <label className='label'>First Name</label>
                            <br />
                            <Input placeholder="Enter Your First Name" className='input' />
                        </div>
                        <div>
                            <label className='label'>Last Name</label>
                            <br />
                            <Input placeholder="Enter Your Last Name" className='input' />
                        </div>
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

                        <div className='d-flex justify-content-center pt-4'>
                            <Button className='btn-2'>
                               SignUp
                            </Button>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default Sign;
