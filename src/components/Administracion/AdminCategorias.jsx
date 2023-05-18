import React, { useEffect, useState } from 'react'
import { db, auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Login from '../Login';
import {AiOutlineSearch} from "react-icons/ai"
import {IoIosArrowBack} from 'react-icons/io'
import BtnCerrarSesion from './BtnCerrarSesion';
import {GoPlus} from 'react-icons/go'
import { Link } from 'react-router-dom';
import { collection, onSnapshot, query } from 'firebase/firestore';
import Tabla from '../Tabla';


const AdminCategorias = () => {
  const [user, setUser] = useState(null)
  const [categorias, setCategorias] = useState([])

  useEffect(()=>{
    auth.onAuthStateChanged((usuarioFirebase)=>{
      setUser(usuarioFirebase);
    });
    const q = query(collection(db, 'categorias'));
    const unsubscribe = onSnapshot(q, (querySnapshot)=>{
      let categoriasArr = [];
      querySnapshot.forEach((doc) =>{
        categoriasArr.push({...doc.data(), id: doc.id})
      });
      setCategorias(categoriasArr);
    })
    return () => unsubscribe()
  } , [] )

  return (
    <>
    {user? 
    <div className='contenedor-crud'>
      <header className='header-crud'><Link to={"/admin"}><IoIosArrowBack className='btn-atras'/></Link><h2 className='fs-1 text-white fw-bold'>Categorias</h2><BtnCerrarSesion/></header>
      <main className='pt-5 pb-5 d-flex justify-content-evenly align-self-center text-dark'>
        <AiOutlineSearch className='bg-white border-0 rounded-pill fs-1'/>
        <Link to={"/form_crear_categorias"}><GoPlus className='text-dark fs-1 bg-white border-0 rounded-pill'/></Link>
      </main>
      <footer>
        <Tabla mostrar={["nombre_cate"]} objeto={categorias}/>
      </footer>
    </div>:<Login/>}
    </>
  )
}

export default AdminCategorias
