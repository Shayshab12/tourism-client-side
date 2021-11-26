import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import css from "./order.css";
const MyOrders = () => {
  const { user } = useAuth();

  const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`https://obscure-bayou-63415.herokuapp.com/users`)
      .then((res) => res.json())
      .then((data) => {
        const orderedItems = data.filter((ud) => ud.email === user?.email);
        setOrder(orderedItems);
        console.log(data);
        setIsLoading(true);
      });
  }, [user.email, isLoading]);
  console.log(order);

  const handleDelUser = (id) => {
    const proceed = window.confirm("Are you sure,you wanna del this item?");
    if (proceed) {
      const url = `https://obscure-bayou-63415.herokuapp.com/users/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("del success");
            const remainingOrder = order.filter((ord) => ord._id !== id);
            setOrder(remainingOrder);
          }
        });
    }
  };
  return (
    <div className="text-center container my-3 bg-white">
      <h1>My Orders</h1>
      <h3 className="mb-3">Total Orders: {order.length}</h3>
      <div className="row">
        {isLoading ? (
          order?.map((od) => (
            <>
              <div className="col-lg-4">
                <div
                  key={od._id}
                  className="card mb-3 shadow"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={od.image}
                        className="w-100 rounded-start"
                        height="100%"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8 info">
                      <div className="card-bordery mt-5 ">
                        <h3 className="card-title">{od.title}</h3>
                        <p className="card-text text-dark">{od.description}</p>
                        <h2 className="card-text text-dark">
                          <span className="">{od.name}</span>
                        </h2>
                        <p className="card-text text-danger">
                          <small className="text-muted">
                            Status:{od.status}
                          </small>
                        </p>

                        <button
                          onClick={() => handleDelUser(od._id)}
                          className="btn btn-warning mb-2"
                        >
                          Cancel Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))
        ) : (
          <div className="text-center my-3">
            <Spinner animation="border" className="danger" />
          </div>
        )}
      </div>
      <Link to="/home" className="btn btn-info mt-3">
        Book More Service
      </Link>
    </div>
  );
};

export default MyOrders;
