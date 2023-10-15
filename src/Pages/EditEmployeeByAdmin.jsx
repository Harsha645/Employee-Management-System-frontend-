import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import OAuth from "../component/OAuth";
import CheckBox from "../component/CheckBox";
import { toast } from "react-toastify";
import axios from "axios";

export default function EditEmployeeByAdmin(props) {
  const {id,loadEmployees } = props;
 

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    // id:id,
    name: "",
    email: "",
    password: "",
    contact_number: "",
  });
  const { name,email,contact_number, password } = formData;

  function onChange(event) {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }

  const updateEmployee = async () => {
    event.preventDefault();
    console.log("kkkkk");
    // console.log(id);
    
    await axios
      .put("http://localhost:8081/employee/update-employee-by-admin/" + id, {
        name: name,
        email: email,
        contact_number: contact_number,
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Updated");
          loadEmployees();
        }
        navigate("/employees");
      })
      .catch((err) => console.log(err));
  };
  
  function onSubmit() {}

  return (
    <section>
      <h1 className="text-4xl font-serif mt-6 text-center">Edit Employee</h1>
      <div className=" flex justify-center items-center px-6 py-16 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 ">
          <img
            className="w-5/6  h-3/5 object-contain rounded-2xl hover:scale-105 duration-700 ease-in"
            src="src/assets/1.jpg"
            alt="key"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onChange={onChange}>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Full name"
              onChange={onChange}
              className="w-full px-4 py-2 text-xl text-gray-800 bg-white rounded transition ease-in-out mb-6"
            />
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email address"
              onChange={onChange}
              className="w-full px-4 py-2 text-xl text-gray-800 bg-white rounded transition ease-in-out mb-6"
            />
            <input
              type="tel"
              id="contact_number"
              value={contact_number}
              placeholder="Phone number"
              onChange={onChange}
              className="w-full px-4 py-2 text-xl text-gray-800 bg-white rounded transition ease-in-out mb-6"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                placeholder="Password"
                onChange={onChange}
                className="w-full px-4 py-2 text-xl text-gray-800 bg-white rounded transition ease-in-out mb-6"
              />
              {showPassword ? (
                <AiFillEye
                  onClick={() => setShowPassword((prevState) => !prevState)}
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                />
              ) : (
                <AiFillEyeInvisible
                  onClick={() => setShowPassword((prevState) => !prevState)}
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                />
              )}
            </div>
            <div className="justify-end mb-10">
              <CheckBox />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-7 py-3 rounded font-medium uppercase text-lg shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              onClick={updateEmployee}
            >
              Done
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
