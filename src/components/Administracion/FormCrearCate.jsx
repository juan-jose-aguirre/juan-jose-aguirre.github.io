import React, { useEffect, useState } from "react";
import Login from "../Login";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../../firebase";
import { Link } from "react-router-dom";
import {AiOutlineClose} from 'react-icons/ai'
import { addDoc, collection } from "firebase/firestore";


const FormCrearCate = (props) => {
  const [user, setUser] = useState(null);
  const [nombreCate, setNombreCate] = useState("")

  useEffect(() => {
    auth.onAuthStateChanged((usuarioFirebase) => {
      setUser(usuarioFirebase);
    });
  }, []);

  const agregarCate = async (e) =>{
    e.preventDefault();
    console.log(nombreCate)
    if(!nombreCate.trim()){
      alert("Hay campos vacios");
      return
    }

    try {
      await addDoc(collection(db, 'categorias'),{nombre_cate: nombreCate});
      alert(`Se creo la categoria: ${nombreCate}`);
    } catch (error) {
      console.log("ESTE ES ERROR:",error)
    }
    setNombreCate('')
  }

  return (
    <>
      {user ? (
        <div style={{backgroundColor: "green", width: "100%", height: "100vh", position: "relative"}}>
          <div className="contenedor-formulario position-relative">
            <h2 className="p-2 fw-bold">Creando</h2>
            <Link className="position-absolute top-0 end-0 p-4 fs-1 text-danger" to={"/admin_categorias"}><AiOutlineClose/></Link>
            <form onSubmit={agregarCate} className="formulario">
              <input className="fw-bold bg-secondary-subtle rounded-pill border-0 ps-1 text-black" type="text" placeholder="Nombre: " value={nombreCate} onChange={(e)=> setNombreCate(e.target.value)}/>
              <input className="mt-5" type="submit" value="Guardar" />
            </form>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default FormCrearCate;
