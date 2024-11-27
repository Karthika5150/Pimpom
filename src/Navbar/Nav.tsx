// import Container from 'react-bootstrap/Container';
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navs = () => {
//     return (
//         <>
//             <section className='section'>
//                 <Container>
//                     <div className='nav-contain'>
//                         <div className='nav-content'>
//                             <div>
//                                 <div className='logo-div'>
//                                     <img src='/assets/logo.png' className='img-fluid' alt="img" />
//                                 </div>
//                             </div>
//                             <div className='nav-center'>
//                                 <Link to="/" className='link'>
//                                     <p className='nav-txt'>Home</p>
//                                 </Link>

//                                 <Link to="/food-category" className='link'>
//                                     <p className='nav-txt'>FoodCategory</p>
//                                 </Link>
//                                 <Link to="/professional" className='link'>
//                                     <p className='nav-txt'>Otherprofessionals</p>
//                                 </Link>
//                                 <Link to="/about" className='link'>
//                                     <p className='nav-txt'>About</p>
//                                 </Link>
//                                 <Link to="/contact" className='link'>
//                                     <p className='nav-txt'>Contact</p>
//                                 </Link>
//                             </div>
//                             <div className=''>
//                                 <div className='nav-left'>
//                                     <p className='nav-txt-1'>
//                                         <i className="fi fi-br-search icon"></i>
//                                     </p>
//                                     <p className='nav-txt-1'>
//                                         <i className="fi fi-rr-circle-user icon"></i>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </Container>
//             </section>
//         </>
//     );
// }

// export default Navs;

import { Input } from 'antd';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';

const Navs = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim()) {
            // Navigate to the foodCategory component with the search query
            navigate(`/foodCategory`, { state: { query } });
        } else {
            // Reset the search
            navigate(`/foodCategory`, { state: { query: '' } });
        }
    };

    return (
        <section className='section'>
            <Container>
                <div className='nav-contain'>
                    <div className='nav-content'>
                        <div>
                            <div className='logo-div'>
                                <img src='/assets/logo.png' className='img-fluid' alt="img" />
                            </div>
                        </div>
                        <div className='nav-center'>
                            <Link to="/" className='link'>
                                <p className='nav-txt'>Home</p>
                            </Link>
                            <Link to="/food-category" className='link'>
                                <p className='nav-txt'>FoodCategory</p>
                            </Link>
                            <Link to="/professional" className='link'>
                                <p className='nav-txt'>Otherprofessionals</p>
                            </Link>
                            <Link to="/about" className='link'>
                                <p className='nav-txt'>About</p>
                            </Link>
                            <Link to="/contact" className='link'>
                                <p className='nav-txt'>Contact</p>
                            </Link>
                        </div>
                        <div>
                            <div className="nav-left">
                                <Input
                                    placeholder="Idly"
                                    className="input-search"
                                    suffix={<i className="fi fi-br-search icon icon-s"></i>}
                                    value={searchQuery}
                                    onChange={handleSearch}
                                />
                                <p className="nav-txt-1">
                                    <Link to='/login' className='link'>
                                        <i className="fi fi-rr-circle-user icon"></i>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Navs;

