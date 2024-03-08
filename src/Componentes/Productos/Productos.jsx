import React from "react";
import "./Productos.css"
import { Link } from "react-router-dom";

const Productos = ({producto}) =>{

    return(
        <>
        <Link to ={`/detalle/${producto.id}`}>
            <div key={producto.id} className="info">
                <h4>{producto.Nombre}</h4>
                <img src={producto.img} alt={producto.Nombre} className="imagen" />
                <p>{producto.Autor}</p>
            </div>
        </Link>
        </>
    )
}

export default Productos