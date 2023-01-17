import React from "react";
import './../hojasestilo/Imagen.css'

function Imagen(props){
  return(
    <div className="imagen">
      <img src={props.src} alt={props.alt}/>
    </div>
  )
};
export default Imagen;