import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ReviewItem = ({ comment }) => {
  const { name, body, img } = comment;
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="card bg-base-100 shadow-xl mx-auto lg:mx-5 mb-8 lg:h-96 h-[500px] w-5/6 lg:w-auto pt-4 text-center"
      data-aos="zoom-out"
    >
      <img className="w-20 h-20 mx-auto rounded-full" src={img} alt="Shoes" />
      <div className="card-body">
        <h1 className="text-xl">{name}</h1>
        <p className="text-left">{body.length > 100 ? body.split(80) : body}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
