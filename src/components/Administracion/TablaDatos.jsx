import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import ModalModiProd from './ModalModiProd'
import ModalBorrProd from './ModalBorrProd'



const TablaDatos = ({ productos, inputBuscar }) => {

  const [busqueda, setBusqueda] = useState('')
    
    const columns = [
        {
            name: "Codigo",
            selector: row=> row.codigo,
            sortable: true

        },
        {
            name: "Nombre",
            selector: row=> row.nombre_prod,
            sortable: true
        },
        {
            name: "Acciones",
            button: true,
            cell: (e) => <div className='d-flex'>
                <ModalModiProd
                producto={e}/>
                <ModalBorrProd
                id={e.id}
                nombre={e.nombre_prod}/>
                </div>,
        }
    ];
    const [records, setRecords] = useState(productos)

    useEffect(() => {
        setRecords(productos);
      }, [productos]);
    

    function filtrar(event) {
        const newData = productos.filter(row => {
            if(isNaN(event.target.value.toLowerCase())){
              return row.nombre_prod.toLowerCase().includes(event.target.value.toLowerCase());
            }else{
              
              return row.codigo.includes(event.target.value)
            }
        })
        setRecords(newData);
    }
    function limpiar () {
      setBusqueda('');
      setRecords(productos);
    }

  return (
    <>
        <div className='text-end'><input ref={inputBuscar} type="text" placeholder='Nombre o Codigo' value={busqueda} onChange={e => {filtrar(e);setBusqueda(e.target.value);}}/><span className='m-1 me-3 fs-5 bg-danger' onClick={limpiar} ><button className='bg-transparent border-0 text-white'>X</button></span></div>
      <DataTable 
        columns={columns}
        data={records}
        fixedHeader
        pagination
      />
    </>
  )
}

export default TablaDatos
