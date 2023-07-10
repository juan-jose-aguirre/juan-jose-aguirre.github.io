import React from "react";

const BtnAccion = ({ texto, telefono }) => {
  return (
    <div className="btn-accion">
      <div className="btn-cuerpo">
        <a
          className="text-white"
          href={`tel:+57${telefono}`}
          target="_blank"
          rel="noopener noreferrer"
        >{`${texto}`}</a>
      </div>
    </div>
  );
};

export default BtnAccion;
