import React, {useContext, useState} from "react";
import { collection, addDoc, updateDoc,doc, getDoc } from "firebase/firestore";
import  {ContextoCarrito}  from "../../Contexto/ContextoCarrito";
import "./Salida.css"
import { db } from "../../Firebase/Configuracion";


const Salida = () =>{

    const{carrito, TotalCarrito, CantidadCarrito, VaciarCarrito} = useContext(ContextoCarrito)
    const [Nombre, setNombre] = useState("")
    const [Apellido, setApellido] = useState("")
    const [Mail, setMail] = useState("")
    const [Numero, setNumero] = useState("")
    const [Direccion, setDireccion] = useState("")
    const [Orden, setOrden] = useState("")
    const [Error, setError] = useState("")

    const Formulario = (e) =>{
        e.preventDefault()

        if(!Nombre || !Apellido || !Mail || !Numero || !Direccion){
            setError("Fijate! El Baúl necesita que llenes todos los campos")
            return;
        }

        if(Nombre == Apellido){
            setError("Has enredado tu nombre y apellido    -El Baúl")
            return;
        }

        const OrdenCompra = {
            items: carrito.map((producto) =>({
                id: producto.producto.id,
                nombre: producto.producto.Nombre,
                cantidad: producto.cantidad
            })),
            Total: TotalCarrito(),
            Fecha: new Date(),
            Nombre,
            Apellido,
            Mail,
            Numero,
            Direccion
        }

        Promise.all(
            OrdenCompra.items.map(async(ProductoOrden) =>{
                const ReferenciaProducto = doc(db, "carrito",ProductoOrden.id)
                const DocumentoProducto = await getDoc(ReferenciaProducto)
                const StockActual = DocumentoProducto.data().Stock

                await updateDoc(ReferenciaProducto,{
                    Stock: StockActual - ProductoOrden.cantidad
                })
            })
        )

        .then(() => {
            addDoc(collection(db, "ordenes"), OrdenCompra)
            .then((docRef) =>{
                setOrden(docRef.id)
                VaciarCarrito()
            })
            .catch((Error) => {
                setError("No se ha podido crear tu orden, reintentalo")
            })
        })
    }


    return(
        <>
            <h2 className="Ingreso">Ingresa tus datos y el Baúl llegará a donde estes</h2>

            <form onSubmit={Formulario} className="Formulario">
                {carrito.map((producto) =>(
                    <div key={producto.producto.id}>
                    <p> Te llevas {producto.producto.Nombre} {producto.cantidad} veces</p>
                    <img className="FotoFinal" src={producto.producto.img} alt={producto.producto.Nombre} />
                    </div>
                ))}

                <div>
                    <label htmlFor="Nombre">Nombre:</label>
                    <input name="Nombre" type="text" onChange={(evento) => setNombre(evento.target.value)} />
                </div>
                <div>
                    <label htmlFor="Apellido">Apellido:</label>
                    <input name="Apellido" type="text" onChange={(evento) => setApellido(evento.target.value)} />
                </div>
                <div>
                    <label htmlFor="Mail">Mail:</label>
                    <input name="Mail" type="email" onChange={(evento) => setMail(evento.target.value)} />
                </div>
                <div>
                    <label htmlFor="Numero">Número:</label>
                    <input name="Numero" type="text" onChange={(evento) => setNumero(evento.target.value)} />
                </div>
                <div>
                    <label htmlFor="Direccion">Dirección:</label>
                    <input name="Direccion" type="text" onChange={(evento) => setDireccion(evento.target.value)} />
                </div>

                <button type="submit" className="BotonFinalizar">Finalizar Compra</button>

                {Error && <p className="Avisos">{Error}</p>}

                {Orden && <p className="Avisos">El Baúl va en camino! Tu número de orden es {Orden}</p>}
            </form>
        </>
    )
}

export default Salida