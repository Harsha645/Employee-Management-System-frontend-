import React, { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import Table from "../component/Table";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function EmployeeDetails() {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-4xl font-serif mt-6 text-center">
        Employee Information
      </div>
      <div className="mt-4">
        <Table />
      </div>
    </>
  );
}
