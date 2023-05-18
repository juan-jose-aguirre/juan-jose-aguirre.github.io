import React from 'react'
import {BsCheckLg} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Exitoso = () => {
  return (

    <div style={{backgroundColor: "green", width: "100%", height: "100vh", position: "relative"}}>
          <div className="contenedor-formulario d-flex flex-column justify-content-center align-items-center">
            <Link to={"/admin_categorias"} className='exitoso'><BsCheckLg/></Link>
          </div>
        </div>
  )
}

export default Exitoso
