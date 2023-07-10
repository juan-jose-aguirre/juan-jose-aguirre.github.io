import React from 'react'
import BtnCerrarSesion from './BtnCerrarSesion'
import { Link } from 'react-router-dom'
import Login from '../Login'
import { IoIosArrowBack } from 'react-icons/io'




const Admin = ({usuario}) => {

  

  return (

    <>
    {usuario ? <div className='contenedor-admin'>
      <a className='p-3 fs-1 text-success' style={{position: "absolute", top: "0"}} href="/"><IoIosArrowBack/></a>
      <BtnCerrarSesion/>
      <button className='btn-admin'><Link className='text-white fs-1 fw-bold' to={"/admin_productos"}>Productos</Link></button>
      <button className='btn-admin'><Link className='text-white fs-1 fw-bold' to={"/admin_categorias"}>Categorias</Link></button>
    </div>:<Login/>}
   
    </>
  )
}

export default Admin
