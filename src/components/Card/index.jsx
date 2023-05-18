import React from 'react'
import categorias from '../../assets/categorias';

const Card = ({name}) => {
    // console.log(name);
    // console.log(categorias);
    // const rutaImgCategoria = `../../assets/categorias-${name}.png`;
    
    // const categorias = {
    //     tornilleria: 'categoria-tornilleria',
    //     aerosoles: 'categoria-aerosoles',
    //   };

    //   const imagenSrc = `../../assets/${categorias[props.name]}.svg`;

  return (
    <div className='tarjetas'>
        <img className='imagen-tarjetas' src={categorias[name]} alt="hi" />
        <div className='nombre-tarjetas'>{name.toUpperCase()}</div>
    </div>
  )
}

export default Card;
