import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useLocation } from "react-router";
import { Flex, Rate } from 'antd';

const FoodCategory = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [value, setValue] = useState(5);

    const maxVisibleItems = 6;

    const handleNext = () => {
        if (startIndex + maxVisibleItems < filteredItems.length) {
            setStartIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (startIndex > 0) {
            setStartIndex((prevIndex) => prevIndex - 1);
        }
    };

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const filter = queryParams.get("filter");
    const dietFilter = queryParams.get("diet");


    const foodItems = [
        { ImgSrc: '/assets/tiffin.png', name: 'South Indian Tiffin', category: 'Tiffin', diet: "Veg" },
        { ImgSrc: '/assets/northtiffin.png', name: 'North Indian Tiffin', category: 'Tiffin', diet: "Veg" },
        { ImgSrc: '/assets/vada.png', name: 'Vada', category: 'Vada', diet: "Veg" },
        { ImgSrc: '/assets/sambar-vadai.png', name: 'Sambar Vada', category: 'Vada', diet: "Veg" },
        { ImgSrc: '/assets/paruppu-vadai.png', name: 'Parppu Vada', category: 'Vada', diet: "Veg" },
        { ImgSrc: '/assets/curd-vadai.png', name: 'Curd Vada', category: 'Vada', diet: "Veg" },
        { ImgSrc: '/assets/dal-vadai.png', name: 'Methu Vada', category: 'Vada', diet: "Veg" },
        { ImgSrc: '/assets/keera-vadai.png', name: 'Keera Vada', category: 'Vada', diet: "Veg" },
        { ImgSrc: '/assets/coffe.png', name: 'Coffee', category: 'Coffee', diet: "Veg" },
        { ImgSrc: '/assets/tea.png', name: 'Tea', category: 'Tea', diet: "Veg" },
        { ImgSrc: '/assets/cake.png', name: 'Cake', category: 'Cake', diet: "Non-Veg" },
        { ImgSrc: '/assets/dosa.png', name: 'Dosa', category: 'Dosa', diet: "Non-Veg" },
        { ImgSrc: '/assets/idly.png', name: 'Idly', category: 'Idly', diet: "Veg" },
        { ImgSrc: '/assets/biryani.png', name: 'Biryani', category: 'Biryani', diet: "Non-Veg" },
        { ImgSrc: '/assets/pongal.png', name: 'Pongal', category: 'Pongal', diet: "Veg" },
        { ImgSrc: '/assets/poori.png', name: 'Poori', category: 'Poori', diet: "Veg" },
        { ImgSrc: '/assets/burgar.png', name: 'Burgar', category: 'Burgar', diet: "Non-Veg" },
        { ImgSrc: '/assets/egg.png', name: 'Egg', category: 'Egg', diet: "Non-Veg" },
        { ImgSrc: '/assets/pasta.png', name: 'Pasta', category: 'Pasta', diet: "Veg" },
        { ImgSrc: '/assets/pizza.png', name: 'Pizza', category: 'Pizza', diet: "Non-Veg" },
        { ImgSrc: '/assets/chat.png', name: 'Chat', category: 'Chat', diet: "Veg" },
        { ImgSrc: '/assets/friedrice.png', name: 'FriedRice', category: 'FriedRice', diet: "Veg" },
        { ImgSrc: '/assets/noodles.png', name: 'Noodles', category: 'Noodles', diet: "Veg" },
        { ImgSrc: '/assets/parattha.png', name: 'Paratha', category: 'Paratha', diet: "Veg" },
        { ImgSrc: '/assets/soup.png', name: 'Soup', category: 'Soup', diet: "Veg" },
    ];

    const designs = {
        NonVeg: {
            Chicken: [
                { id: 1, name: "Chicken Biryani", imgSrc: "/assets/biryani.png", Video: '/public/assets/chicken-biriyani.mp4' },
                { id: 2, name: "Chicken Soup", imgSrc: "/assets/chicken-soup.png", Video: '/public/assets/chicken-biriyani.mp4' },
                { id: 3, name: "Chicken 65", imgSrc: "/assets/chicken-65.png", Video: '/public/assets/chicken-biriyani.mp4' },
                { id: 4, name: "Chicken Curry", imgSrc: "/assets/Chicken-curry.png", Video: '/public/assets/chicken-biriyani.mp4' },
                { id: 5, name: "Chicken FriedRice", imgSrc: "/assets/chickenrice.png", Video: '/public/assets/chicken-biriyani.mp4' },
            ],
            Pork: [
                { id: 1, name: "Pork Rice", imgSrc: "/assets/biryani.png", Video: '/public/assets/chicken-biriyani.mp4' },
                { id: 2, name: "Pork Soup", imgSrc: "/assets/chicken-soup.png", Video: '/public/assets/chicken-biriyani.mp4' },
                { id: 3, name: "Pork 65", imgSrc: "/assets/chicken-65.png", Video: '/public/assets/chicken-biriyani.mp4' },
                { id: 4, name: "Pork Curry", imgSrc: "/assets/Chicken-curry.png", Video: '/public/assets/chicken-biriyani.mp4' },
                { id: 5, name: "Pork BBQ", imgSrc: "/assets/chickenrice.png", Video: '/public/assets/chicken-biriyani.mp4' },
            ],
            Mutton: [
                { id: 1, name: "Mutton Biryani", imgSrc: "/assets/biryani.png", Video: '/public/assets/chicken-biriyani.mp4' },
                { id: 2, name: "Mutton Soup", imgSrc: "/assets/chicken-soup.png", Video: '/public/assets/chicken-biriyani.mp4' },
                { id: 3, name: "Mutton 65", imgSrc: "/assets/chicken-65.png", Video: '/public/assets/chicken-biriyani.mp4' },
                { id: 4, name: "Mutton Curry", imgSrc: "/assets/Chicken-curry.png", Video: '/public/assets/chicken-biriyani.mp4' },
                { id: 5, name: "Mutton FriedRice", imgSrc: "/assets/chickenrice.png", Video: '/public/assets/chicken-biriyani.mp4' },
            ],
            Beef: [
                { id: 1, name: "Beef Biryani", imgSrc: "/assets/biryani.png", Video: '/public/assets/chicken-biriyani.mp4' },
                { id: 2, name: "Beef Soup", imgSrc: "/assets/chicken-soup.png", Video: '/public/assets/chicken-biriyani.mp4' },
                { id: 3, name: "Beef 65", imgSrc: "/assets/chicken-65.png", Video: '/public/assets/chicken-biriyani.mp4' },
                { id: 4, name: "Beef Curry", imgSrc: "/assets/Chicken-curry.png", Video: '/public/assets/chicken-biriyani.mp4' },
                { id: 5, name: "Beef FriedRice", imgSrc: "/assets/chickenrice.png", Video: '/public/assets/chicken-biriyani.mp4' },
            ],
            Fish: [
                { id: 1, name: "Fish Biryani", imgSrc: "/assets/biryani.png", Video: '/public/assets/chicken-biriyani.mp4' },
                { id: 2, name: "Fish Fry", imgSrc: "/assets/chicken-soup.png", Video: '/public/assets/chicken-biriyani.mp4' },
                { id: 3, name: "Fish 65", imgSrc: "/assets/chicken-65.png", Video: '/public/assets/chicken-biriyani.mp4' },
                { id: 4, name: "Fish Curry", imgSrc: "/assets/Chicken-curry.png", Video: '/public/assets/chicken-biriyani.mp4' },
                { id: 5, name: "Fish Egg", imgSrc: "/assets/chickenrice.png", Video: '/public/assets/chicken-biriyani.mp4' },
            ],
        },
        Veg: [
            { id: 9, name: "Paneer Butter Masala", imgSrc: "/assets/paneer-butter.png", Video: '/public/assets/chicken-biriyani.mp4' },
            { id: 10, name: "Paneer Tikka", imgSrc: "/assets/paneer-tikka.png", Video: '/public/assets/chicken-biriyani.mp4' },
            { id: 11, name: "Mushroom Curry", imgSrc: "/assets/mushroom-curry.png", Video: '/public/assets/chicken-biriyani.mp4' },
            { id: 12, name: "Dal Tadka", imgSrc: "/assets/dal-tadka.png", Video: '/public/assets/chicken-biriyani.mp4' },
            { id: 13, name: "Vegetable Biryani", imgSrc: "/assets/veg-biryani.png", Video: '/public/assets/chicken-biriyani.mp4' },
            { id: 14, name: "Veg Pulao", imgSrc: "/assets/veg-pulao.png", Video: '/public/assets/chicken-biriyani.mp4' },
        ],
    };

    let filteredItems = filter
        ? foodItems.filter((item) => item.category === filter)
        : foodItems;
    console.log(filter);
    console.log(filteredItems);

    if (dietFilter) {
        filteredItems = filteredItems.filter((item) => item.diet === dietFilter);
        console.log(dietFilter);
    }

    type NonVegSubcategory = "Chicken" | "Pork" | "Mutton" | "Beef" | "Fish";

    const [selectedSubcategory, setSelectedSubcategory] = useState<NonVegSubcategory | null>(null);

    const filteredDesigns =
        filter === "Non-Veg" && selectedSubcategory
            ? designs.NonVeg[selectedSubcategory]
            : filter === "Veg"
                ? designs.Veg
                : [];

    const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);

    const handleClick = (recipeName: string) => {
        setSelectedRecipe(recipeName);
        console.log(`You selected: ${recipeName}`);
    };



    return (
        <>
            <section className="section-home-1">
                <Container>
                    <div>
                        <h1 className="head-txt">Food Categories: {filter || "All"}</h1>


                        {/* Handle display for Non-Veg (with subcategories like Chicken, Pork, etc.) */}
                        <section>
                            <Container>
                                {filter === "Non-Veg" && (
                                    <div>
                                        <p className="para-txt pt-3">Select Subcategory</p>
                                        <div className="non-veg-design">
                                            {Object.keys(designs.NonVeg).map((subcategory) => (
                                                <Button
                                                    key={subcategory}
                                                    className="btn-2"
                                                    onClick={() => setSelectedSubcategory(subcategory as NonVegSubcategory)} // Casting to NonVegSubcategory
                                                >
                                                    {subcategory}
                                                </Button>
                                            ))}
                                        </div>

                                        {/* image-divs */}

                                        <div className="non-veg-div">
                                            {filteredDesigns.length > 0 ? (
                                                filteredDesigns.map((design) => (
                                                    <div key={design.id} className="design-item">
                                                        <div className="design-img">
                                                            <img src={design.imgSrc} className="img-fluid" alt={design.name} />
                                                        </div>
                                                        <p className="design-non-name" onClick={() => handleClick(design.name)}>{design.name}</p>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="para-txt">Please Select Your SubCategory</p>
                                            )
                                            }
                                        </div>

                                        {/* video's div */}

                                        {selectedRecipe && (
                                            <div className="pt-3">
                                                <h2 className="head-txt">Flavors Unveiled: Watch & Learn</h2>
                                                <div className="video-container">

                                                    {filteredDesigns
                                                        .filter((design) => design.name === selectedRecipe)
                                                        .map((filterreceipe) => (
                                                            <div className="" key={filterreceipe.id}>
                                                                <div className="video-design">
                                                                    <div>
                                                                        <video controls className="videos">
                                                                            <source src={filterreceipe.Video} type="video/mp4" />
                                                                        </video>

                                                                        <div className="rate-div">
                                                                            <div>
                                                                                <i className="fi fi-rr-circle-heart heart"></i>
                                                                            </div>
                                                                            <div>
                                                                                <Flex gap="middle" vertical>
                                                                                    <Rate onChange={setValue} className="rate" value={value} />
                                                                                </Flex>
                                                                            </div>
                                                                        </div>

                                                                        <p className="design-non-name text-center">{selectedRecipe}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>

                                        )}

                                    </div>
                                )}
                            </Container>
                        </section>

                        {filter !== "Non-Veg" && (
                            <div className="design-container">
                                {filteredDesigns.length > 0 ? (
                                    filteredDesigns.map((design) => (
                                        <div key={design.id} className="design-item">
                                            <img src={design.imgSrc} alt={design.name} />
                                            <p>{design.name}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="category-div">
                                        <div className="less-div">
                                            <Button onClick={handlePrevious} disabled={startIndex === 0} className="btn-1">
                                                <i className="fi fi-rr-caret-left less"></i>
                                            </Button>
                                        </div>

                                        <div className="catogory-type">
                                            {filteredItems.slice(startIndex, startIndex + maxVisibleItems).map((image, index) => (
                                                <div className="food-small-circle" key={index}>
                                                    <div className="food-category">
                                                        <img
                                                            src={image.ImgSrc}
                                                            className="img-fluid"
                                                            alt={`Slide ${startIndex + index + 1}`}
                                                        />
                                                    </div>
                                                    <p className="para-txt">{image.name}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="greater-div">
                                            <Button
                                                onClick={handleNext}
                                                disabled={startIndex + maxVisibleItems >= filteredItems.length}
                                                className="btn-1"
                                            >
                                                <i className="fi fi-rr-caret-right great"></i>
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                    </div>
                </Container>
            </section>

        </>
    );
};

export default FoodCategory;



