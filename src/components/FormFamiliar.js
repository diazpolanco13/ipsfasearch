import React from "react";
import moment from "moment";

export const FormFamiliar = ({ familia, id }) => {
  const { Persona, parentesco } = familia || {};
  const { DatoBasico } = Persona || {};
  const {
    apellidoprimero,
    cedula,
    nombreprimero,
    sexo,
    fechanacimiento,
    nacionalidad,
  } = DatoBasico || {};

  return (
    <div>
      <div className="mb-8 overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-2 py-2 border-b border-gray-200 sm:px-6"></div>
        <div>
          <dl>
            <div className="px-2 py-2 bg-gray-100 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium leading-5 text-gray-500">
                Parentesco
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {parentesco}
              </dd>
            </div>
            <div className="px-2 py-2 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium leading-5 text-gray-500">
                Nombre Completo
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {nombreprimero} {apellidoprimero}
              </dd>
            </div>
            <div className="px-2 py-2 bg-gray-100 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium leading-5 text-gray-500">
                Cedula
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {nacionalidad}-{cedula}
              </dd>
            </div>
            <div className="px-2 py-2 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium leading-5 text-gray-500">
                Sexo
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {sexo}
              </dd>
            </div>
            <div className="px-2 py-2 bg-gray-100 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium leading-5 text-gray-500">
                Fecha de Nacimiento
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {moment(fechanacimiento).format("L")}
              </dd>
            </div>

            {/* ARCHIVOS ADJUNTOS */}
            <div className="px-2 py-2 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium leading-5 text-gray-500">
                Archivos adjuntos
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="border border-gray-200 rounded-md">
                  <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm leading-5">
                    <div className="flex items-center flex-1 w-0">
                      {/* Heroicon name: paper-clip */}
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="flex-1 w-0 ml-2 truncate">
                        Copiar datos en portapapeles
                      </span>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <button
                        href="#"
                        id={id}
                        className="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500"
                      >
                        Copiar
                      </button>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
