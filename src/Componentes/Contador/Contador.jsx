import React, {useState} from "react";
import "./Contador.css"

const Contador = ({inicial, stock, Agregar}) =>{

    const[ContItem, setContador] = useState(1)

    const restar = () =>{
        if(ContItem > inicial){
            setContador(ContItem - 1)
        }
    }

    const sumar = () =>{
        if(ContItem < stock){
            setContador(ContItem + 1)
        }
    }

    const agregarCarrito = () =>{
        Agregar(ContItem)
    }

    return(
        <>
            <h4>Quiero: {ContItem}</h4>
            <button onClick={sumar} className="botones">+</button>
            <button onClick={agregarCarrito} className="botones">Agregar al carrito</button>
            <button onClick={restar} className="botones">-</button>
        
        </>
    )
}

export default Contador