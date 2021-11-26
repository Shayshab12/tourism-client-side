import React from "react";
import { Link } from "react-router-dom";
import css from "./Blogs.css";

const Blogs = () => {
  return (
    <div className="text-center ">
      <div
        className="top d-flex align-items-center justify-content-center "
        data-aos="fade"
        data-aos-duration="2000"
      >
        <div className="text-white">
          <h1 className="text-white">Exotic Beaches of ROAM</h1>
          <h3>
            Modern & Beautiful WordPress Theme for all Kinds of Travel and
            Tourism Busines.
          </h3>
        </div>
      </div>
      <div className="container p-3 my-5">
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              <div
                className="col-lg-12"
                data-aos="fade"
                data-aos-duration="500"
                data-aos-easing="linear"
              >
                <img
                  src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/blog-post-img-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-12 text-start my-3">
                <h1>Exotic Beaches</h1>
                <div className="d-lg-flex shadow p-3">
                  <img
                    src="https://secure.gravatar.com/avatar/5a846190a073d9f419b10632ad352119?s=124&d=mm&r=g"
                    className="me-3"
                    alt=""
                  />
                  <div>
                    <h5 className="text-info">Tourist</h5>
                    <p className="m-auto text-muted">
                      We have every California beach campground covered on our
                      site. Many are right on the beach so watching the sunset
                      before heading back to your camp spot is easy. California
                      Beach Weather Averages by Month. If you are planning a
                      beach vacation in California it helps to understand the
                      weather before you go.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="row">
              <div className="col-lg-12">
                <form className="d-flex mx-auto">
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
              <div className="col-lg-12 mt-5">
                <div className="text-start">
                  <h2>About Author</h2>
                  <p className="text-muted">
                    “Virginians don’t belong in Maryland for the same reason
                    Marylanders don’t belong in Virginia. When we meet, it
                    should be in DC where everyone is the same kind of nasty:
                    feds.” ― Ian Kirkpatrick, Bleed More, Bodymore
                  </p>
                </div>
              </div>
              <div className="col-lg-12 mt-5">
                <div className="text-start">
                  <h2>Categories</h2>
                  <Link to="/blogs" className="nav-link text-dark">
                    @Maldives
                  </Link>
                  <Link to="/blogs" className="nav-link text-dark">
                    @Indonesia
                  </Link>
                  <Link to="/blogs" className="nav-link text-dark">
                    @Peris
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-25 my-5 mx-auto" />
    </div>
  );
};

export default Blogs;
