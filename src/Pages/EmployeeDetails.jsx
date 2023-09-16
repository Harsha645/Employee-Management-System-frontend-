import React from "react";
import { FaUserPlus } from "react-icons/fa";
import Table from "../component/Table";
import {useNavigate} from "react-router-dom"

export default function EmployeeDetails() {
  const navigate = useNavigate();

  function onGoogleClick() {}
  return (
    <>
      <div className="py-3 px-3">
        <button
          type="button"
          onClick={() => navigate("/add-employee")} 
          className="flex items-center justify-center w-52 bg-gray-600 text-white px-7 py-3 rounded font-medium uppercase text-sm shadow-md hover:bg-gray-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-black"
        >
          <FaUserPlus className="text-2xl mr-2" />
          Add Employee
        </button>
      </div>
      <div className="">
        <Table/>
      </div>
    </>
  );
}
