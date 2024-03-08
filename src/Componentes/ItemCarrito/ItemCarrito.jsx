import React from "react";
import "./ItemCarrito.css"

const ItemCarrito = ({EliminarItem, producto}) =>{

    return(
        <>
        <h3>{producto.producto.Nombre}</h3>
        <img src={producto.producto.img} alt={producto.producto.Nombre}  className="FotoLibroCarrito"/>

        <p>Te llevas: {producto.cantidad}</p>
        <p>Precio por libro: ${producto.producto.Precio*producto.cantidad}</p>
        <button onClick={() => EliminarItem(producto.producto.id)} className="BotonEliminar">Eliminar</button>
        </>
    )
}

export default ItemCarrito