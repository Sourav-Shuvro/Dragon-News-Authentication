import React, { useEffect, useState } from "react";
import Newes from "./Newes";

const Home = () => {

  const [newes, setNewes] = useState([]);
  useEffect(()=>{
    fetch('https://openapi.programming-hero.com/api/news/category/01')
    .then( res => res.json())
    .then( data => setNewes(data.data))
  },[])
  return (
    <div className="p-4 my-4">
      {
        newes.map( news => <Newes news={news} key={news._id}></Newes>)
      }
    </div>
  );
};

export default Home;
