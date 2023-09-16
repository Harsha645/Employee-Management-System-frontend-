import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";

export default function Table() {
    function onEdit(){

    }
    function onDelete(){

    }
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
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
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 text-lg dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                0001
              </th>
              <td className="px-6 py-4">Harsha Pramod</td>
              <td className="px-6 py-4">harshapramod19980124@gmail.com</td>
              <td className="px-6 py-4">0719228889</td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-between ">
                <button
                  type="button"
                  onClick={onEdit}
                  className="flex items-center justify-center w-44 bg-green-500 text-white px-7 py-3 rounded-lg font-medium  text-xl shadow-md hover:bg-green-600 hover:scale-105 duration-200 ease-in hover:shadow-lg active:bg-green-700"
                >
                  <AiFillEdit className="text-2xl mr-2" />
                  Edit
                </button>
                <button
                  type="button"
                  onClick={onDelete}
                  className="flex items-center justify-center w-44 bg-red-500 text-white px-7 py-3 rounded-lg font-medium  text-xl shadow-md hover:bg-red-600 hover:scale-105 duration-200 ease-in hover:shadow-lg active:bg-red-800"
                >
                  <AiTwotoneDelete className="text-2xl mr-2" />
                  Delete
                </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
