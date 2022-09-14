import React,{Fragment,useState, useEffect} from "react";
import Header from './components/Header.jsx';
import Formulario from './components/Formulario.jsx';
import Clima from './components/Clima.jsx';
import './index.css';

function App() {

  const[busqueda,setBusqueda] = useState({
    ciudad: '',
    pais: '', 
})

  const[consultar, setConsultar] = useState(false); 

  //Tercer State

  const [resultado, setResultado] = useState({});

  const {ciudad,pais} = busqueda;

  useEffect(() =>{

    const consultarAPI = async () => {

      if (consultar) {
        const appId = '7375938bd134e5607407c689df8ed2f2';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json();

        setResultado(resultado);
        setConsultar(false);
      }
    } 
    consultarAPI();
  },[consultar])


  return (
    <Fragment>
        <Header 
          titulo='Clima React App'
        />
        <div className="contenedor-form">
            <div className="container">
                <div className="row">
                    <div className="col m6 s12">
                        <Formulario 
                          busqueda={busqueda}              
                          setBusqueda={setBusqueda}  
                          setConsultar={setConsultar}         
                        />
                    </div>
                    <div className="col m6 s12">
                        <Clima 
                          resultado={resultado}
                        />
                    </div>
                </div>
            </div>
        </div>
    </Fragment>  
  );
}

export default App;
