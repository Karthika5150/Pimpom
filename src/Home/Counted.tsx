import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const AnimatedCounter = () => {
    // States for each counter
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    // Function to animate the counter
    const incrementCounter = (setCount: any, target: any) => {
        let count = 0;
        const interval = setInterval(() => {
            if (count < target) {
                count += 100; // Increment by 100 each interval
                setCount(count);
            } else {
                clearInterval(interval);
            }
        }, 10); // Speed of the animation (lower = faster)
    };

    useEffect(() => {
        // Start the counters animation when the component mounts
        incrementCounter(setCount1, 100000); // Customers
        incrementCounter(setCount2, 55000); // Buy Back Customers
        incrementCounter(setCount3, 30000); // Customer Reviews
    }, []);

    // Function to format numbers with "k" for thousands
    const formatNumber = (num: any) => {
        return num >= 1000 ? (num / 1000) + 'k' : num;
    };

    return (
        <section className='bg'>
            <Container>
                <div className=''>
                    <div className='row bg-count'>
                        {/* Customers Section */}
                        <div className='col-lg-4 col-md-4 col-sm-4 col-sx-4'>
                            <div>
                                <h1 className='count-txt'>{formatNumber(count1)}</h1>
                                <h2 className='count-content'>customers</h2>
                            </div>
                        </div>

                        {/* Buy Back Customers Section */}
                        <div className='col-lg-4 col-md-4 col-sm-4 col-sx-4'>
                            <div>
                                <h1 className='count-txt'>{formatNumber(count2)}</h1>
                                <h2 className='count-content'>Buy Back customers</h2>
                            </div>
                        </div>

                        {/* Customer Reviews Section */}
                        <div className='col-lg-4 col-md-4 col-sm-4 col-sx-4'>
                            <div>
                                <h1 className='count-txt'>{formatNumber(count3)}</h1>
                                <h2 className='count-content'>customer Reviews</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AnimatedCounter;
