import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { MdOutlineModeEditOutline } from 'react-icons/md'



const ModalModiCate = ({id, nombre}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false); setNuevoNombre(nombre)};
    const handleShow = () => {setShow(true); setNuevoNombre(nombre)};

    const [nuevoNombre, setNuevoNombre] = useState(nombre)


    const modificarCate = async (e) => {
        e.preventDefault();
        try {
            await updateDoc(doc(db, 'categorias', id), {nombre_cate: nuevoNombre});
            alert(`La categoria ${nombre} se modifico por: ${nuevoNombre}`);
        } catch (error) {
            alert(`No se pudo modificar la categoria ${nombre}`)
        }
        
    }


  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        <MdOutlineModeEditOutline className='fs-3'/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><p className='fw-bold'>Modificando Categoria: <span className='text-danger'>{nombre}</span></p></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{backgroundColor: "green", width: "100%", height: "65vh", position: "relative"}}>
            <form onSubmit={(e)=>{modificarCate(e);handleClose();}} className="formulario">
              <input autoFocus={true} className="fw-bold bg-secondary-subtle rounded-pill border-0 ps-1 text-black" type="text" placeholder="Nombre: " value={nuevoNombre} onChange={(e)=> setNuevoNombre(e.target.value.toUpperCase())}/>
              <input className="mt-5" type="submit" value="Guardar"  />
            </form>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalModiCate;
