import React from "react";

export const FormMilitar = ({
  cedula,
  nombreprimero,
  apellidoprimero,
  sexo,
  categoria,
  situacion,
  clase,
  fingreso,
  fusacenso,
  nombreDelComponente,
  descripcionDelGrado,
}) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-8">
      <div className="px-2 py-2 border-b border-gray-200 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Hoja de datos personales
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          Personal militar y civil de la FANB
        </p>
      </div>
      <div>
        <dl>
          <div className="bg-gray-100 px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              <b>Grado/Componente</b>
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {descripcionDelGrado} {nombreDelComponente}
            </dd>
          </div>
          <div className="bg-white px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Nombre Completo
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {nombreprimero} {apellidoprimero}
            </dd>
          </div>
          <div className="bg-gray-100 px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Cedula
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {cedula}
            </dd>
          </div>
          <div className="bg-white px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Sexo
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {sexo}
            </dd>
          </div>

          <div className="bg-gray-100 px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Clase
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {clase}
            </dd>
          </div>
          <div className="bg-white px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Situacion
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {situacion}
            </dd>
          </div>
          <div className="bg-gray-100 px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Categoria
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {categoria}
            </dd>
          </div>
          <div className="bg-white px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Fecha de Ingreso
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {fingreso}
            </dd>
          </div>
          <div className="bg-gray-100 px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Fecha de ultimo ascenso
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {fusacenso}
            </dd>
          </div>

          {/* ARCHIVOS ADJUNTOS */}
          <div className="bg-white px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              Archivos adjuntos
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="border border-gray-200 rounded-md">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5">
                  <div className="w-0 flex-1 flex items-center">
                    {/* Heroicon name: paper-clip */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 flex-1 w-0 truncate">
                      Copiar en portapapeles
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                    >
                      Copiar
                    </a>
                  </div>
                </li>
                <li className="border-t border-gray-200 pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5">
                  <div className="w-0 flex-1 flex items-center">
                    {/* Heroicon name: paper-clip */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 flex-1 w-0 truncate">Perfil.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                    >
                      Descargar
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
