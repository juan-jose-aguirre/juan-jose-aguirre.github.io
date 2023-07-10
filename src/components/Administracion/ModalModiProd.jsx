import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateDoc, doc, collection, onSnapshot, query } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ModalModiProd = ({producto}) => {


    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false); setNuevoNombre(''); setImagen(producto.imagen)};
    const handleShow = () => {setShow(true); setNuevoNombre(producto.nombre_prod)};

    const [nuevoNombre, setNuevoNombre] = useState(producto.nombre_prod);
    const [imagen, setImagen] = useState("");
    const [codigo, setCodigo] = useState("");
    const [idCategoria, setIdCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        setNuevoNombre(producto.nombre_prod)
        setCodigo(producto.codigo)
        setIdCategoria(producto.categoria)
        setDescripcion(producto.descripcion)
        setImagen(producto.imagen)
        const q = query(collection(db, "categorias"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let categoriasArr = [];
        querySnapshot.forEach((doc) => {
            categoriasArr.push({ ...doc.data(), id: doc.id });
        });
            setCategorias(categoriasArr);
        });
        return () => unsubscribe();
    }, [])


    const subirImagen = async (e) => {
        if(e.target.files[0] === undefined){
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

      const modificarProd = async (e) => {
        e.preventDefault();
        console.log(producto.categoria);
        if (!nuevoNombre.trim() || !codigo.trim() || !idCategoria.trim() || !descripcion.trim() || !imagen.trim()) {
            alert("Hay campos vacios");
            setNuevoNombre(producto.nombre_prod);
            setCodigo(producto.codigo);
            setDescripcion(producto.descripcion);
            setImagen(producto.imagen);
            return;
          }
        try {
            await updateDoc(doc(db, 'productos', producto.id), 
            {
                imagen: imagen,
                nombre_prod: nuevoNombre,
                codigo: codigo,
                categoria: idCategoria,
                descripcion: descripcion
            });
            setCodigo(codigo)
            setIdCategoria(idCategoria)
            setDescripcion(descripcion)
            setImagen(imagen);
            alert(`El producto ${nuevoNombre} se modifico`);
        } catch (error) {
            alert(`No se pudo modificar el producto ${producto.nombre_prod}`)
        }
    }

  return (  
    <>
      <Button variant="warning" onClick={handleShow}>
        <MdOutlineModeEditOutline className='fs-3'/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><p className='fw-bold'>Modificando Producto: <span className='text-danger'>{producto.nombre_prod}</span></p></Modal.Title>
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
                modificarProd(e);
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
              <input className="form-control" type="file" id="file" onChange={subirImagen} />

              <input
                className="fw-bold bg-secondary-subtle rounded-pill border-0 ps-1 text-black"
                type="text"
                placeholder="Nombre: "
                value={nuevoNombre}
                onChange={(e) => setNuevoNombre(e.target.value.toUpperCase())}
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

              <select id="categorias"  onChange={e=>setIdCategoria(e.target.value)} required>
                <option>selecciona un categoria</option>
                {
                categorias.map((categoria, index) => {
                  return (
                    <option value={categoria.id} key={index} selected={(categoria.id === producto.categoria?true:false)}>
                      {categoria.nombre_cate}
                    </option>
                  );
                })}
              </select>

              <textarea
                placeholder="Descripcion: "
                cols="23"
                rows="3"
                value={descripcion}
                className="fw-bold bg-secondary-subtle rounded border-0 ps-1 text-black"
                onChange={(e) => setDescripcion(e.target.value.toUpperCase())}
                required
              ></textarea>

              <input type="submit" value="Guardar" />
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalModiProd
