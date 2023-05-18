import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Contactos from '../Contactos';
import Logo from '../NavBar/Logo';




const ErrorPage = () => {

    const error = useRouteError();

  return (
    <div className='text-center pt-5'>
            <h2 className='fs-1'>Pagina de Error</h2>
        <div className='container-sm'>
            <p className='text-success fs-2 pt-5 pb-5'>La pagina que buscas tuvo el siguiente problema: <span className='text-danger'>{error.statusText || error.message}</span><br/>Comunicate con la tienda <Link to={"/"}><Logo/></Link></p>
            <Contactos whatsapp={'3004550831'} fijo={"(602)8880260"}/>
        </div>
    </div>
  )
}

export default ErrorPage
