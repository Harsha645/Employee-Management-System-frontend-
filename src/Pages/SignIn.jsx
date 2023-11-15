import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../component/OAuth";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate} from "react-router-dom";




export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  function onChange(event) {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }
  async function login() {
    event.preventDefault();
    await axios
      .post("http://localhost:8081/authentication", formData)
      .then((res) => {
        console.log(res.data.data);
        if (res.status === 200) {
          toast.success("Successfully Login");
          navigate("/");
        }
      })
      .catch((err) => toast.error(err));
  }

  function onSubmit() {}

  return (
    <section>
      <h1 className="text-4xl font-serif mt-6 text-center">Sign In</h1>
      <div className=" flex justify-center items-center px-6 py-16 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 ">
          <img
            className="w-5/6  h-3/5 object-contain rounded-2xl hover:scale-105 duration-700 ease-in"
            src="src/assets/1.jpg"
            alt="key"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              type="email"
              id="email"
              // value={email}
              placeholder="Email address"
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

              <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                <p className="mb-6">
                  Don't have an account?
                  <Link
                    to="/sign-up"
                    className="text-red-500 hover:text-red-600 ml-1"
                  >
                    Register{" "}
                  </Link>
                </p>
                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Forgot Password?{" "}
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-7 py-3 rounded font-medium uppercase text-lg shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
                onClick={login}
              >
                Sign in
              </button>
              <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                <p className="text-center font-semibold mx-4">OR</p>
              </div>
              <OAuth />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
