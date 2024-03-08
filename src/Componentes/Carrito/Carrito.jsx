import React, { useContext } from "react";
import { ContextoCarrito } from "../../Contexto/ContextoCarrito";
import "./Carrito.css"
import ItemCarrito from "../ItemCarrito/ItemCarrito";
import { Link } from "react-router-dom";

const Carrito = () =>{

    const{carrito, VaciarCarrito, TotalCarrito, EliminarItem} = useContext(ContextoCarrito)

    return(
    <div className="textoCarrito">
        <h1>Carrito</h1>

        {carrito.length == 0
        ?
        <>
        <h3>No hay Productos en tu Carrito</h3>
        </>
        :
        <>
        <h2>En tu Carrito Esta:</h2>

        {carrito.map((p) =>(
            <ItemCarrito key={p.producto.id} EliminarItem={EliminarItem} producto={p}/>
        ))}

        <h4>Total : ${TotalCarrito()}</h4>
        <button onClick={VaciarCarrito} className="BotonVaciar">Vaciar Carrito</button>
        <Link to={"/checkout"} className="Finalizar"> Finalizar Compra</Link>
        </>
}
    </div>
    )
}

export default Carrito