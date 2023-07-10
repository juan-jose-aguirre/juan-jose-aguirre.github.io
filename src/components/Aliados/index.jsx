import React from "react";
import papeleria from "../../assets/aliados/aliado-papeleria.png";
import distriarte from "../../assets/aliados/aliado-distriarte.png";
import centropor from "../../assets/aliados/aliado-centropor.png";
import Carrusel from "../Carrusel";

const Aliados = () => {
  const imagenes = [papeleria, distriarte, centropor];

  return(
    <Carrusel id="carrusel2"  arreglo={imagenes} />
  )
};

export default Aliados;
