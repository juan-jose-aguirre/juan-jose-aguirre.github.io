import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import FormLogin from "./FormLogin";
import Admin from "../Administracion";
import { onAuthStateChanged } from "firebase/auth";



const Login = () => {
  
  const [usuario, setUsuario] = useState(null)

  
  useEffect(()=>{
    auth.onAuthStateChanged((usuarioFirebase)=>{
      setUsuario(usuarioFirebase);
    });
  } , [] )

  return <>{usuario ? <Admin usuario={usuario} />:<FormLogin setUsuario={setUsuario}/>}</>
};

export default Login;
