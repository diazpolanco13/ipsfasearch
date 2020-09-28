import React, { useCallback, useEffect, useRef, useState } from "react";
import moment from "moment";
import ClipboardJS from "clipboard";
import { useFetch } from "./hooks/useFetch";
import { FormMilitar } from "./components/FormMilitar";

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

  const yo = useFetch(
    `https://app.ipsfa.gob.ve:2608/ipsfa/api/web/militar/17089732`
  );
  console.log(yo);

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
    } = data;
    const { DatoBasico } = Persona || {};
    const {
      cedula,
      nacionalidad,
      nombreprimero,
      apellidoprimero,
      sexo,
      estadocivil,
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
            Sexo: ${sexo}
            Estado civil: ${estadocivil}
            Categoria: ${categoria}
            Situación: ${situacion}
            Clase: ${clase}
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
  } = data;
  const { DatoBasico } = Persona || {};
  const { cedula, nombreprimero, apellidoprimero, sexo } = DatoBasico || {};
  const { nombre: nombreDelComponente } = Componente || {};
  const { descripcion: descripcionDelGrado } = Grado || {};

  return (
    <div>
      <h1>IPSFA</h1>
      <form onSubmit={handleOnSubmit}>
        <label>
          Cédula: <input ref={refInput} type="text" placeholder="12345678" />
          <button type="submit" disabled={loading}>
            Buscar
          </button>
        </label>
      </form>

      <button id="btn">Copiar en el porta papeles</button>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <FormMilitar
            cedula={cedula}
            nombreprimero={nombreprimero}
            apellidoprimero={apellidoprimero}
            sexo={sexo}
            categoria={categoria}
            situacion={situacion}
            clase={clase}
            fingreso={moment(fingreso).format("L")}
            fusacenso={moment(fascenso).format("L")}
            nombreDelComponente={nombreDelComponente}
            descripcionDelGrado={descripcionDelGrado}
          />
        </div>
      )}
    </div>
  );
}

export default IpsfaSearch;
