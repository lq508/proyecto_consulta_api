
import React from "react";
import Card from "./Card";
import "../css/Lista_de_usuarios.css";


function Lista_de_usuarios(props){


  return(

          <div className="contenedor_usuarios">
            {

                props.usuarios_api.map((valor)=>

                  <Card
                    first={valor.results[0].name.first}
                    last={valor.results[0].name.last}
                    picture={valor.results[0].picture.large}
                    phone={valor.results[0].phone}
                    country={valor.results[0].location.country}
                  />

                )


            }


          </div>

  )


}

export default Lista_de_usuarios;
