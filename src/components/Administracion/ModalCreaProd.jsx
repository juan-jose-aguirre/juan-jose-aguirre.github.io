import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { GoPlus } from "react-icons/go";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ModalCreaProd = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setImagen('')
    setNombreProd('');
    setCodigo('');
    setDescripcion('');
  };
  const handleShow = () => setShow(true);

  const [imagen, setImagen] = useState("");

  const [nombreProd, setNombreProd] = useState("");
  const [codigo, setCodigo] = useState("");
  const [idCategoria, setIdCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "categorias"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let categoriasArr = [];
      querySnapshot.forEach((doc) => {
        categoriasArr.push({ ...doc.data(), id: doc.id });
      });
      setCategorias(categoriasArr);
    });
    return () => unsubscribe();
  }, []);

  const subirImagen = async (e) => {
    if(e.target.files[0] === undefined){
      setImagen('')
      alert("Coloca una imagen");
      return;
    }else{
    const file = e.target.files[0];
    const nombre = new Date().getTime() + (file.name===undefined?file.name:'');
    const storageRef = ref(storage, `productos/${nombre}`);

    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    setImagen(url);
    }
  };

  const crearProd = async (e) => {
    e.preventDefault();
    if (!nombreProd.trim() || !codigo.trim() || !descripcion.trim() || !imagen.trim()) {
      alert("Hay campos vacios");
      setNombreProd("");
      setCodigo("");
      setDescripcion("");
      setImagen();
      return;
    }

    try {
      await addDoc(collection(db, "productos"), {
        imagen: imagen,
        nombre_prod: nombreProd,
        codigo: codigo,
        categoria: idCategoria,
        descripcion: descripcion
      });
      alert(`Se creo producto: ${nombreProd}`);
    } catch (error) {
      alert(`ESTE ES ERROR: ${error}`);
    }
    setNombreProd("");
    setCodigo("");
    setDescripcion("");
    setImagen();
  };

  return (
    <>
      <button className="bg-transparent border-0">
      <GoPlus 
        className="bg-white rounded-circle"
        style={{fontSize: "2.5rem"}}
        onClick={handleShow} 
        />
        </button>      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p className="fw-bold">Creando producto</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              backgroundColor: "green",
              width: "100%",
              height: "65vh"
            }}
          >
            <form
              onSubmit={(e) => {
                crearProd(e);
                handleClose();
              }}
              className="formulario"
            >
              <div
              ><img style={{
                marginRight: "14vw",
                width: "20vh",
                height: "20vh"
              }} src={imagen} alt="" /></div>
              <input className="form-control" style={{maxWidth: "230px", fontSize: "1.8vh"}} type="file" id="file" onChange={subirImagen} required />

              <input
                className="fw-bold bg-secondary-subtle rounded-pill border-0 ps-1 text-black"
                type="text"
                placeholder="Nombre: "
                autoFocus="true"
                value={nombreProd}
                onChange={(e) => setNombreProd(e.target.value.toUpperCase())}
                required
              />
              <input
                className="fw-bold bg-secondary-subtle rounded-pill border-0 ps-1 text-black"
                type="number"
                placeholder="Codigo: "
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                required
              />
              
              <select id="categorias" className="rounded-pill" onChange={e=>setIdCategoria(e.target.value)} required>
                <option value="" >selecciona un categoria</option>
                {categorias.map((categoria, index) => {
                  return (
                    <option value={categoria.id} key={index}>
                      {categoria.nombre_cate}
                    </option>
                  );
                })}
              </select>

              <textarea
                placeholder="Descripcion: "
                cols="23"
                rows="3"
                className="fw-bold bg-secondary-subtle rounded border-0 ps-1 text-black"
                onChange={(e) => setDescripcion(e.target.value.toUpperCase())}
                required
              ></textarea>

              <input className="mb-2" type="submit" value="Guardar" />
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalCreaProd;
