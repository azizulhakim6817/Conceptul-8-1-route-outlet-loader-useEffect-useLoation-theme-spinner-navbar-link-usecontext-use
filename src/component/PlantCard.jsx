import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PlantCard = ({ plant }) => {
  const { id, name, description, image, price, category } = plant;

  //* 1-staps: <Link/> --- state={plant}----------
  {
    /* <Link
    state={plant}
    to={`/plants-details/${id}`}
    className="btn btn-primary w-full"
  >
    Buy Now
  </Link>; */
  }

  //* 2-staps:- App.js---router-loader-useParams(id)---

  //* 3-staps: -----------button---useNevigate()----------
  //const navigate = useNavigate();
  /* const handlecClick = () => {
    navigate(`/plants-details/${id}`, { state: plant });
  }; */

  return (
    <div>
      <div
        className="card shadow-xl dark:bg-white
       "
      >
        <figure>
          <img
            className="w-full h-[280px] object-cover"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
          <p>{description}</p>
          <p className="text-[18px] font-semibold">{category}</p>
          <p className="mb-2 text-[18px] font-semibold">${price}</p>
          <div className="card-actions justify-end">
            <Link
              state={plant}
              to={`/plants-details/${id}`}
              className="btn btn-primary w-full"
            >
              Buy Now
            </Link>
            {/*  <button
              onClick={handlecClick}
              className="w-full btn bg-green-600 text-white"
            >
              Visite Now
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
