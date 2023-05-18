import React from "react";
import LogoWhatsApp from "../../assets/whatsapp.svg";
import LogoFijo from "../../assets/telefono-fijo.svg";

const Contactos = ({ whatsapp, fijo }) => {
  return (
    <div>
        <h2 id="texto-contactos"><p>Escribe o Llamanos</p></h2>
      <div id="contactos">

      <div className="contacto">
        <img className="logo-contacto" src={LogoFijo} alt="" /><a href={`tel:+57${fijo}`} target="_blank" rel="noopener noreferrer">{fijo}</a>
        </div>

      <div className="contacto">
        <img className="logo-contacto" src={LogoWhatsApp} alt="" /><a href={`https://wa.me/57${whatsapp}?text=Hola!%20Estoy%20interesado%20en%20una%20cotizacion`} target="_blank" rel="noopener noreferrer">{whatsapp}</a>
      </div>
      </div>

    </div>
  );
};

export default Contactos;