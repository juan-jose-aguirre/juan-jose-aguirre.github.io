import React from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai'


const Tabla = ({ mostrar, objeto }) => {
  return (
    <div className="contenedor-tabla overflow-auto">
        <table className="table bg-white rounded text-center fs-5">
      <thead>
        <tr>
          <th colSpan={1}>
            <span className="span">Nombre</span>
          </th>
          <th colSpan={2}>
            <span className="span">Acciones</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {objeto.map((categoria) => {
          return (
            <tr>
              <td key={categoria.id} className="text-dark">
                {categoria.nombre_cate}
              </td>
              <td>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><MdOutlineModeEditOutline id={categoria.id} className="text-warning fs-1" /></button>
              </td>
              <td>
                <BsTrash id={categoria.id} data-bs-toggle="modal" data-bs-target="#exampleModal" className="text-danger fs-2" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content bg-green">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">Creando</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div style={{backgroundColor: "green", width: "100%", height: "100vh", position: "relative"}}>
          <div className="contenedor-formulario position-relative">
            <h2 className="p-2 fw-bold">Creando</h2>
            <Link className="position-absolute top-0 end-0 p-4 fs-1 text-danger" to={"/admin_categorias"}><AiOutlineClose/></Link>
            <form className="formulario">
              <input className="fw-bold bg-secondary-subtle rounded-pill border-0 ps-1 text-black" type="text" placeholder="Nombre: "/>
              <input className="mt-5" type="submit" value="Guardar" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    
  );
};

export default Tabla;
