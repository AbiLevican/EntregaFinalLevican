import React, {useEffect, useState} from "react"
import ListaProductos from "../ListaProductos/ListaProductos"
import { useParams} from "react-router-dom"
import "./ContenedorListaProductos.css"
import {collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../Firebase/Configuracion"

const ContenedorListaProductos = () =>{

    const [productos, setProductos] = useState([])

    const{categorias}= useParams()

    useEffect(() =>{
    
        const MisProductos = 
        categorias?
        query(collection(db, "carrito"),where("Categoría", "==", categorias))
        : 
        collection(db, "carrito")

        getDocs(MisProductos)
        .then((respuesta)=>{
            const ProductosNuevos = respuesta.docs.map((doc) =>{
                const Data = doc.data()
                return{id: doc.id,...Data}
            })
            setProductos(ProductosNuevos)
        })
        
        
    }, [categorias]) 

    return(
        <>
            <h2 className="Opciones">Los Libros de Nuestro Baúl:</h2>

        <div className="ContLibros">
            {productos.length == 0 
            ? 
            <h3 className="Cargando">Cargando...</h3>
            :
            <ListaProductos productos={productos}/>
            }
        </div>
        </>
    )
}

export default ContenedorListaProductos