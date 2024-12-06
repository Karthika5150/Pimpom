import { Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react'
import { Button, Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <>
      <section>
        <div className='bg-imgs'>
          <img src='/assets/fixed.png' className='img-fluid' alt='img' />
        </div>
      </section>
      <section className='section-1'>
        <Container>
          <div>
            <h2 className='head-txt'>
              Contact
            </h2>
            <div className='contact-contain'>
              <div className='contact-div'>
                <div>
                  <label className='label'>Name</label>
                  <br />
                  <Input placeholder="Enter Your Name" />
                </div>

                <div>
                  <label className='label'>Email</label>
                  <br />
                  <Input placeholder="Enter Your Email" />
                </div>

                <div>
                  <label className='label'>Phone No</label>
                  <br />
                  <Input placeholder="Enter Your PhoneNo" />
                </div>

                <div>
                  <label className='label'>Message</label>
                  <br />
                  <TextArea placeholder="Message" />
                </div>

                <div className='contact-btn'>
                  <Button className='btn-2'>
                    Sumbit
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

export default Contact;
