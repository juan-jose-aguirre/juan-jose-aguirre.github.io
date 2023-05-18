import React from 'react'
import BtnCerrarSesion from './BtnCerrarSesion'
import { Link } from 'react-router-dom'
import Login from '../Login'



const Admin = ({usuario}) => {

  

  return (

    <>
    {usuario ? <div className='contenedor-admin'>
      <BtnCerrarSesion/>
      <button className='btn-admin'><Link className='text-white fs-1 fw-bold' to={"/admin_productos"}>Productos</Link></button>
      <button className='btn-admin'><Link className='text-white fs-1 fw-bold' to={"/admin_categorias"}>Categorias</Link></button>
    </div>:<Login/>}
   
    </>
  )
}

export default Admin
