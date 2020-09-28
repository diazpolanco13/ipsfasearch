import React, { useCallback, useEffect, useRef, useState } from "react";
import moment from "moment";
import ClipboardJS from "clipboard";

function App() {
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
      console.log(data);
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
  const { nombre: nombreDelComponente, descripcion: descripcionDelComponente } =
    Componente || {};
  const { descripcion: descripcionDelGrado } = Grado || {};

  return (
    <div>
      <h1>IPSFA</h1>
      <form onSubmit={handleOnSubmit}>
        <label>
          Cédula: <input ref={refInput} type="text" placeholder="12345678" />{" "}
          <button type="submit" disabled={loading}>
            Buscar
          </button>
        </label>
      </form>

      <button id="btn">Copiar en el porta papeles</button>

      <h2>Datos</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <h3>Datos Básicos:</h3>
          <p>
            <strong>Cédula:</strong> {cedula}
          </p>
          <p>
            <strong>Nacionalidad:</strong> {nacionalidad}
          </p>
          <p>
            <strong>Nombres:</strong> {nombreprimero}
          </p>
          <p>
            <strong>Apellidos:</strong> {apellidoprimero}
          </p>
          <p>
            <strong>Sexo:</strong> {sexo}
          </p>
          <p>
            <strong>Estado civil:</strong> {estadocivil}
          </p>
          <p>
            <strong>Categoria:</strong> {categoria}
          </p>
          <p>
            <strong>Situación:</strong> {situacion}
          </p>
          <p>
            <strong>Clase:</strong> {clase}
          </p>
          <p>
            <strong>Fecha de ingreso:</strong> {moment(fingreso).format("L")}
          </p>
          <p>
            <strong>Fecha de último ascenso:</strong>{" "}
            {moment(fascenso).format("L")}
          </p>
          <p>
            <strong>Fecha de retiro:</strong> {moment(fretiro).format("L")}
          </p>

          <h3>Componente</h3>
          <p>
            <strong>Nombre:</strong> {nombreDelComponente}
          </p>
          <p>
            <strong>Descripción:</strong> {descripcionDelComponente}
          </p>

          <h3>Grado</h3>
          <p>
            <strong>Descripción:</strong> {descripcionDelGrado}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
