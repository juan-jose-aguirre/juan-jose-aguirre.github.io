import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const FormLogin = (props) => {

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

    const iniciarSesion = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, correo, password)
          .then((usuarioFirebase) => {
            props.setUsuario(usuarioFirebase);
          })
          .catch((error) => {
            alert("Credenciales Incorrectas");
            setCorreo("");
            setPassword("");
          });
      };

      const [tipo, setTipo] = useState("password")

      const verPassword = () => {
        if(tipo==="password"){
          setTipo("text")
        }else{
          setTipo("password")
        }
      }

  return (
    <div id="container-form">
      <div id="form">
        <button className="cerrar-ingreso">
          <Link to={"/"} className="text-white text-decoration-none fs-1">X</Link>
        </button>
        <h2 className="title-form">Ingresar</h2>
        <form className="text-center" onSubmit={iniciarSesion}>
          <div className="item-form ">
            <p>Correo</p>
            <input type="email" name="email" id="email" value={correo} onChange={e => setCorreo(e.target.value)} autoComplete="username" required />
          </div>
          <div className="item-form">
            <p>Contrasena</p>
            <input type={tipo} name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password" required />
              <AiOutlineEye onClick={verPassword} />
          </div>
          <div className="item-form">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormLogin
