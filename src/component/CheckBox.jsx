import React from "react";

export default function CheckBox() {
  return (
    <>
    <div className="flex w-1/2 justify-between">
      <div class="flex items-center mb-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="default-checkbox"
          class="ml-2 text-lg font-medium text-gray-900 "
        >
          User
        </label>
      </div>
      <div class="flex items-center mb-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="default-checkbox"
          class="ml-2 text-lg font-medium text-gray-900 "
        >
          Admin
        </label>
      </div>
      
      </div>
    </>
  );
}
