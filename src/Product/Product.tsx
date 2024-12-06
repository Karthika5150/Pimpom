import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = () => {
    // Product data
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Special Offer - Paati Hair Oil 100ml + Free Seed Pencil",
            originalPrice: 299,
            discountedPrice: 189,
            image: "/assets/100ml.png",
        },
        {
            id: 2,
            name: "Special Offer - Paati Hair Oil 200ml + Free Seed Pencil",
            originalPrice: 550,
            discountedPrice: 499,
            image: "/assets/200ml.png",
        },
        {
            id: 3,
            name: "Special Offer - Paati Hair Oil 1000ml + Free Neem Comb",
            originalPrice: 1999,
            discountedPrice: 1599,
            image: "/assets/1liter.png",
        },
        {
            id: 4,
            name: "Special Offer - Neem Comb + Free Seed Pencil",
            originalPrice: 200,
            discountedPrice: 190,
            image: "/assets/neem-1.png",
        },
    ]);

    const [sortOrder, setSortOrder] = useState(""); 

    // Handle dropdown change
    const handleSortChange = (e: any) => {
        const order = e.target.value;
        setSortOrder(order);
        // Sort products
        
        const sortedProducts = [...products].sort((a, b) => {
            if (order === "lowToHigh") {
                return a.discountedPrice - b.discountedPrice;
            } else if (order === "highToLow") {
                return b.discountedPrice - a.discountedPrice;
            }
            return 0;
        });

        setProducts(sortedProducts);
    };

    return (
        <section className="section-1">
            <Container>
                <div>
                    <h2 className="head-txt">Our Products</h2>

                    {/* Sorting Dropdown */}
                    <div className="d-flex justify-content-end mb-3">
                        <Form.Select
                            value={sortOrder}
                            onChange={handleSortChange}
                            className="filter"
                        >
                            <option value="">Sort by</option>
                            <option value="lowToHigh">Price: Low to High</option>
                            <option value="highToLow">Price: High to Low</option>
                        </Form.Select>
                    </div>

                    {/* Products */}
                    <div className="row p-lg-2">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="col-lg-3 col-md-6 col-sm-12 col-xs-12"
                            >
                                <div>
                                    <div className="product-box">
                                        <img
                                            src={product.image}
                                            className="img-fluid"
                                            alt={product.name}
                                        />
                                    </div>
                                    <div>
                                        <h6 className="p-name">{product.name}</h6>
                                        <p className="d-flex justify-content-between">
                                            <span className="price">
                                                <del>Rs. {product.originalPrice.toFixed(2)}</del>
                                            </span>
                                            <span className="price">
                                                Rs. {product.discountedPrice.toFixed(2)}
                                            </span>
                                        </p>
                                        <div className="btn-div-1">
                                            <Link to='/login'>
                                                <Button className="btn-1">Buy Now</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Product;

