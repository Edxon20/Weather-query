import React,{useState} from 'react';


const Formulario = ({busqueda,setBusqueda,setConsultar}) => {

    const[error, guardarError] = useState(false)

    const {ciudad,pais} = busqueda;

    //Funcion que coloca los elementos en el state
    const handleChange = e => {
        //actualizar el state
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })

    }

    // Cuando el usuario da submit al form
    const handleSubmit = e => {
        e.preventDefault();

        //validar

        if(ciudad.trim() === '' || pais.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false);
        setConsultar(true);

        //Pasarlo al componente principal
    }

    return ( 
        <form
        onSubmit={handleSubmit}
        >
            {error ?<p className="red darken-4 error">Todos los campos son necesarios</p> : null }
            
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"      
                    value={ciudad}       
                    onChange={handleChange}        
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
            
                <select 
                    name="pais"
                    id="pais"
                    className="browser-default"
                    value={pais} 
                    onChange={handleChange}                       
                >
                    <option value="">--Seleccione un pais--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="VE">Venezuela</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
               
            </div>

            <div className="input-field col s12">
                <input 
                    type="submit" 
                    value='Buscar Clima'
                    className="btn waves-effect waves-light"
                />
            </div>

            
        </form>
     );
}


 
export default Formulario;