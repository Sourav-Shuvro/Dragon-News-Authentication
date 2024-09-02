import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Details = () => {
  let { state } = useLocation();
  // const news = state.news;
  console.log(news)
  const { details, image_url, title, category_id} = news;
  return (
    <div className="p-4 my-4">
      <div className="px-4 space-y-2">
        <img src={image_url} alt="news" />
        <h2 className="text-lg font-semibold">{title}</h2>
        <p style={{color:'gray'}}>{details}</p>
        <Link to={`/categories/${category_id}`} className='btn btn-error' style={{color:'white'}}><FaArrowLeft></FaArrowLeft> All News in this Category</Link>
      </div>
    </div>
  );
};

export default Details;
