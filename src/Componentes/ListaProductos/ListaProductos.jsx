import React from "react";
import Productos from "../Productos/Productos";
import "./ListaProductos.css";

const ListaProductos = ({productos}) =>{

    return(
    <>
        
        <div className="ListaDeLibros">
        {
            productos.map((producto) => {
                return(
                    <Productos producto ={producto}/>
                )
            })
        }
        
        </div>
    </>
    )
}

export default ListaProductos