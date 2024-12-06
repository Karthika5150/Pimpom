import React from 'react'
import { Button, Container } from 'react-bootstrap';

const We = () => {
    return (
        <section className='pad-gap'>
            <Container>
                <div>
                    <div className='row row-gap'>
                        <div className='col-lg-6 col-md-6 col-sm-12 colxs-12'>
                            <div className='we-img'>
                                <img src='/assets/owner-4.png' className='img-fluid' alt='img' />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 colxs-12'>
                            <div>
                                <h2 className='head-txt'>Who We Are ?</h2>
                                <p className='para-txt'>I'm Pimpom, the other half of Pimpom Paati Hair Oil.
                                    Welcome to the realm of Paati, a name held dear by our followers,
                                    now transformed into a brand that resonates with love and tradition.
                                    For nearly three decades, My Paati has been meticulously crafting this hair oil.
                                    It's a legacy that has been passed down through the years. </p>
                                <p className='para-txt'>
                                    Pimpom Pati Hair Oil" is a natural blend designed to nourish your hair and scalp,
                                    promoting healthier, shinier, and stronger hair. Packed with herbal ingredients,
                                    it helps reduce hair fall, improve texture, and encourage growth, making it a
                                    go-to solution for all your hair care needs. Perfect for everyday use,
                                    it rejuvenates and revitalizes your hair from root to tip.
                                </p>
                                <div>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div>
                                                <div className='d-flex gap-3'>
                                                    <div className='icon-img'>
                                                        <img src='/assets/icon.png' className='img-fluid' alt='img' />
                                                    </div>
                                                    <div>
                                                        <p className='we-para'>100% natural </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div>
                                                <div className='d-flex gap-3'>
                                                    <div className='icon-img'>
                                                        <img src='/assets/icon.png' className='img-fluid' alt='img' />
                                                    </div>
                                                    <div>
                                                        <p className='we-para'>0% chemicals</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row pg'>
                                        <div className='col-6'>
                                            <div>
                                                <div className='d-flex gap-3'>
                                                    <div className='icon-img'>
                                                        <img src='/assets/icon.png' className='img-fluid' alt='img' />
                                                    </div>
                                                    <div>
                                                        <p className='we-para'>Handmade </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div>
                                                <div className='d-flex gap-3'>
                                                    <div className='icon-img'>
                                                        <img src='/assets/icon.png' className='img-fluid' alt='img' />
                                                    </div>
                                                    <div>
                                                        <p className='we-para'>Lab tested</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row pg'>
                                        <div className='col-6'>
                                            <div>
                                                <div className='d-flex gap-3'>
                                                    <div className='icon-img'>
                                                        <img src='/assets/icon.png' className='img-fluid' alt='img' />
                                                    </div>
                                                    <div>
                                                        <p className='we-para'>GMP certified</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div>
                                                <div className='d-flex gap-3'>
                                                    <div className='icon-img'>
                                                        <img src='/assets/icon.png' className='img-fluid' alt='img' />
                                                    </div>
                                                    <div>
                                                        <p className='we-para'>ISO certified</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='we-div-btn'>
                                    <Button href="/product" className="btn-1">
                                        Explore Products
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section >
    )
}

export default We;
