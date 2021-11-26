import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import css from "./addservice.css";
const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://obscure-bayou-63415.herokuapp.com/addPlace", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Service Added successfully");
          reset();
        }
      });
    console.log(data);
  };
  return (
    <div className="my-3 p-3 back" data-aos="fade" data-aos-duration="2000">
      <h1 className="mt-5 text-center text-white ">Include Service</h1>
      <div className="login-box width m-auto mt-1  p-5 border">
        <div className="event-box  p-3  d-flex justify-content-center align-items-center">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)} className="p-3">
              <input
                {...register("title")}
                placeholder="Place Name"
                className="p-3 m-2 w-100 rounded-3"
              />
              <br />
              <input
                {...register("price")}
                type="number"
                placeholder="Offer Price"
                className="p-3 m-2 w-100 rounded-3"
              />
              <br />
              <input
                {...register("description")}
                placeholder="Description"
                className="p-3 m-2 w-100 rounded-3"
              />
              <br />

              <input
                {...register("image", { required: true })}
                placeholder="Image URL"
                className="p-3 m-2 w-100 rounded-3"
              />
              <br />

              <input
                type="submit"
                value="Add Service"
                className="btn btn-warning w-50 mt-2 p-2 ms-2"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
