import axios from "axios";
import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function TableBody(props) {

  const { id, name, email, contact_number, role, loadEmployees } = props;
  const navigate = useNavigate();

  const [editButton, setEditButton] = useState(true);
  const [editId, setEditId] = useState(id);

  const [formData, setFormData] = useState({
    name: name,
    email: email,
    contact_number: contact_number,
  });

  function onChange(event) {
    console.log(event.target.value);
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }

  const deleteEmployee = async () => {
    if (confirm("Are You Sure ?")) {
      await axios
        .delete("http://localhost:8081/api/v1/employee/delete-by-id/" + id)
        .then((res) => {
          if (res.status === 200) {
            loadEmployees();
            toast.success("deleted");
            console.log(editId);
          }
        })
        .catch((err) => toast.error(err));
    }
  };
  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 text-lg dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {id}
        </th>
        <td className="px-6 py-4">{name}</td>
        <td className="px-6 py-4">{email}</td>
        <td className="px-4 py-4">{contact_number}</td>
        <td className="px-6 py-4 text-right">
          <div className="flex justify-between ">
            {editButton ? (
              <button
                type="button"
                onClick={() => {
                  navigate(`/edit-employee/${id}`);
                  // editButton && updateEmployee();
                  setEditButton((prevState) => !prevState);
                }}
                className="flex items-center justify-center w-44 bg-green-500 text-white px-7 py-3 rounded-lg font-medium  text-xl shadow-md hover:bg-green-600 hover:scale-105 duration-200 ease-in hover:shadow-lg active:bg-green-700"
              >
                <AiFillEdit className="text-2xl mr-2" />
                Edit
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  !editButton && updateEmployee();
                  setEditButton((prevState) => !prevState);
                }}
                className="flex items-center justify-center w-44 bg-blue-500 text-white px-7 py-3 rounded-lg font-medium  text-xl shadow-md hover:bg-blue-600 hover:scale-105 duration-200 ease-in hover:shadow-lg active:bg-blue-700"
              >
                <AiFillEdit className="text-2xl mr-2" />
                Done
              </button>
            )}
            <button
              type="button"
              onClick={deleteEmployee}
              className="flex items-center justify-center w-44 bg-red-500 text-white px-7 py-3 rounded-lg font-medium  text-xl shadow-md hover:bg-red-600 hover:scale-105 duration-200 ease-in hover:shadow-lg active:bg-red-800"
            >
              <AiTwotoneDelete className="text-2xl mr-2" />
              Delete
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
