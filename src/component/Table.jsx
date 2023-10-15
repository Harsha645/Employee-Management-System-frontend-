import axios from "axios";
import React, { useEffect, useState } from "react";

import TableBody from "./TableBody";

export default function Table(props) {
  
  const [employee, setEmployee] = useState([]);

  function loadEmployees() {
    axios
      .get("http://localhost:8081/employee/get-all")
      .then((res) => {
        console.log(res.data);
        // console.log("kkkk");
        // console.log(res.data.title);

        setEmployee(res.data.data);
        console.log(employee);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadEmployees();
  }, []);

  function onChange(event){

  }

  return (
    <>
    <form>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3"onChange={onChange}>
                Emp ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Contact Number
              </th>
              {/* <th scope="col" className="px-6 py-3">
                Role
              </th> */}
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          {employee.map((value) => (
            <TableBody
              key={value.id}
              id={value.id}
              name={value.name}
              email={value.email}
              contact_number={value.contact_number}
              role ={value.role.roleName}
              loadEmployees={() => loadEmployees()}
            />
          ))}
        </table>
      </div>
      </form>
    </>
  );
}
