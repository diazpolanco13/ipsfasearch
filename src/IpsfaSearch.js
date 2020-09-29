import React, { useCallback, useEffect, useRef, useState } from "react";
import moment from "moment";
import ClipboardJS from "clipboard";
// import { useFetch } from "./hooks/useFetch";
import { FormMilitar } from "./components/FormMilitar";
import { InputSearch } from "./components/InputSearch";
import { Loading } from "./components/Loading";
import { FormFamiliar } from "./components/FormFamiliar";

function IpsfaSearch() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const refInput = useRef(null);

  const handleOnSubmit = useCallback(
    async (ev) => {
      ev.preventDefault();

      const value = refInput.current.value;

      if (value === "") return alert("Ingrese un número de cédula");

      setLoading(true);

      const res = await fetch(
        `https://app.ipsfa.gob.ve:2608/ipsfa/api/web/militar/${value}`
      );
      const data = await res.json();
      setData(data);
      setLoading(false);
    },
    [refInput, setData, setLoading]
  );

  // En la carpeta de hooks hay un useFetch que quiero usar para optimizar el codigo,
  //     el devuelve un state que contiene la data, el loading y un error por si no se carga

  // const yo = useFetch(
  //   `https://app.ipsfa.gob.ve:2608/ipsfa/api/web/militar/17089732`
  // );
  // console.log(yo);

  useEffect(() => {
    const {
      Persona,
      categoria,
      situacion,
      clase,
      fingreso,
      fascenso,
      fretiro,
      Componente,
      Grado,
      tiemposervicio,
    } = data;

    const { DatoBasico } = Persona || {};
    const {
      cedula,
      nacionalidad,
      nombreprimero,
      apellidoprimero,
      sexo,
      estadocivil,
      fechanacimiento,
    } = DatoBasico || {};
    const {
      nombre: nombreDelComponente,
      descripcion: descripcionDelComponente,
    } = Componente || {};
    const { descripcion: descripcionDelGrado } = Grado || {};

    new ClipboardJS("#btn", {
      text: () => `
          Datos Básicos:
            Cédula: ${cedula}
            Nacionalidad: ${nacionalidad}
            Nombres: ${nombreprimero}
            Apellidos: ${apellidoprimero}
            Fecha de Nacimiento: ${fechanacimiento}
            Sexo: ${sexo}
            Estado civil: ${estadocivil}
            Categoria: ${categoria}
            Situación: ${situacion}
            Clase: ${clase}
            Tiempo de Servicio: ${tiemposervicio}
            Fecha de ingreso: ${moment(fingreso).format("L")}
            Fecha de último ascenso: ${moment(fascenso).format("L")}
            Fecha de retiro: ${moment(fretiro).format("L")}

          Componente
            Nombre: ${nombreDelComponente}
            Descripción: ${descripcionDelComponente}

          Grado
            Descripción: ${descripcionDelGrado}
        `,
    });
  }, [data]);

  const {
    Persona,
    categoria,
    situacion,
    clase,
    fingreso,
    fascenso,
    Componente,
    Grado,
    tiemposervicio,
    Familiar,
  } = data;
  // console.log(data);
  const { DatoBasico } = Persona || {};
  const {
    cedula,
    nombreprimero,
    apellidoprimero,
    sexo,
    fechanacimiento,
    nacionalidad,
  } = DatoBasico || {};
  const { nombre: nombreDelComponente } = Componente || {};
  const { descripcion: descripcionDelGrado } = Grado || {};


  return (
    <div>
      <InputSearch refInput={refInput} handleOnSubmit={handleOnSubmit} />
      {loading ? (
        <Loading />
      ) : (
        <div>
          <FormMilitar
            cedula={cedula}
            nombreprimero={nombreprimero}
            apellidoprimero={apellidoprimero}
            sexo={sexo}
            categoria={categoria}
            situacion={situacion}
            fechanacimiento={moment(fechanacimiento).format("L")}
            clase={clase}
            fingreso={moment(fingreso).format("L")}
            fusacenso={moment(fascenso).format("L")}
            nombreDelComponente={nombreDelComponente}
            tiemposervicio={tiemposervicio}
            nacionalidad={nacionalidad}
            descripcionDelGrado={descripcionDelGrado}
            id={"btn"}
          />
          <div>
            {Familiar && Familiar.length > 1 ? (
              <ul className="mt-8">
                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                  Familiares
                </h3>
                {Familiar.map((familia, index) => (
                  <li key={index}>
                    <FormFamiliar familia={familia} id={"btn"} />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default IpsfaSearch;
