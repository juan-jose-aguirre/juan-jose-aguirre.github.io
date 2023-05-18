import React from 'react'

const Elipse = ({texto, color}) => {
    const arregloTexto = texto.split(" ");
    const nombre = arregloTexto[arregloTexto.length-1].toLowerCase();
  return (
    <div id={`elipse-${nombre}`} style={{backgroundColor: `${color}`}}>
        {texto}
    </div>
  )
}

export default Elipse
