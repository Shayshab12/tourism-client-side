import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Banner from "./Items/Banner";
import Services from "./Items/Services";
import Explore from "./Items/Explore";
import ExploreMore from "./Items/ExploreMore";

const Home = () => {
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://obscure-bayou-63415.herokuapp.com/places")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlaces(data);
        setIsLoading(true);
      });
  }, [isLoading]);
  return (
    <div className="text-center">
      <Banner />
      <ExploreMore />
      <div className="container mt-5">
        <div className="row g-2">
          {isLoading ? (
            places?.map((place) => <Services key={place._id} place={place} />)
          ) : (
            <div className="text-center my-3">
              <Spinner animation="border" className="danger" />
            </div>
          )}
        </div>
      </div>
      <Explore />
    </div>
  );
};

export default Home;
