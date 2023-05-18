import React, { useEffect, useState } from "react";
import Login from "../Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import {AiOutlineClose} from 'react-icons/ai'

const FormCrearProdu = () => {

    const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((usuarioFirebase) => {
      setUser(usuarioFirebase);
    });
  }, []);

  return (
    <>
      {user ? (
        <div style={{backgroundColor: "green", width: "100%", height: "100vh", position: "relative"}}>
          <div className="contenedor-formulario position-relative">
            <h2 className="p-2 fw-bold">Creando</h2>
            <Link className="position-absolute top-0 end-0 p-4 fs-1 text-danger" to={"/admin_categorias"}><AiOutlineClose/></Link>
            <div className="formulario">
              <input className="fw-bold bg-secondary-subtle rounded-pill border-0 ps-1 text-black" type="text" placeholder="Nombre: " id="nombre-categoria" />
              <Link to={"/exitoso"}><input className="mt-5" type="submit" value="Guardar" /></Link>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  )
}

export default FormCrearProdu


