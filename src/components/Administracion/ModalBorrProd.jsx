import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { GoTrashcan } from 'react-icons/go'
import { BsCheckLg } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'

const ModalBorrProd = ({id, nombre}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const borrarProd = async (e) => {
        e.preventDefault();
        try {
            await deleteDoc(doc(db, 'productos', id));
            alert(`El producto ${nombre} se elimino`);
        } catch (error) {
            alert(`No se pudo eliminar el producto ${nombre}`)
        }
        
    }

  return (
    <div>
      <Button variant="danger" onClick={handleShow}>
        <GoTrashcan className='fs-3'/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><p className='fw-bold text-danger'>Eliminando Producto</p></Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
        <p className='fs-2 fw-semibold'>¿Seguro deseas eliminar el producto <span className='text-danger'>{nombre}</span>?</p>
        <div className='pt-5 d-flex flex-row justify-content-evenly'>
            
            <Button variant="danger" onClick={handleClose}>
            <IoMdClose className='text-white fs-1'/>
          </Button>
          <Button variant="success" onClick={(e)=>{borrarProd(e);handleClose();}}>
            <BsCheckLg className='text-whit fs-1'/>
          </Button>
        </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ModalBorrProd
