import React from 'react'
import { Button, Container } from 'react-bootstrap';

const About = () => {
  return (
    <section className='section-1'>
      <Container>
        <div>
          <h2 className='head-txt'>About</h2>
          <div className='row pt-lg-3 row-gap'>
            <div className='col-lg-6 col-md-6 col-sm-12 colxs-12'>
              <div className='we-img'>
                <img src='/assets/img-5.png' className='img-fluid' alt='img' />
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 colxs-12'>
              <div>
                <h2 className='head-txt'>Pimpom</h2>
                <p className='para-txt'>"PAATI" lovingly called by all our followers became our brand name,
                  Hey Hi I am Pimpom the other half of Pimpom paati hair oil. I am the first person to use
                  our Paati hair oil since my birth. My Paati is preparing this hair oil not for now she
                  has been preparing for almost 3 decades. This is our family oil. Then I moved out for
                  studies and work but I haven’t stopped using my Paati hair oil anywhere. That is the main
                  reason for my hair growth. Till now we haven’t got any dandruff or grey hair or hair fall
                  issues even though I lived out of cities. The journey continued like this and then finally
                  we started our own YouTube channel which was successful with all our lovable subscribers.
                  Our subscribers started asking to post a hair care routine of mine since I had long shiny
                  and black hair. I posted my hair care videos where I have mentioned all this is because
                  of my Paatis handmade hair oil. Then our followers suggested to start selling that.
                  Then after doing a lot of groundwork, we launched our Pimpom Paati hair oil in Feb 2022.
                  Can u guess how many orders we got on our first day? it’s 1000 + orders. All our lovable
                  subscribers became our customers. From that point to now with all support we are running
                  our business successfully. We crossed 100k customers, we have 95% buy-back customers and
                  we have 10k + customer reviews. We have customers from Kids to Aged people. Because our
                  hair oil is suitable for all genders and all hair types.
                  Our main mantra is Consistency and Quality. </p>
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
                            <p className='we-para'>Handmade</p>
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

export default About;
