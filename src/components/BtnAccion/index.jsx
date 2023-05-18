import React from 'react'

const BtnAccion = ({texto, telefono}) => {
    
  return (
    <div id='btn-accion'><div id='btn-cuerpo'><div id='texto-cuerpo'><a className='text-white' href={`tel:+57${telefono}`} target="_blank" rel="noopener noreferrer">{`${texto}`}</a></div></div></div>
    
  )
}

export default BtnAccion;
