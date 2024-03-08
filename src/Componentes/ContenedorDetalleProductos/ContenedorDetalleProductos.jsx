import React, {useState, useEffect} from "react";
import DetalleProductos from "../DetalleProductos/DetalleProductos";
import { useParams } from "react-router-dom";
import {getDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/Configuracion";

const ContenedorDetalleProductos = () =>{

    const [producto, setProducto] = useState([])

    const {id}= useParams();

    useEffect(() =>{
    const DocNuevo = doc(db, "carrito", id)

    getDoc(DocNuevo)
    .then(Respuesta =>{
        const Data = Respuesta.data()
        const ProductoNuevo = {id: Respuesta.id,...Data}
        setProducto(ProductoNuevo)
    })
}, []) 

    return(
        <>
            <DetalleProductos producto={producto}/>
        </>
    )
}

export default ContenedorDetalleProductos