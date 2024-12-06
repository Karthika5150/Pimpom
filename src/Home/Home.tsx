import React from 'react';
import Navs from '../Navbar/Nav';
import { Carousel } from 'antd';
import { Container } from 'react-bootstrap';
import We from './We';
import Animate from './animate';
import Offer from './Offer';
import AnimatedCounter from './Counted';
import Fixed from './Fixed';
import Reviews from './Reviews';

const Home = () => {

  const images = [
    {
      ImgSrc: "/assets/img-2.png",
      content: "",
      para: "",
    },
    {
      ImgSrc: "/assets/img-3.png",
    },
    {
      ImgSrc: "/assets/bg-2.png",
    },
    {
      ImgSrc: "/assets/bg-3.png",
    },

  ];


  return (
    <>
      <section className='pad'>
        <div>
          <Carousel autoplay>
            {images.map((image, index) => (
              <div key={index} className='slide-img'>
                <img
                  src={image.ImgSrc}
                  alt={`Slide ${index + 1}`}
                  className='img-fluid'
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <Animate />
      <Fixed/>
      <We />
      <Offer />
      <AnimatedCounter />
      <Reviews/>
    </>
  );
};

export default Home;
