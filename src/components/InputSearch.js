import React from "react";

export const InputSearch = ({ handleOnSubmit, refInput }) => {
  return (
    <div className="mt-4 ">
      <p className="block text-sm font-medium leading-5 text-gray-700">
        Buscador de personas
      </p>
      <form
        onSubmit={handleOnSubmit}
        className="flex justify-center max-w-md mt-1 border border-gray-300 rounded-md shadow-sm "
      >
        <div className="relative flex-grow focus-within:z-10 ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {/* Heroicon name: users */}
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
          </div>
          <input
            ref={refInput}
            className="block w-full h-10 pl-10 transition duration-150 ease-in-out rounded-none form-input rounded-l-md sm:text-sm sm:leading-5 "
            placeholder="Introduzca el numero de cedula"
          />
        </div>
        <button
          id="btn"
          type="submit"
          className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-r-md bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700"
        >
          {/* Heroicon name: sort-ascending */}
          <svg
            className="w-5 h-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
          </svg>

          <span className="ml-2">Buscar</span>
        </button>
      </form>
    </div>
  );
};
