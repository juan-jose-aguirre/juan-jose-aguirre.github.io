import React from "react";
import uduke from "../../assets/marcas/marca-uduke.png";
import cintandina from "../../assets/marcas/marca-cintandina.png";
import hoyostools from "../../assets/marcas/marca-hoyostools.png";
import Carrusel from "../Carrusel";

const Marcas = () => {
  const imagenes = [uduke, cintandina, hoyostools];

  return(
    <Carrusel id="carrusel1" arreglo={imagenes} />
  )
};

export default Marcas;
