import React from "react";

const Banner = () => {
  return (
    <div className="text-center">
      <h1>Explore the World for Yourself</h1>
      <form className="d-flex mx-auto w-50">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Banner;
