import React from "react";
import { HiShare, HiOutlineBookmark } from "react-icons/hi";
import { FaStarHalfAlt, FaStar, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Newes = ({ news }) => {
  // console.log(news);
  const {
    author,
    details,
    image_url,
    rating,
    title,
    total_view,
  } = news;
  const newDetails = details.slice(0,250);

  return (
    <div  className="border border-t-0 my-3">
    {/* Heading Section  */}
      <div className="flex items-center rounded-md" style={{backgroundColor: '#F3F3F3'}}>
        <div className="avatar p-4">
          <div className="w-12 rounded-full">
            <img src={author.img} alt="User" />
          </div>
        </div>
        <div className="ms-2">
          <p className="m-0 font-bold"><small>{author.name}</small></p>
          <p className="m-0"><small>{author.published_date}</small></p>
        </div>
        <div className="ms-auto flex p-4">
          <HiOutlineBookmark className="mx-2"></HiOutlineBookmark>
          <HiShare className="me-2"></HiShare>
        </div>
      </div>

      {/* Body Section  */}
      <div>
        <div className="px-4 space-y-2">
          <h2 className="text-lg font-bold">{title}</h2>
          <img src={image_url} alt="News-thumbnail" />
          <p  style={{color: 'gray'}}>{newDetails}...</p>
          <Link to={`/details/${news._id}`} state={{news: news}} className="font-semibold" style={{color:'tomato'}}>Read More</Link>
        </div>
        <div className="px-4">
          <hr />
        </div>
        <div className="p-4 flex items-center">
          <div className="flex items-center space-x-2" style={{color: 'tomato'}}>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStarHalfAlt></FaStarHalfAlt>
            <p style={{color:'gray'}}>{rating.number}</p>
          </div>
          <div className="flex items-center ms-auto space-x-2" style={{color: 'gray'}}>
            <FaEye></FaEye>
            <p>{total_view}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Newes;
