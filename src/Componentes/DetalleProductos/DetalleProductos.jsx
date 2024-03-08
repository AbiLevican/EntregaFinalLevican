import React,{useContext, useState} from "react";
import Contador from "../Contador/Contador";
import { Link, useParams } from "react-router-dom";
import "./DetalleProductos.css"
import { ContextoCarrito } from "../../Contexto/ContextoCarrito";

const DetalleProductos = ({producto}) =>{

    const [carrito, setCarrito] = useState(false)

    const {AgregarItem} = useContext(ContextoCarrito)

    const Agregar = (contar) =>{
        setCarrito(true)
        AgregarItem(producto, contar)
    }

const{id}=useParams

    return (
        
        <div className="detalleProductos">
            <h2>{producto.Nombre}</h2>
            <img src={producto.img} alt={producto.Nombre} className="FotoLibro"/>
            <h3>{producto.Autor}</h3>
            <h4>{producto.Precio}</h4>

            {producto.Stock == 0 ? <h5>Te han ganado de antemano, no hay mas stock!</h5> : (
            carrito   
            ? 
            <Link to={'/carrito'} className="LinkCarrito"> Ir al Carrito </Link> 
            : 
            <Contador inicial={1} stock={producto.Stock} Agregar={Agregar}/>
            )}

            

            <p>{producto.Resumen}</p>
            <p>{producto.Descripción}</p>

        </div>
    )
}

export default DetalleProductos