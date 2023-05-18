import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Login from '../Login';
import {AiOutlineSearch} from "react-icons/ai"
import {IoIosArrowBack} from 'react-icons/io'
import BtnCerrarSesion from './BtnCerrarSesion';
import {GoPlus} from 'react-icons/go'
import { Link } from 'react-router-dom';
const AdminProductos = () => {
  
  const [user, setUser] = useState(null)

  useEffect(()=>{
    auth.onAuthStateChanged((usuarioFirebase)=>{
      setUser(usuarioFirebase);
    });
  } , [] )

  return (
    <>
    {user? 
    <div className='contenedor-crud'>
      <header className='header-crud'><Link to={"/admin"}><IoIosArrowBack className='btn-atras'/></Link><h2 className='fs-1 text-white fw-bold'>Productos</h2><BtnCerrarSesion/></header>
      <main className='pt-5 pb-5 d-flex justify-content-evenly align-self-center text-dark'>
        <AiOutlineSearch className='bg-white border-0 rounded-pill fs-1'/>
        <Link to={"/form_crear_categorias"}><GoPlus className='text-dark fs-1 bg-white border-0 rounded-pill'/></Link>
      </main>
      <footer>
        <table>
          <tr>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
          <tr>
            <td>Abrasivo</td>
            <td>Modifica</td>
            <td>Elimina</td>
          </tr>
        </table>
      </footer>
    </div>:<Login/>}
    </>
  )
}

export default AdminProductos
