import React from 'react'
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
    function onGoogleClick(){

    }
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex items-center justify-center w-full bg-gray-600 text-white px-7 py-3 rounded font-medium uppercase text-sm shadow-md hover:bg-gray-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-black"
    >
      <FcGoogle className="text-lg mr-2" />
      Continue With Google
    </button>
  )
}
