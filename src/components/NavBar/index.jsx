import React from "react";
import Logo from "./Logo";
// import Lupa from "./Lupa";
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <>
      <div id="header">

      <nav className="navbar bg-white fixed-top" style={{boxShadow: "0 .8rem 1.1rem rgba(255, 255, 255,1)"}}>

  <div className="container-fluid">

    
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/"><Logo/></a>

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
            <a className="nav-link green" href="#articulo-quien-somos">Nosotros</a>
          </li>
          <li className="green">
            <details className="nav-item mb-3 ">
              <summary>Productos</summary>
              <ul>
                <li>Holi</li>
                <li>Holi</li>
                <li>Holi</li>
                <li>Holi</li>
                <li>Holi</li>
                <li>Holi</li>
              </ul>
            </details>
          </li>
            
          <li className="nav-item" style={{marginBottom: "36vh"}}>
            <a className="nav-link green" href="#marcas">Contactanos</a>
          </li>
          <li className="nav-item mb-0 pb-0">
            <Link to={"/login"}>Ingresar</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>


        {/* <ul id="ul-header">
          <li id="li-menu-header">
            <a
              data-bs-toggle="collapse"
              data-bs-target="#collapseWidthExample"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
            >
              <Menu />
            </a>
          </li>
          <li id="li-logo-header">
            <Logo />
          </li>
          <li id="li-lupa-header">
            <Lupa />
          </li>
        </ul>

        <div id="menu">
          <div
            classNameName="collapse collapse-horizontal"
            id="collapseWidthExample"
            style={{
              height: "100vh",
              backgroundColor: "rgba(255, 255, 255,.5)",
            }}
          >
            <div
              classNameName="card card-body"
              style={{ width: "50vw", height: "100vh" }}
            >
              <div id="contenido-menu">
                <div classNameName="lista-menu">
                  <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="#articulo-quien-somos">Nosotros</a></li>
                    <li>Productos</li>
                    <li><a href="#marcas">Contactanos</a></li>
                  </ul>
                </div>
                <div classNameName="lista-menu">Ingresar</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default NavBar;
