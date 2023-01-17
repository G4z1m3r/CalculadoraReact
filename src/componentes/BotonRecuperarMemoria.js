import React from "react";
import './../hojasestilo/BotonRecuperarMemoria.css'

const BotonRecuperarMemoria=(props)=>{
  return(
    <div className="boton-rm" onClick={props.manejarRecuperarMemoria}>
    {props.children}
    </div>
  )
};
export default BotonRecuperarMemoria;