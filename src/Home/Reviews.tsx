import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Flex, Rate } from 'antd';


const Reviews = () => {
    // Define the array of content to display
    const reviews = [
        { title: 'Sindhu', content: 'It conditioned my hair well, gives shine and reduced my hair fall.Love this paati hair oil.' },
        { title: 'Maha', content: 'I recommend everyone to try paati hair oil and neem comb. It is very natural and effective. I had a hair fall problem before, but now my hair fall completely stopped and I got many baby hairs. I love patty hair oil.' },
        { title: 'Priya Gopi', content: 'Pimpom & Paati thank you so much, after using the oil my curly hair changed straight & soft.' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to next review
    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    // Function to go to previous review
    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    // Automatic transition every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextReview();  // Change review automatically
        }, 2000);

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const [value, setValue] = useState(5);

    return (
        <section className="review-contain">
            <Container>
                <div>
                    <h2 className='head-txt'>Customer Reviews</h2>
                    <div className="reviews">
                        <div className='icons-div'>
                            <div className='btn-l' onClick={prevReview}>
                                <i className="fi fi-rr-less-than less"></i>
                            </div>
                        </div>
                        <div className='review-content'>
                            <p className='review-s'>{reviews[currentIndex].content}</p>
                            <div className='rating'>
                                <Flex gap="middle" vertical>
                                    <Rate onChange={setValue} value={value} />
                                </Flex>
                            </div>
                            <h2 className='review-h'>{reviews[currentIndex].title}</h2>
                        </div>
                        <div className='icons-div'>
                            <div className='btn-g' onClick={nextReview}>
                                <i className="fi fi-rr-greater-than less"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Reviews;
