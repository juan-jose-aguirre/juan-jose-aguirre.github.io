import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import Alert from "react-bootstrap/Alert";
import { GoPlus } from "react-icons/go";

const ModalCreaCate = ({campo, objeto}) => {



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nombreCate, setNombreCate] = useState("");

  const crearCate = async (e) => {
    e.preventDefault();
    if (!nombreCate.trim()) {
      alert("Hay campos vacios");
      return;
    }
    let existe = objeto.find(obj =>{
      return obj[campo]===`${nombreCate}`;
    })
    if (existe !== undefined) {
      alert("Ese nombre de categoria ya existe");
      setNombreCate('');
      return;
    }
    
    try {
      await addDoc(collection(db, "categorias"), { nombre_cate: nombreCate });
      alert(`Se creo la categoria: ${nombreCate}`);
    } catch (error) {
      alert(`OPPSS SUCEDIO UN ERROR: ${error}`);
    }
    setNombreCate("");
  };

  return (
    <>
      <Button
        variant=""
        className="bg-white rounded-circle"
        onClick={handleShow}
      >
        <GoPlus className="fs-3" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p className="fw-bold">Creando Categoria</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              backgroundColor: "green",
              width: "100%",
              height: "65vh",
              position: "relative",
            }}
          >
            <form
              onSubmit={(e) => {
                crearCate(e);
                handleClose();
              }}
              className="formulario"
            >
              <input
                autoFocus={true}
                className="fw-bold bg-secondary-subtle rounded-pill border-0 ps-1 text-black"
                type="text"
                placeholder="Nombre: "
                value={nombreCate}
                onChange={(e) => setNombreCate(e.target.value.toUpperCase())}
                required
              />
              <input className="mt-5" type="submit" value="Guardar" />
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalCreaCate;
