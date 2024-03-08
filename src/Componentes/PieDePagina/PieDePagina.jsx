import React from "react";
import "./PieDePagina.css"

const PieDePagina = ()=>{

    return(
        <div className="PieDePagina">
            <ul className="MenuFin">
                <li>
                    <a >Preguntas bobamente frecuentes (para padres)</a>
                </li>
                <li>
                    <a >¿Dónde encontrarnos? (si puede)</a>
                </li>
                <li>
                    <a >Unirse al circo (solo mayores de 12)</a>
                </li>
                <li>
                    <a >Nuestras Aventuras</a>
                </li>
            </ul>

            <h2 className="Despedida">Vuelva pronto o el Baúl irá por usted</h2>
            <p className="MensajeFin">(no es personal, el baúl es así)</p>
        </div>
    )
}

export default PieDePagina