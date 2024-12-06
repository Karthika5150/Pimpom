import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const Animate = () => {
    const items = [
        {
            image: "/assets/100ml.png",
            description: "100ml",
        },
        {
            image: "/assets/200ml.png",
            description: "200ml",
        },
        {
            image: "/assets/1liter.png",
            description: "1L",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, [items.length]);

    // Get the indices of the items to show
    const getIndices = (index: number) => {
        const prevIndex = (index - 1 + items.length) % items.length;
        const nextIndex = (index + 1) % items.length;
        return [prevIndex, index, nextIndex];
    };

    const [prevIndex, activeIndex, nextIndex] = getIndices(currentIndex);

    return (
        <section className="pad-gap">
            <Container>
                <div>
                    <h2 className="head-txt">Pimpom</h2>
                    <div className="row row-gap">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs12">
                            <div>
                                <p>
                                    Experience the power of nature with Pimpom Pati Hair Oil. Enriched with herbal ingredients,
                                    it nourishes the scalp, strengthens roots, reduces hair fall, and promotes healthy, shiny hair.
                                    Suitable for all hair types, it revitalizes your locks and restores natural beauty.
                                </p>
                                <Button href="/product" className="btn-1">
                                    Explore Products
                                </Button>
                            </div>
                        </div>
                        {/* Render three images dynamically with dynamic ml-div content */}
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs12">
                            <div className="product-ani">
                                <div className="product-h">
                                    <img src={items[prevIndex].image} className="img-fluid" alt="Previous" />
                                    <p className="ml-div">{items[prevIndex].description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs12">
                            <div className="product-ani">
                                <div className="product-h">
                                    <img src={items[activeIndex].image} className="img-fluid" alt="Active" />
                                    <p className="ml-div">{items[activeIndex].description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs12">
                            <div className="product-ani">
                                <div className="product-h">
                                    <img src={items[nextIndex].image} className="img-fluid" alt="Next" />
                                    <p className="ml-div">{items[nextIndex].description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Animate;
