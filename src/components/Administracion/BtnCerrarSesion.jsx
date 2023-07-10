import React from 'react'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'

const BtnCerrarSesion = () => {

    const cerrarSesion = ()=>{
        auth.signOut();
      } //Esta funcion cuando se llamada, utilizara el metodo signOut de firebase para cerrar la sesion actual

  return (
    <button className='btn-cerrar-admin' onClick={cerrarSesion}>Cerrar sesion</button>
  )
}

export default BtnCerrarSesion
