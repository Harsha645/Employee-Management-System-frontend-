import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [pageState, setPageState] = useState("Sign in");

  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-6 ">
        <div className="flex w-5/6 space-x-3 py-1 cursor-pointer hover:scale-105 duration-200 ease-in">
          <img
          className="h-10 w-17 "
            src="src/assets/8.jpg"
            alt="logo"
            onClick ={() =>navigate("/")} 
          />
          <img
          className="h-15 w-96 "
            src="src/assets/9.jpg"
            alt="logo"
            onClick={() => navigate("/")} 
          />
        </div>
        <div className="">
          <ul className="flex space-x-5">
            <li
              className={`cursor-pointer  py-3 text-lg font-semibold text-gray-400  ${
                pathMathRoute("/") &&
                "text-blue-800 border-b-[3px] border-b-red-500 hover:scale-110 duration-200 ease-in"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer  py-3 text-lg font-semibold text-gray-400  ${
                pathMathRoute("/employees") &&
                "text-blue-800 border-b-[3px] border-b-red-500 hover:scale-110 duration-200 ease-in"
              }`}
              onClick={() => navigate("/employees")}
            >
              Employees
            </li>
            <li
              className={`cursor-pointer py-3 text-lg font-semibold text-gray-400  ${
                (pathMathRoute("/sign-in") || pathMathRoute("/profile")) &&
                "text-blue-800 border-b-[3px] border-b-red-500 hover:scale-110 duration-200 ease-in"
              }`}
              onClick={() => navigate("/sign-in")}
            >
              {pageState}
            </li>
            
          </ul>
        </div>
      </header>
    </div>
  );
}
