import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import css from "./shared.css";

const Header = () => {
  const { user, logOut, setIsLoading } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/login";
  const handleLogOut = () => {
    logOut()
      .then((res) => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link
            className="navbar-brand text-white rounded-circle bg-primary p-2"
            to="/"
          >
            bermuda
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll p-3">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li>

              {!user.email ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    SignIn
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/myOrders">
                      My Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/manageOrders">
                      DashBoard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/addService">
                      Add Service
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/logOut"
                      onClick={handleLogOut}
                    >
                      <i className="fas fa-sign-in-alt"></i>SignOut
                    </Link>
                  </li>
                  <span className="fw-bold">{user.displayName}</span>
                  <img
                    src={user.photoURL}
                    className="rounded-circle"
                    style={{ width: "30px" }}
                    alt=""
                  />
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
