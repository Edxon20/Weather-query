import React,{Fragment,useState, useEffect} from "react";
import Header from './components/Header.jsx';
import Formulario from './components/Formulario.jsx';

function App() {

  const[busqueda,setBusqueda] = useState({
    ciudad: '',
    pais: '', 
})

  const[consultar, setConsultar] = useState(false); 

  const {ciudad,pais} = busqueda;

  useEffect(() =>{

    const consultarAPI = async () => {



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

                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  
  );
}

export default App;
