import React from "react";

export const NavBar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-label="Main menu"
              aria-expanded="false"
            >
              {/* Icon when menu is closed. */}
              {/*
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          */}
              <svg
                className="block w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. */}
              {/*
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          */}
              <svg
                className="hidden w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img
                className="block w-auto h-10 lg:hidden"
                src="https://caraejipsfanb.com.ve/x/images/logos/caraesipsfanb.png"
                alt="Ipsfa logo"
              />
              <img
                className="hidden w-auto h-12 lg:block"
                src="https://caraejipsfanb.com.ve/x/images/logos/caraesipsfanb.png"
                alt="Ipsfa logo"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                <a
                  href="#"
                  className="px-3 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  BUSCADOR IPSFA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  */}
      <div className="hidden sm:hidden">
        <div className="px-2 pt-2 pb-3">
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-white transition duration-150 ease-in-out bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700"
          >
            BUSCADOR IPSFA
          </a>
        </div>
      </div>
    </nav>
  );
};
