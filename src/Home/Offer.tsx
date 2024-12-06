import React from 'react'
import { Button, Container } from 'react-bootstrap';

const Offer = () => {
    return (
        <>
            <section className='pad-gap'>
                <Container>
                    <div>
                        <h2 className='head-txt'>Pimpom's Exclusive Gifts for Customers</h2>
                        <div className='row offer-row row-gap'>
                            <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                <div>
                                    <p>
                                        Pimpom offers special gifts to customers, including a delightful combo of seeds,
                                        pencils, and neem products, perfect for promoting wellness and creativity.
                                    </p>
                                    <div className='we-div-btn'>
                                        <Button href="/product" className="btn-1">
                                            Explore Products
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                <div>
                                    <div className='offer-img'>
                                        <img src='/assets/neem.png' className='img-fluid' alt='img' />
                                        <div>
                                            <p className='offer-content'>Neem Comb</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                                <div>
                                    <div className='offer-img'>
                                        <img src='/assets/seeds.png' className='img-fluid' alt='img' />
                                        <div>
                                            <p className='offer-content'>Seed Pencils</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

        </>
    )
}

export default Offer;
