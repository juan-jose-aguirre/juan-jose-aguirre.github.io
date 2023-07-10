import React, { useEffect, useState } from 'react'
import { db, auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Login from '../Login';
import {AiOutlineSearch} from "react-icons/ai"
import {IoIosArrowBack} from 'react-icons/io'
import BtnCerrarSesion from './BtnCerrarSesion';
import { Link } from 'react-router-dom';
import { collection, onSnapshot, query } from 'firebase/firestore';
import Tabla from '../Tabla';
import ModalCreaCate from './ModalCreaCate';



const AdminCategorias = () => {

  const [user, setUser] = useState(null) //Se crea esta variable para verificar si el ususario ingreso corectamente las credenciales

  const [categorias, setCategorias] = useState([]) //La variable nos servira para almacenar todas la categorias existentes

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
  } , [] ) //Cada vez que se carge el componente, se valida el usuario y tambien se le solicita a firebase por medio de una promesa, el arreglo de objetos de categorias

  return (
    <>
    {/*Validamos si el usuario existe, en caso de ser verdadero, se podra trabajar el CRUD, en caso contrario se mostrara el formulario de Login*/user? 
    <div className='contenedor-crud'>
      <header className='header-crud'><Link to={"/admin"}><IoIosArrowBack className='btn-atras'/></Link><h2 className='fs-1 text-white fw-bold'>Categorias</h2><BtnCerrarSesion/></header>
      <main className='pt-5 pb-5 d-flex justify-content-evenly align-self-center text-dark'>
        <div></div><ModalCreaCate campo={"nombre_cate"} objeto={categorias}/>
      </main>
      <footer>
        <Tabla columnas={["Nombre"]} mostrar={["nombre_cate"]} objeto={categorias}/>
      </footer>
    </div>:<Login/>}
    </>
  )
}

export default AdminCategorias
