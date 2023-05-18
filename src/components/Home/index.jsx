import React from "react";
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
    "Ferretería 2000 nació, en el año 2012, como una empresa familiar bajo la razón social Miscelánea Cal y Cemento la Mayor. Comenzó operaciones en el departamento del Valle del Cauca, con un local ubicado sobre la vía Panamericana que comunica Cali – Jamundí. Actualmente opera bajo la razón social Ferretería La Mayor Cali S.A.S y se dedica a la comercialización de productos y servicios para el sector de la construcción. Cuenta con dos (2) puntos de venta al sur de Cali, oficina administrativa y tres (3) bodegas de almacenamiento.";
  const direccion = "Carrera 9 # 11-50 segundo piso local 209";

  return (
    <>
      <header>
        <NavBar />
        <Banner />
        <Elipse texto={"FERROCENTRO 2000"} color={"white"} />
        <BtnAccion texto={"¡Llamanos!"} telefono={"3004550831"} />
      </header>

      <main>
        <section id="seccion-productos">
          <Elipse texto={"Productos"} color={"green"} />
          <article id="articulo-categorias">
            <Card name="tornilleria" />
            <Card name="aerosoles" />
            <Card name="herramientas" />
            <Card name="electricos" />
            <Card name="todos" />
          </article>
          <article id="articulo-quien-somos">
            <h2>¿Quiénes somos?</h2>
            <p>{quienSomos}</p>
          </article>
        </section>

        <section id="seccion-marcas">
          <Elipse texto={"Nuestras marcas"} color={"white"} />
          <article id="marcas">
            <Marcas />
          </article>
          <article id="contactos">
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
