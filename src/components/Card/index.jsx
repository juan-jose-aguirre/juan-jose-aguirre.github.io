import React from 'react'
import categorias from '../../assets/categorias';
import ModalProducto from './ModalProducto';
import { Link } from 'react-router-dom';



const Card = ({nombre, id, imagen, descripcion}) => {


  return (
    <>
    {imagen ? 
    <>
      <div className='tarjetas'>
        <img className='imagen-tarjetas' src={imagen} alt="" />
        <div className='nombre-tarjetas'><ModalProducto nombre={nombre} imagen={imagen} descripcion={descripcion}/></div>
      </div>
    </>
    :
    <>
      <div className='tarjetas'>
        <img className='imagen-tarjetas' src={categorias[nombre.toLowerCase()]} alt="" />
        <Link to={`/categoria/${nombre}/${id}#productos`} className='nombre-tarjetas fw-bold text-dark'>{nombre.toUpperCase()}</Link>
      </div>
    </>}
    </>
  )
}

export default Card;
