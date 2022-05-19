import react from 'react';
import "../css/Boton.css";

function Boton(props){

  let Evitar_cargado = e=>{

    e.preventDefault();

    console.log("gola");
    props.Consulta();

  }

  return(

    <form onSubmit={Evitar_cargado}>

    <button className="Boton_consulta">

    Otro

    </button>

    </form>


  );


}


export default Boton;
