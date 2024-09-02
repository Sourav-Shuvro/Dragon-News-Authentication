import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Newes from '../Home/Newes';

const Categories = () => {
    const newes = useLoaderData();
    const allNews = newes.data;
    return (
        <div className='p-4 my-4'>
            {
                allNews.map( news => <Newes news={news} key={news._id}></Newes>)
            }
        </div>
    );
};

export default Categories;