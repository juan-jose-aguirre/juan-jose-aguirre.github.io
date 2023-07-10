import React, { useEffect, useState } from "react";
import Logo from "./Logo";
// import Lupa from "./Lupa";
import { Link } from "react-router-dom";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase";



const NavBar = () => {

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "categorias"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let categoriasArr = [];
    querySnapshot.forEach((doc) => {
        categoriasArr.push({ ...doc.data(), id: doc.id });
    });
        setCategorias(categoriasArr);
    });
    return () => unsubscribe();
}, [])

  return (
    <>
      <div className="header">

      <nav className="navbar bg-white fixed-top" style={{boxShadow: "0 .3rem .5rem rgba(255, 255, 255,1)"}}>

  <div className="container-fluid">

    
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="navbar-brand" to={"/"}><Logo/></Link>

    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{width: "50vw"}}>
      
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><Logo/></h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{backgroundColor: "red"}}></button>
      </div>

      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

          <li className="nav-item mb-2">
            <a className="nav-link green" aria-current="page" href="/">Inicio</a>
          </li>
          <li className="nav-item mb-3">
            <a className="nav-link green" href="#quien-somos">Nosotros</a>
          </li>
          <li className="green">
            <details className="nav-item mb-3 ">
              <summary>Productos</summary>
              <ul>
                {
                categorias.map((categoria) => {
                  return (
                    <li key={categoria.id}>
                      <button className="border-0 bg-white" data-bs-dismiss="offcanvas" aria-label="Close"><Link className="text-reset text-decoration-none" to={`/categoria/${categoria.nombre_cate}/${categoria.id}#productos`}>{categoria.nombre_cate}</Link></button>
                    </li>
                  );
                })}
              </ul>

            </details>
          </li>
            
          <li className="nav-item" style={{marginBottom: "36vh"}}>
            <a className="nav-link green" href="#contactos">Contactanos</a>
          </li>
          <li className="nav-item mb-0 pb-0">
            <Link to={"/login"}>Ingresar</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
      </div>
    </>
  );
};

export default NavBar;
