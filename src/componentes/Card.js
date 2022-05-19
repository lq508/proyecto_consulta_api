import react from "react";
import "../css/Card.css";

function Card(props){
  return(

    <div className="card_user">

    <div className="contenedor_img">
        <img src={props.picture}/>
    </div>

    <div className="contenedor-informacion">
    <h3> Nombre: {props.first} </h3>
    <h3> Apellido: {props.last} </h3>
    <h3> Telefono: {props.phone} </h3>
    <h3> País:  {props.country} </h3>
    </div>






    </div>

  );


}


export default Card;
