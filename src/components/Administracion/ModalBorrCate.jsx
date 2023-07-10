import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { GoTrashcan } from 'react-icons/go'
import { BsCheckLg } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'



const ModalBorrCate = ({id, nombre}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const borrarCate = async (e) => {
        e.preventDefault();
        try {
            await deleteDoc(doc(db, 'categorias', id));
            alert(`La categoria ${nombre} se elimino`);
        } catch (error) {
            alert(`No se pudo eliminar la categoria ${nombre}`)
        }
        
    }


  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <GoTrashcan className='fs-3'/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><p className='fw-bold text-danger'>Eliminando Categoria</p></Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
        <p className='fs-2 fw-semibold'>¿Seguro deseas eliminar la categoria <span className='text-danger'>{nombre}</span>?</p>
        <div className='pt-5 d-flex flex-row justify-content-evenly'>
            <button className='border-0 bg-success fs-1' onClick={(e)=>{borrarCate(e);handleClose();}}><BsCheckLg className='text-white'/></button>
            <Button variant="danger" onClick={handleClose}>
            <IoMdClose className='text-white fs-1'/>
          </Button>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalBorrCate;
