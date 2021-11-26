import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router";
import useFirebase from "../../hooks/useFirebase";

const ExploreDetails = () => {
  const { user } = useFirebase();

  const { _id } = useParams();
  const [place, setPlace] = useState({});
  const history = useHistory();
  useEffect(() => {
    fetch(`https://obscure-bayou-63415.herokuapp.com/places/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setPlace(data);

        console.log(data);
      });
  }, [_id]);
  const addressRef = useRef();
  const contactNumRef = useRef();
  const nameRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const emailRef = useRef();
  const statusRef = useRef();
  const imageRef = useRef();

  const handleSubmit = (e) => {
    const address = addressRef.current.value;
    const number = contactNumRef.current.value;
    const name = nameRef.current.value;
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const email = emailRef.current.value;
    const status = statusRef.current.value;
    const image = imageRef.current.value;
    const data = {
      address,
      number,
      title,
      name,
      description,
      email,
      status,
      image,
    };
    fetch("https://obscure-bayou-63415.herokuapp.com/addUserData", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Successfully added the user.");
          e.target.reset();
        }
      });
    history.push("/myOrders");
    console.log(data);
  };

  return (
    <div className="text-center">
      <div className="row d-lg-flex justify-content-center align-items-center">
        <div className="col-lg-4">
          <div
            className="card shadow-lg mx-auto mb-2 text-center text-dark p-3"
            style={{ width: "18rem" }}
            data-aos="flip-down"
            data-aos-duration="1500"
          >
            <img
              src={place.image}
              className="card-img-top coverImg"
              height="260px"
              alt="..."
            />
            <div className="card-body">
              <h1 className="card-title">{place.title}</h1>

              <p className="card-text text-muted">{place.description}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8 shadow">
          <h1 className="mt-5 text-center text-info">Book Your Service</h1>
          <div className="login-box w-50 m-auto mb-5 shadow">
            <div className="event-box border border d-flex justify-content-center align-items-center">
              <div className="login-form">
                <form onSubmit={handleSubmit} className="p-3 w-50 mx-auto">
                  <input
                    type="text"
                    className="p-2 m-2 w-100"
                    placeholder=""
                    ref={titleRef}
                    value={place.title}
                    required
                  />
                  <input
                    type="text"
                    className="p-2 m-2 w-100"
                    placeholder=""
                    ref={nameRef}
                    value={user.displayName}
                    required
                  />
                  <input
                    type="text"
                    className="p-2 m-2 w-100"
                    placeholder=""
                    ref={descriptionRef}
                    value={place.description}
                    required
                  />
                  <input
                    type="text"
                    className="p-2 m-2 w-100"
                    placeholder="Address"
                    ref={addressRef}
                    required
                  />
                  <input
                    type="number"
                    className="p-2 m-2 w-100"
                    placeholder="Contact Number"
                    ref={contactNumRef}
                    required
                  />
                  <input
                    type="email"
                    className="p-2 m-2 w-100"
                    placeholder=""
                    ref={emailRef}
                    value={user.email}
                    required
                  />
                  <input
                    type="text"
                    alt=""
                    className="p-2 m-2 w-100"
                    placeholder=""
                    ref={imageRef}
                    value={place.image}
                    required
                  />
                  <input
                    type="text"
                    className="p-2 m-2 w-100"
                    placeholder=""
                    ref={statusRef}
                    required
                    value="Pending"
                  />
                  <br />

                  <input
                    type="submit"
                    value="Place Order"
                    className="btn btn-info w-50"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreDetails;
