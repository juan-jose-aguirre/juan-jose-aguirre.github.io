import React from "react";
import ModalModiCate from "../Administracion/ModalModiCate";
import ModalBorrCate from "../Administracion/ModalBorrCate";

const Tabla = ({ columnas, mostrar, objeto }) => {
  

  return (
    <div className="contenedor-tabla overflow-scroll">
      <table className="table bg-white rounded text-center fs-5">
        <thead>
          <tr>
            {columnas.map((col, index) => {
              return (
                <th key={index} colSpan={1}>
                  <span className="span">{col}</span>
                </th>
              );
            })}
            <th colSpan={2}>
              <span className="span">Acciones</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {objeto.map((categoria) => {
            return (
              <tr>
                <td key={categoria.id} className="text-dark">
                  {categoria[mostrar]}
                </td>
                <td>
                  <ModalModiCate
                    id={categoria.id}
                    nombre={categoria[mostrar]}
                  />
                </td>
                <td>
                  <ModalBorrCate
                    id={categoria.id}
                    nombre={categoria[mostrar]}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
