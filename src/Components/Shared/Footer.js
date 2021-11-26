import React from "react";
import css from "./shared.css";

const Footer = () => {
  return (
    <div className="bg-primary text-light p-5 footer">
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-4 text-center">
            <div className="text-start">
              <h2>Bermuda Tourism</h2>
              <h6>
                Address: 685 Lane Drive St. California, 33020 <br />
                Phone: +010 234 7892 34 <br />
                E-mail: info@bermuda.us
              </h6>
            </div>
            <hr />
            <div className="ms-4 text-start">
              <h2 className="">Contact US</h2>
              <p className="icons">
                <a
                  className="socialmedia-link"
                  href="https://www.facebook.com/shayshab.paul.9/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="socialmedia-link" href="https://www.twitter.com">
                  <i className="fab fa-twitter" target="_blank"></i>
                </a>

                <a
                  className="socialmedia-link"
                  href="https://www.instagram.com/Shayshabpaul/"
                >
                  <i className="fab fa-instagram" target="_blank"></i>
                </a>
                <a
                  className="socialmedia-link"
                  href="https://www.linkedin.com/in/shayshab-paul-16bb37153/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i className="fab fa-linkedin"></i>
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-2">
            <h3>Pages</h3>
            <p>Home</p>
            <p>About US</p>
            <p>Services</p>
            <p>Booking</p>
            <p>Blogs</p>
            <p>Contacts</p>
          </div>
          <div className="col-lg-2">
            <h3>Social</h3>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Youtube</p>
            <p>Twitter</p>
          </div>
          <div className="col-lg-4 px-3">
            <h3>Photos</h3>
            <hr className="w-25 text-warning" />
            <div className="row g-2" data-aos="fade-right">
              <div className="col-3">
                <img
                  src="https://live.staticflickr.com/65535/51421116492_e1409061ab_m.jpg"
                  className="w-100 "
                  height="65px"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  src="https://live.staticflickr.com/65535/51382991853_7e6659d8ed_m.jpg"
                  className="w-100 "
                  height="65px"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  src="https://live.staticflickr.com/65535/51416227441_5baf847fe8_m.jpg"
                  className="w-100 "
                  height="65px"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  src="https://live.staticflickr.com/65535/51409009988_a3f7dd2cef_m.jpg"
                  className="w-100 "
                  height="65px"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  src="https://live.staticflickr.com/65535/51589871298_97e2bb400f_m.jpg"
                  className="w-100 "
                  height="65px"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  src="https://live.staticflickr.com/65535/51378229454_a7fe765a17_m.jpg"
                  className="w-100 "
                  height="65px"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  src="https://live.staticflickr.com/65535/51407335355_a84e6ec951_m.jpg"
                  className="w-100 "
                  height="65px"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  src="https://live.staticflickr.com/65535/51593831160_f90c3b9b2e_m.jpg"
                  className="w-100 "
                  height="65px"
                  alt=""
                />
              </div>
              <div className="col-3">
                <img
                  src="https://live.staticflickr.com/65535/51593831160_f90c3b9b2e_m.jpg"
                  className="w-100 "
                  height="65px"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
