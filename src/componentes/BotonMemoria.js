import React from "react";
import './../hojasestilo/BotonMemoria.css'

const BotonMemoria=(props)=>{
  return(
    <div className="boton-memoria" onClick={props.manejarMemoria}>
    {props.children}
    </div>
  )
};
export default BotonMemoria;