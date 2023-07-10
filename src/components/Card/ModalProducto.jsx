import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BtnAccion from '../BtnAccion';


function ModalProducto( {nombre, imagen, descripcion} ) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='bg-transparent border-0 text-dark fs-3 fw-bold text-decoration-underline' onClick={handleShow}>
        <span className='fs-4'>{nombre}</span>
      </Button>

      <Modal fullscreen={true} show={show} onHide={handleClose}>
        <Modal.Header className='bg-success'>
          <Modal.Title className='fw-bold text-white'>{nombre}</Modal.Title>
          <button type="button" className="btn-close bg-danger" aria-label="Close" onClick={handleClose}></button>
        </Modal.Header>
        <Modal.Body className='d-flex justify-content-center align-items-center flex-column'>
            <img style={{maxHeight: "60vh", maxWidth: "370px"}} className='border border-dark border-3 mt-5' src={imagen} alt="" />
            <p className='text-center pt-3 fw-semibold'>{descripcion}</p>
            <BtnAccion texto={"¡Llamanos!"} telefono={"3004550831"}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalProducto;