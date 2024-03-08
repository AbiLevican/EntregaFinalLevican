import React from "react";
import CarritoCompras from "../CarritoCompras/CarritoCompras";
import "./BarraDeNav.css"
import { Link, NavLink } from "react-router-dom";

const BarraDeNav = () =>{

    return(
        <>
            <ul className="BarraDeNav">
                <li>
                    <NavLink to={'/'}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to={'/categoria/terror'}>Terroríficas historias</NavLink>
                </li>
                <li>
                    <NavLink to={'/categoria/romance'}>Amor y otras palabras</NavLink>
                </li>
                <li>
                    <NavLink to={'/categoria/aventura'}>Aventuras sin precedentes</NavLink>
                </li>
                <li>
                    <NavLink to={'/categoria/misterio'}>Detectives y otros rufianes</NavLink>
                </li>

                <CarritoCompras/>
            </ul>

        </>
    )
}

export default BarraDeNav