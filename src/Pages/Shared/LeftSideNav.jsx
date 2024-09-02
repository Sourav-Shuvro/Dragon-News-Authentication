import React, { useEffect, useState } from 'react';
import {NavLink } from 'react-router-dom';
import './LeftsideNav.css';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then( res => res.json())
        .then( data => setCategories(data))
    },[])
    return (
        <div className='p-4 my-4 space-y-3'>
            <h2 className="text-lg font-bold">All Category</h2>
            {
                categories.map( category => <p key={category.id} className='ms-5 md:block sm:inline' style={{color: '#9F9F9F'}}>
                    <NavLink to={`/categories/${category.id}`}
                    >{category.name}</NavLink>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;