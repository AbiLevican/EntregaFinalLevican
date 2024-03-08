import React,{ createContext, useState} from "react";
export const ContextoCarrito = createContext()

const ProveedorCarrito = ({children}) => {

    const[carrito, setCarrito] = useState([])

    const AgregarItem = (producto, cantidad) =>{
        const ItemExistente = carrito.findIndex(prod => prod.producto.id == producto.id)

        if(ItemExistente == -1){
            setCarrito([...carrito,{producto,cantidad}])
        }else{
            const CarritoNuevo = [...carrito]
            CarritoNuevo[ItemExistente].cantidad += cantidad
            setCarrito(CarritoNuevo)
        }
    }

    const CantidadCarrito = () =>{
        const CantidadTotal = carrito.reduce((total,item) => total+item.cantidad, 0)
        return CantidadTotal
        
    }

    const VaciarCarrito = () =>{
        setCarrito([])
    }

    const EliminarItem = (Id) =>{
        const NuevoCarrito = carrito.filter(item => item.producto.id !== Id)
        setCarrito(NuevoCarrito)
    }

    const TotalCarrito = () =>{
        const PrecioTotal = carrito.reduce((total,item) => total + (item.producto.Precio * item.cantidad),0)
        return PrecioTotal
        
    }

    return(
        <ContextoCarrito.Provider value={{
            carrito,
            AgregarItem,
            CantidadCarrito,
            VaciarCarrito,
            EliminarItem,
            TotalCarrito
        }}>
            {children}
        </ContextoCarrito.Provider>
    )
    
}

export default ProveedorCarrito