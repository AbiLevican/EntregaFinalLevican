import React, { useContext } from "react";
import "./CarritoCompras.css"
import { ContextoCarrito } from "../../Contexto/ContextoCarrito";
import { Link } from "react-router-dom";

const CarritoCompras = () =>{

    const{CantidadCarrito} = useContext(ContextoCarrito)

    return(
        <> 
        <Link to={"/carrito"}>
        <img src="/././assets/Imagenes/CarritoDeCompras.jpg" alt="carrito de compras" className="carrito"/>
        </Link>
        <p className="numero">{CantidadCarrito() == 0 ? null : CantidadCarrito()}</p>
        </>
    )
}

export default CarritoCompras