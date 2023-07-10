import React, { useEffect } from "react";
import NavBar from "../NavBar";
import Banner from "../Banner";
import Card from "../Card";
import Marcas from "../Marcas";
import Contactos from "../Contactos";
import Elipse from "../Elipse";
import BtnAccion from "../BtnAccion";
import Mapa from "../Mapa";
import Aliados from "../Aliados";
import "../../App.css";


const Home = (props) => {
  const quienSomos =
    "Ferretería 2000 nació, en el año 2001, como una empresa familiar bajo la razón social ferrocentro 2000. Comenzó operaciones en el departamento del Valle del Cauca, con un local ubicado en el centro comercial cali 2000, en el segundo piso. Actualmente opera  y se dedica a la comercialización de productos ymateriales para el sector de la construcción. Cuenta con un unico (1) puntos de venta en el centro de Cali.";
  const direccion = "Carrera 9 # 11-50 segundo piso local 209";

  useEffect(() => {
    if(window.location.hash){
      const seccion = window.location.hash.substring(1);
      const elemento = document.getElementById(seccion);
      if(elemento){
        elemento.scrollIntoView();
      }
    }
  }, [])

  return (
    <>
      <header>
        <NavBar />
        <Banner />
        <Elipse texto={"FERROCENTRO 2000"} color={"white"} />
          <div id="products"></div>
        <BtnAccion texto={"¡Llamanos!"} telefono={"3004550831"} />
      </header>

      <main>
        <section className="seccion-productos">
          <Elipse texto={"Productos"} color={"green"} />
          <article className="articulo-categorias" id="seccion-productos">
            <Card nombre="TORNILLERIA" id="qXYRMUgRU4Ij1tm7o5eK"/>
            <Card nombre="AEROSOLES" id="TBVLZdIrFDnexpodvzl0"/>
            <Card nombre="HERRAMIENTAS" id="JqbAZlpgIB6SeU6idlHq"/>
            <Card nombre="ELECTRICOS" id="RKRenmt8W0lgms4X0MoI"/>
            <Card nombre="OTROS" id="kn2gPRu9NnaUtAIqGagB"/>
            <div id="quien-somos"></div>
          </article>
          <article id="articulo-quien-somos">
            <h2>¿Quiénes somos?</h2>
            <p>{quienSomos}</p>
          </article>
        </section>

        <section id="seccion-marcas">
          <div id="contactos"></div>
          <Elipse texto={"Nuestras marcas"} color={"white"} />
          <article>
            <Marcas />
          </article>
          <article>
            <Contactos whatsapp={"3004550831"} fijo={"(602)8880260"} />
          </article>
        </section>

        <section id="seccion-informacion">
          <article id="ubicacion">
            <Elipse texto={"Ubicacion"} color={"green"} />
            <Mapa texto={direccion} />
          </article>
          <article id="aliados">
            <Elipse texto={"Aliados"} color={"white"} />
            <Aliados />
          </article>
        </section>
      </main>

      <footer>
        <Elipse
          texto={
            "Copyright 2020 @ Todos los derechos reservados a Ferrocentro 2000 | Desarrollado por Juan Jose Aguirre"
          }
          color={"green"}
        />
      </footer>
    </>
  );
};

export default Home;
