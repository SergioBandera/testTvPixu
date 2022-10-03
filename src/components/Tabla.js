import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../fireBase/fireBaseConfig";

export const Tabla = () => {
  const [datosTabla, setDatosTabla] = useState([]);

  const obtenerDatos = async () => {
    const datos = await getDocs(collection(db, "participantes"));
    datos.docs.map((d) => {
        return setDatosTabla(
           ...datosTabla, d.data()
        )

    });
  };
  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <div>
      <h1> Tabla de puntuaciones</h1>
      <DataTable value={datosTabla} responsiveLayout="scroll" />
      {console.log(datosTabla)}
    </div>
  );
};
