import './App.css'
import Logo from './Componentes/Logo/Logo'
import BarraDeNav from './Componentes/BarraDeNav/BarraDeNav'
import PieDePagina from './Componentes/PieDePagina/PieDePagina'
import ContenedorListaProductos from './Componentes/ContenedorListaProductos/ContenedorListaProductos'
import ContenedorDetalleProductos from './Componentes/ContenedorDetalleProductos/ContenedorDetalleProductos'
import Error from './Componentes/Error/Error'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import ProveedorCarrito from './Contexto/ContextoCarrito'
import Carrito from './Componentes/Carrito/Carrito'
import Salida from './Componentes/Salida/Salida'
import { useEffect, useState } from 'react'

function App() {


  return (
    <>
      <BrowserRouter>

      <ProveedorCarrito>

      <Logo/>
      <BarraDeNav/>

      <Routes>
        <Route path='/' element={<ContenedorListaProductos/>}/>

        <Route path='/categoria/:categorias' element={<ContenedorListaProductos/>}/>

        <Route path='/detalle/:id' element={<ContenedorDetalleProductos/>}/>

        <Route path='/carrito' element={<Carrito/>}/>

        <Route path='/checkout' element={<Salida/>}/>

        <Route path='*' element={<Error/>}/>

      </Routes>

      <PieDePagina/>

      </ProveedorCarrito>

      </BrowserRouter>
    </>
  )
}

export default App

// archivo .env

// VITE_APPI_KEY = AIzaSyAWiedaa_lFZfqUuRNMUESujMfObOi0WAI
// VITE_AUTH_DOMAIN = entregafinal-c1429.firebaseapp.com
// VITE_PROJECT_ID = entregafinal-c1429
// VITE_STORAGE_BUCKET = entregafinal-c1429.appspot.com
// VITE_MESSAGING_SENDER_ID = 535659670073
// VITE_APP_ID = 1:535659670073:web:c57f9aa792199deb223be

