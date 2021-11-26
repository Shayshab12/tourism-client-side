//user added list
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ManageOrder = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [updated, setUpdated] = useState({});

  const approveStatus = (id) => {
    const url = `https://obscure-bayou-63415.herokuapp.com/users/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Approved Successfully...");
          setUpdated(data);
          // setUsers(data);
        }
      });
  };
  useEffect(() => {
    fetch("https://obscure-bayou-63415.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        setIsLoading(true);
      });
  }, [updated]);
  const handleDelUser = (id) => {
    if (user.email) {
      const proceed = window.confirm("Are you sure,you wanna del this item?");
      if (proceed) {
        const url = `https://obscure-bayou-63415.herokuapp.com/users/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              alert("Data Deleted successfully...");
              const remainingOrder = users.filter((od) => od._id !== id);
              setUsers(remainingOrder);
            }
          });
      }
    } else {
      alert("please login");
    }
  };

  return (
    <>
      <div className="mx-3 mt-2">
        <div className="row">
          <div className="col-lg-2 col-12 mt-5">
            <p className="fw-bold">
              <Link className="text-decoration-none" to="/addService">
                <span className="fs-4 fw-bold">+ </span> Add Service
              </Link>
            </p>
            <p className="fw-bold">
              <Link className="text-decoration-none" to="/home">
                <span className="fs-4 fw-bold"># </span> View Services
              </Link>
            </p>
          </div>
          <div
            className="col-lg-10 col-12 pe-5 ps-4"
            style={{ backgroundColor: "#e6ffff", height: "100vh" }}
          >
            <div
              style={{ borderRadius: "15px" }}
              className="px-5 bg-white mt-4 table-responsive"
            >
              <table className="table table-white table-hover">
                <thead style={{ backgroundColor: "#F5F6FA" }}>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email Id</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col">Place List</th>
                    <th scope="col">Status</th>
                    <th scope="col">Approve</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                {isLoading ? (
                  users &&
                  users?.map((user) => (
                    <tbody key={user._id}>
                      <tr>
                        <th scope="row">{user.name}</th>
                        <td>{user.email}</td>
                        <td>{user.number}</td>
                        <td>{user.title}</td>
                        <td>{user?.status}</td>
                        <td>
                          {" "}
                          <button
                            className="btn btn-warning"
                            onClick={() => approveStatus(user._id)}
                          >
                            Click
                          </button>{" "}
                        </td>
                        <td>
                          <button
                            onClick={() => handleDelUser(user._id)}
                            className="btn btn-outline-danger"
                            type="button"
                          >
                            DEL
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))
                ) : (
                  <div className="d-flex justify-content-center my-3">
                    <Spinner animation="border" className="text-info" />
                  </div>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageOrder;
