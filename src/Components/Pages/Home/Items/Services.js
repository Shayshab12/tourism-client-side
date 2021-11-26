import React from "react";
import { useHistory } from "react-router-dom";
import items from "./items.css";

const Services = (props) => {
  const { title, description, image, _id, price } = props.place;
  const history = useHistory();
  const exploreDetails = () => {
    history.push(`/placeOrder/${_id}`);
  };
  return (
    <>
      <div className="col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
        <div className="imageContainer">
          <img src={image} style={{ width: "320px", height: "400px" }} alt="" />
          <div className="caption BL text-center">
            <h5 className="description">{description}</h5>

            <h2 className="title">{title}</h2>
            <button
              onClick={exploreDetails}
              className="btn btn-warning rounded-1 ms-0"
            >
              Book Now
            </button>
          </div>
          <div className="caption TL">${price}</div>
        </div>
      </div>
    </>
  );
};

export default Services;
