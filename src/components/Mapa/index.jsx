import React from "react";
import {GoLocation} from 'react-icons/go'

const Mapa = ({texto}) => {
  return (
    <div>
        <a id="texto-ubicacion" href="https://goo.gl/maps/vk5m9ypmumHrKcXE6"><GoLocation id="icono-ubicacion"/>{texto}</a>
      <div id="contenedor-mapa">
        <iframe
          id="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.240064543636!2d-76.54232641284179!3d3.4565632999999925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a713147912bd%3A0x4306b07cddeeeed0!2sFERRETERIA%202000!5e0!3m2!1ses-419!2sco!4v1683576465281!5m2!1ses-419!2sco"
        ></iframe>
      </div>
    </div>
  );
};

export default Mapa;
