import {useState} from "react";
import './App.css';
import Boton from './componentes/Boton';
import Card from "./componentes/Card"
import Lista_de_usuarios from "./componentes/Lista_de_usuarios";




function App() {
// Hocks para usar en la interfaz
  const [usuarios , setUsuario] = useState([]);



// funcion para agregar usuario

  let Agregar_usuario = (nuevo_usuario)=>{

    let lista_actualizada = [nuevo_usuario , ...usuarios];

    setUsuario(lista_actualizada);





  }


/* funcion que consulta la api*/
  let Consulta = async ()=>{
    let valores = await fetch("https://randomuser.me/api");
    let valores_json = await valores.json();
    console.log(usuarios);

    Agregar_usuario(valores_json);


  }

  return (
    <div className="App">

      <h1 className="titulo"> Preciona y observa cuentas personas puedes conocer !! </h1>


      <Boton
      Consulta = {Consulta}
      />

      <Lista_de_usuarios
      usuarios_api ={usuarios}

      />


    </div>
  );
}

export default App;
