import React, { useEffect, useRef, useState } from 'react'
import { db, auth } from '../../firebase';
import Login from '../Login';
import {AiOutlineSearch} from "react-icons/ai"
import {IoIosArrowBack} from 'react-icons/io'
import BtnCerrarSesion from './BtnCerrarSesion';
import { Link } from 'react-router-dom';
import { collection, onSnapshot, query } from 'firebase/firestore';
import ModalCreaProd from './ModalCreaProd';
import TablaDatos from './TablaDatos';




const AdminProductos = () => {
  
  const [user, setUser] = useState(null); //Se crea esta variable para verificar si el ususario ingreso corectamente las credenciales

  const [productos, setProductos] = useState([]); //La variable nos servira para almacenar todos los productos existentes

  const inputBuscar = useRef(null) //Se crea una referencia para el campo de busqueda

  useEffect(()=>{
    auth.onAuthStateChanged((usuarioFirebase)=>{
      setUser(usuarioFirebase);
    });
    const q = query(collection(db, 'productos'));
    const unsubscribe = onSnapshot(q, (querySnapshot)=>{
      let productosArr = [];
      querySnapshot.forEach((doc) =>{
        productosArr.push({...doc.data(), id: doc.id})
      });
      setProductos(productosArr);
    })
    return () => unsubscribe()
  } , [] ) //Cada vez que se carge el componente, se valida el usuario y tambien se le solicita a firebase por medio de una promesa, el arreglo de objetos de productos

  const buscar = () => {
    inputBuscar.current.focus();
  } // La funcion ayuda a hacer foco en el campo especificado por la referencia

  return (
    <>
    {/*Validamos si el usuario existe, en caso de ser verdadero, se podra trabajar el CRUD, en caso contrario se mostrara el formulario de Login*/ user? 
    <div className='contenedor-crud border border-dark border-5'>
      <header className='header-crud'><Link to={"/admin"}><IoIosArrowBack className='btn-atras'/></Link><h2 className='fs-1 text-white fw-bold'>Productos</h2><BtnCerrarSesion/></header>
      <main className='pt-5 pb-5 d-flex justify-content-evenly align-self-center text-dark'>
        <button className='bg-transparent border-0'>
        <AiOutlineSearch className='bg-white border-0 rounded-circle' style={{fontSize: "2.5rem"}} onClick={buscar}/>
        </button>
        <ModalCreaProd/>
      </main>
      <footer className='overflow-y-scroll' style={{width: "90%", margin: "0 5%", minHeight: "46.7vh"}}>
        <TablaDatos productos={productos} inputBuscar={inputBuscar}/>
      </footer>
    </div>:<Login/>}
    </>
  )
}

export default AdminProductos
