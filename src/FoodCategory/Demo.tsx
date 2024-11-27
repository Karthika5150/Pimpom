// import React, { useState } from "react";
// import { Button, Container } from "react-bootstrap";
// import { useLocation } from "react-router";

// const FoodCategory = () => {
//     const [startIndex, setStartIndex] = useState(0);
//     const maxVisibleItems = 6;

//     // Handlers for pagination
//     const handleNext = () => {
//         if (startIndex + maxVisibleItems < filteredItems.length) {
//             setStartIndex((prevIndex) => prevIndex + 1);
//         }
//     };

//     const handlePrevious = () => {
//         if (startIndex > 0) {
//             setStartIndex((prevIndex) => prevIndex - 1);
//         }
//     };

//     // Get query params from the URL
//     const location = useLocation();
//     const queryParams = new URLSearchParams(location.search);
//     const filter = queryParams.get("filter");
//     const dietFilter = queryParams.get("diet");

//     // Food items
//     const foodItems = [
//         { ImgSrc: '/assets/tiffin.png', name: 'South Indian Tiffin', category: 'Tiffin', diet: "Veg" },
//         { ImgSrc: '/assets/northtiffin.png', name: 'North Indian Tiffin', category: 'Tiffin', diet: "Veg" },
//         { ImgSrc: '/assets/vada.png', name: 'Vada', category: 'Vada', diet: "Veg" },
//         { ImgSrc: '/assets/sambar-vadai.png', name: 'Sambar Vada', category: 'Vada', diet: "Veg" },
//         { ImgSrc: '/assets/paruppu-vadai.png', name: 'Parppu Vada', category: 'Vada', diet: "Veg" },
//         { ImgSrc: '/assets/curd-vadai.png', name: 'Curd Vada', category: 'Vada', diet: "Veg" },
//         { ImgSrc: '/assets/dal-vadai.png', name: 'Methu Vada', category: 'Vada', diet: "Veg" },
//         { ImgSrc: '/assets/keera-vadai.png', name: 'Keera Vada', category: 'Vada', diet: "Veg" },
//         { ImgSrc: '/assets/coffe.png', name: 'Coffee', category: 'Coffee', diet: "Veg" },
//         { ImgSrc: '/assets/tea.png', name: 'Tea', category: 'Tea', diet: "Veg" },
//         { ImgSrc: '/assets/cake.png', name: 'Cake', category: 'Cake', diet: "Non-Veg" },
//         { ImgSrc: '/assets/dosa.png', name: 'Dosa', category: 'Dosa', diet: "Non-Veg" },
//         { ImgSrc: '/assets/idly.png', name: 'Idly', category: 'Idly', diet: "Veg" },
//         { ImgSrc: '/assets/biryani.png', name: 'Biryani', category: 'Biryani', diet: "Non-Veg" },
//         { ImgSrc: '/assets/pongal.png', name: 'Pongal', category: 'Pongal', diet: "Veg" },
//         { ImgSrc: '/assets/poori.png', name: 'Poori', category: 'Poori', diet: "Veg" },
//         { ImgSrc: '/assets/burgar.png', name: 'Burgar', category: 'Burgar', diet: "Non-Veg" },
//         { ImgSrc: '/assets/egg.png', name: 'Egg', category: 'Egg', diet: "Non-Veg" },
//         { ImgSrc: '/assets/pasta.png', name: 'Pasta', category: 'Pasta', diet: "Veg" },
//         { ImgSrc: '/assets/pizza.png', name: 'Pizza', category: 'Pizza', diet: "Non-Veg" },
//         { ImgSrc: '/assets/chat.png', name: 'Chat', category: 'Chat', diet: "Veg" },
//         { ImgSrc: '/assets/friedrice.png', name: 'FriedRice', category: 'FriedRice', diet: "Veg" },
//         { ImgSrc: '/assets/noodles.png', name: 'Noodles', category: 'Noodles', diet: "Veg" },
//         { ImgSrc: '/assets/parattha.png', name: 'Paratha', category: 'Paratha', diet: "Veg" },
//         { ImgSrc: '/assets/soup.png', name: 'Soup', category: 'Soup', diet: "Veg" },
//     ];

//     // Designs based on categories
//     const designs = {
//         NonVeg: {
//             Chicken: [
//                 { id: 1, name: "Chicken Biryani", imgSrc: "/assets/biryani.png", Video: '/public/assets/chicken-biriyani.mp4' },
//                 { id: 2, name: "Chicken Soup", imgSrc: "/assets/chicken-soup.png", Video: '/public/assets/chicken-biriyani.mp4' },
//                 { id: 3, name: "Chicken 65", imgSrc: "/assets/chicken-65.png", Video: '/public/assets/chicken-biriyani.mp4' },
//                 { id: 4, name: "Chicken Curry", imgSrc: "/assets/Chicken-curry.png", Video: '/public/assets/chicken-biriyani.mp4' },
//                 { id: 5, name: "Chicken FriedRice", imgSrc: "/assets/chickenrice.png", Video: '/public/assets/chicken-biriyani.mp4' },
//             ],
//             // Similar subcategories for Pork, Mutton, Beef, Fish...
//         },
//         Veg: [
//             { id: 9, name: "Paneer Butter Masala", imgSrc: "/assets/paneer-butter.png" },
//             { id: 10, name: "Paneer Tikka", imgSrc: "/assets/paneer-tikka.png" },
//             { id: 11, name: "Mushroom Curry", imgSrc: "/assets/mushroom-curry.png" },
//             { id: 12, name: "Dal Tadka", imgSrc: "/assets/dal-tadka.png" },
//             { id: 13, name: "Vegetable Biryani", imgSrc: "/assets/veg-biryani.png" },
//             { id: 14, name: "Veg Pulao", imgSrc: "/assets/veg-pulao.png" },
//         ],
//     };

//     // Filter the food items based on query params
//     let filteredItems = filter ? foodItems.filter((item) => item.category === filter) : foodItems;

//     if (dietFilter) {
//         filteredItems = filteredItems.filter((item) => item.diet === dietFilter);
//     }

//     type NonVegSubcategory = keyof typeof designs.NonVeg;

//     const [selectedSubcategory, setSelectedSubcategory] = useState<NonVegSubcategory | null>(null);

//     const filteredDesigns =
//         filter === "Non-Veg" && selectedSubcategory
//             ? designs.NonVeg[selectedSubcategory] || []  // Safe fallback if subcategory doesn't exist
//             : filter === "Veg"
//                 ? designs.Veg
//                 : [];


//     return (
//         <section className="section-home-1">
//             <Container>
//                 <h1 className="head-txt">Food Categories: {filter || "All"}</h1>

//                 {/* Non-Veg Subcategory Selection */}
//                 {filter === "Non-Veg" && (
//                     <div>
//                         <p className="para-txt pt-3">Select Subcategory</p>
//                         <div className="non-veg-design">
//                             {Object.keys(designs.NonVeg).map((subcategory) => (
//                                 <Button
//                                     key={subcategory}
//                                     className="btn-2"
//                                     onClick={() => setSelectedSubcategory(subcategory as NonVegSubcategory)}
//                                 >
//                                     {subcategory}
//                                 </Button>
//                             ))}
//                         </div>

//                         {/* Display Designs */}
//                         <div className="non-veg-div">
//                             {filteredDesigns.length > 0 ? (
//                                 filteredDesigns.map((design: any) => (
//                                     <div key={design.id} className="design-item">
//                                         <div className="design-img">
//                                             <img src={design.imgSrc} className="img-fluid" alt={design.name} />
//                                         </div>
//                                         <p className="design-non-name">{design.name}</p>
//                                     </div>
//                                 ))
//                             ) : (
//                                 <p className="para-txt">Please Select Your SubCategory</p>
//                             )}
//                         </div>

//                         {/* Video Section */}
//                         <div className="pt-3">
//                             <h2 className="head-txt">See Our Video's</h2>
//                             {filteredDesigns.length > 0 ? (
//                                 filteredDesigns.map((design: any) => (
//                                     <div className="row" key={design.id}>
//                                         <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
//                                             <video controls>
//                                                 <source src={design.Video} type="video/mp4" />
//                                             </video>
//                                         </div>
//                                     </div>
//                                 ))
//                             ) : (
//                                 <p>None</p>
//                             )}
//                         </div>
//                     </div>
//                 )}
//                 {/* Pagination */}
//                 <div className="pagination">
//                     <Button onClick={handlePrevious} disabled={startIndex === 0}>Previous</Button>
//                     <Button onClick={handleNext} disabled={startIndex + maxVisibleItems >= filteredItems.length}>Next</Button>
//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default FoodCategory;



// // import React, { useState } from "react";

// // const FoodCategory = () => {    const designs = {
// //     NonVeg: {
// //         Chicken: [
// //             { id: 1, name: "Chicken Biryani", imgSrc: "/assets/biryani.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //             { id: 2, name: "Chicken Soup", imgSrc: "/assets/chicken-soup.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //             { id: 3, name: "Chicken 65", imgSrc: "/assets/chicken-65.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //             { id: 4, name: "Chicken Curry", imgSrc: "/assets/Chicken-curry.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //             { id: 5, name: "Chicken FriedRice", imgSrc: "/assets/chickenrice.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //         ],
// //         Pork: [
// //             { id: 1, name: "Pork Rice", imgSrc: "/assets/biryani.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //             { id: 2, name: "Pork Soup", imgSrc: "/assets/chicken-soup.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //             { id: 3, name: "Pork 65", imgSrc: "/assets/chicken-65.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //             { id: 4, name: "Pork Curry", imgSrc: "/assets/Chicken-curry.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //             { id: 5, name: "Pork BBQ", imgSrc: "/assets/chickenrice.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //         ],
// //         Mutton: [
// //             { id: 1, name: "Mutton Biryani", imgSrc: "/assets/biryani.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //             { id: 2, name: "Mutton Soup", imgSrc: "/assets/chicken-soup.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //             { id: 3, name: "Mutton 65", imgSrc: "/assets/chicken-65.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //             { id: 4, name: "Mutton Curry", imgSrc: "/assets/Chicken-curry.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //             { id: 5, name: "Mutton FriedRice", imgSrc: "/assets/chickenrice.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //         ],
// //         Beef: [
// //             { id: 1, name: "Beef Biryani", imgSrc: "/assets/biryani.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //             { id: 2, name: "Beef Soup", imgSrc: "/assets/chicken-soup.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //             { id: 3, name: "Beef 65", imgSrc: "/assets/chicken-65.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //             { id: 4, name: "Beef Curry", imgSrc: "/assets/Chicken-curry.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //             { id: 5, name: "Beef FriedRice", imgSrc: "/assets/chickenrice.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //         ],
// //         Fish: [
// //             { id: 1, name: "Fish Biryani", imgSrc: "/assets/biryani.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //             { id: 2, name: "Fish Fry", imgSrc: "/assets/chicken-soup.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //             { id: 3, name: "Fish 65", imgSrc: "/assets/chicken-65.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //             { id: 4, name: "Fish Curry", imgSrc: "/assets/Chicken-curry.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //             { id: 5, name: "Fish Egg", imgSrc: "/assets/chickenrice.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //         ],
// //     },
// //     Veg: [
// //         { id: 9, name: "Paneer Butter Masala", imgSrc: "/assets/paneer-butter.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //         { id: 10, name: "Paneer Tikka", imgSrc: "/assets/paneer-tikka.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //         { id: 11, name: "Mushroom Curry", imgSrc: "/assets/mushroom-curry.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //         { id: 12, name: "Dal Tadka", imgSrc: "/assets/dal-tadka.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //         { id: 13, name: "Vegetable Biryani", imgSrc: "/assets/veg-biryani.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //         { id: 14, name: "Veg Pulao", imgSrc: "/assets/veg-pulao.png", Video: '/public/assets/chicken-biriyani.mp4' },
// //     ],
// // };

// //     const [selectedDesign, setSelectedDesign] = useState(null); // State to track selected design

// //     // Filter designs based on the selected design
// //     const filteredDesigns = selectedDesign
// //         ? designs.filter((design:any) => design.name === selectedDesign)
// //         : designs;

// //     return (
// //         <div>
// //             {/* Images Div */}
// //             <div className="non-veg-div">
// //                 {designs.length > 0 ? (
// //                     designs.map((design:any) => (
// //                         <div
// //                             key={design.id}
// //                             className={`design-item ${selectedDesign === design.name ? "active" : ""}`}
// //                             onClick={() => setSelectedDesign(design.name)} // Set selected design on click
// //                         >
// //                             <div className="design-img">
// //                                 <img
// //                                     src={design.imgSrc}
// //                                     className="img-fluid"
// //                                     alt={design.name}
// //                                 />
// //                             </div>
// //                             <p className="design-non-name">{design.name}</p>
// //                         </div>
// //                     ))
// //                 ) : (
// //                     <p className="para-txt">Please Select Your SubCategory</p>
// //                 )}
// //             </div>

// //             {/* Video's Div */}
// //             <div className="pt-3">
// //                 <h2 className="head-txt">See Our Video's</h2>
// //                 <div className="video-container">
// //                     {filteredDesigns.length > 0 ? (
// //                         filteredDesigns.map((design:any) => (
// //                             <div key={design.id}>
// //                                 <div className="video-design">
// //                                     <div>
// //                                         <video controls>
// //                                             <source src={design.Video} type="video/mp4" />
// //                                         </video>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         ))
// //                     ) : (
// //                         <p>None</p>
// //                     )}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default FoodCategory;



import React, { useState } from 'react';
// import FoodCategory from './FoodCategory';

const FoodCategory = () => {
    const recipes = [
        { id: 1, name: 'Chicken Biryani', video: '/public/assets/chicken-biriyani.mp4' },
        { id: 2, name: 'Chicken 65', video: '/public/assets/chicken-biriyani.mp44' },
        { id: 3, name: 'Chicken Soup', video: '/public/assets/chicken-biriyani.mp4' },
    ];

    const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);

    const handleClick = (recipeName: string) => {
        setSelectedRecipe(recipeName);
        console.log(`You selected: ${recipeName}`);
    };



    return (
        <div>
            <h2>Recipe List</h2>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <button onClick={() => handleClick(recipe.name)}>
                            {recipe.name}
                        </button>
                    </li>
                ))}
            </ul>

            {selectedRecipe && (
                <><div>
                    <h3>Selected Recipe: {selectedRecipe}</h3>
                    <p>Watch the video for {selectedRecipe}!</p>
                </div>

                    <div>
                        {/* {recipes
                        .filter((recipe) => (recipe.name === selectedRecipe)
                        .map((recipe: { video: string | undefined; }) => (

                            <video controls >
                                <source src={recipe.video} type="video/mp4" />
                            </video>
                        )))} */}

                        {recipes
                            .filter((recipe) => recipe.name === selectedRecipe)
                            .map((filteredRecipe) => (
                                <video key={filteredRecipe.id} controls>
                                    <source src={filteredRecipe.video} type="video/mp4" />
                                </video>
                            ))}


                    </div>
                </>
            )}

        </div>
    );
};

export default FoodCategory;


