import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import moment from "moment";
import ClipboardJS from "clipboard";
import { FormMilitar } from "./components/FormMilitar";
import { InputSearch } from "./components/InputSearch";
import { Loading } from "./components/Loading";
import { FormFamiliar } from "./components/FormFamiliar";
import { Alert } from "./components/Alert";

function IpsfaSearch() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const refInput = useRef(null);
  const familiarLength = useMemo(() => {
    const { Familiar } = data
    return Familiar ? Familiar.length : 0
  }, [data])

  const handleOnSubmit = useCallback(
    async (ev) => {
      ev.preventDefault();

      const value = refInput.current.value;

      if (value === "") {
        setError(true)
        setLoading(false)
        return
      } 
       setError(false)
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

console.log(DatoBasico)


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
  console.log(Persona)
  return (
    <div>
      <InputSearch refInput={refInput} handleOnSubmit={handleOnSubmit} />
      {
        error === true && <Alert />
      }
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
            fechanacimiento={fechanacimiento ? moment(fechanacimiento).format("L") : null}
            clase={clase}
            fingreso={fingreso ? moment(fingreso).format("L") : null}
            fusacenso={fascenso ? moment(fascenso).format("L") : null}
            nombreDelComponente={nombreDelComponente}
            tiemposervicio={tiemposervicio}
            nacionalidad={nacionalidad}
            descripcionDelGrado={descripcionDelGrado}
            id={"btn"}
          />
          {familiarLength > 1 ? (
            <div>
              <h3 className="mt-8 text-lg font-medium leading-6 text-gray-900 ">
                Familiares: {familiarLength}
              </h3>
              <ul className="mt-4">
                {Familiar.map((familia, index) => (
                  <li key={index}>
                    <FormFamiliar familia={familia} id={`btn-familiar-${index}`} />
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default IpsfaSearch;
