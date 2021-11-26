import React from "react";
import { Carousel } from "react-bootstrap";
import css from "./items.css";
const ExploreMore = () => {
  return (
    <Carousel
      data-aos="zoom-in"
      data-aos-duration="3000"
      className="carousel mt-3 mb-5"
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-5-slider-image-2.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="caption-details">
          <img
            src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h5-slide-3-title.png"
            alt=""
            className=""
          />
          <p className="text-white">
            “Like all great travelers, I have seen more than I remember, and
            remember more than I have seen.
          </p>
          <div className="d-lg-flex justify-content-center">
            <button className="btn btn-warning fw-bold p-3 mx-2">
              <i className="fas fa-id-card-alt"></i>Get Form
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-5-slider-image-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="caption-details">
          <img
            src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-5-slider-graphic.png"
            alt=""
            className=""
          />
          <p className="text-white">
            Roam is simply stunning theme perfect for all <br />
            types of travel and tourism business.
          </p>
          <div className="d-lg-flex justify-content-center">
            <button className="btn btn-warning fw-bold p-3 mx-2">
              <i className="fas fa-id-card-alt"></i>Get Form
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-5-slider-image-3.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="caption-details">
          <img
            src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h5-slide-2-title.png"
            alt=""
            className=""
          />
          <p className="text-white">
            Travelling helps you to gain Experiences. It takes courage to hike
            mountains.
          </p>
          <div className="d-lg-flex justify-content-center">
            <button className="btn btn-warning fw-bold p-3 mx-2">
              <i className="fas fa-id-card-alt"></i>Get Form
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ExploreMore;
