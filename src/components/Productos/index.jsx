import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../NavBar";
import Elipse from "../Elipse";
import BtnAccion from "../BtnAccion";
import Card from "../Card";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase";
import Contactos from "../Contactos";
import Mapa from "../Mapa";
import { TiArrowBackOutline } from "react-icons/ti";




const Productos = () => {
  let { nombre, id } = useParams();

  const [productos, setProductos] = useState([]);

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
  }, [id])
  


  useEffect(() => {
    const q = query(collection(db, "productos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let productosArr = [];
      querySnapshot.forEach((doc) => {
        productosArr.push({ ...doc.data(), id: doc.id });
      });
      setProductos(productosArr);
    });
    return () => unsubscribe();
  }, []);

  let arregloProductos = productos.filter((producto) => {
    if (producto.categoria.toLowerCase() === id.toLowerCase()) {
      return producto;
    }
  });

  return (
    <>
      <header>
      <NavBar />
        <div id="productos" className="mt-3"></div>
      <BtnAccion texto={"¡Llamanos!"} telefono={"3004550831"} />
      </header>
      <main>
      <section className="seccion-productos">
      
    <div className="text-white" style={{position: "relative", top: "6vh", left: "2vh"}}><Link to="/#products" className="text-white fw-bold"><TiArrowBackOutline/>{` INICIO`}</Link></div>
        <Elipse texto={"Productos"} color={"green"} />
        <div className="pt-5 text-white text-center fw-bold fs-3">{nombre}</div>
        <article className="pt-2 articulo-categorias">
          {arregloProductos.map((producto, index) => {
            return (
              <>
                <Card
                  key={index}
                  nombre={producto.nombre_prod}
                  id={producto.id}
                  imagen={producto.imagen}
                  descripcion={producto.descripcion}
                />
              </>
            );
          })}
          <div id="quien-somos"></div>
        </article>
        <div id="contactos"></div>
        <article id="articulo-quien-somos">
            <h2>¿Quiénes somos?</h2>
            <p>{quienSomos}</p>
          </article>
      </section>
      <section id="seccion-marcas">
          <Elipse texto={"Contactanos"} color={"white"} />
          <article className="m-0" id="contactos">
            <Contactos whatsapp={"3004550831"} fijo={"(602)8880260"} />
          </article>
        </section>
        <section id="seccion-informacion">
          <article id="ubicacion">
            <Elipse texto={"Ubicacion"} color={"green"} />
            <Mapa texto={direccion} />
          </article>
        </section>
        </main>
        <footer>
        <Elipse
          texto={
            "© 2023 Todos los derechos reservados a Ferrocentro 2000 | Desarrollado por Juan Jose Aguirre"
          }
          color={"white"}/>
      </footer>
    </>
  );
};
export default Productos;
