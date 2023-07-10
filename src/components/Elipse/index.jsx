import React from 'react'

const Elipse = ({texto, color}) => {
    const arregloTexto = texto.split(" ");
    const nombre = arregloTexto[arregloTexto.length-1].toLowerCase();

  const Clase = (color) => {
    if(color === "green"){
      return `elipse-${nombre} text-white`
    } else{
      return `elipse-${nombre} text-dark`
    }
  }

  return (
    <div className={Clase(color)} style={{backgroundColor: `${color}`}}>
        <p className='text-center mt-3'>{texto}</p>
    </div>
  )
}

export default Elipse
