//dependencias necesarias
import { useState } from "react";
//data
import Resenias from './data/Resenias'
//componentes
import Resenia from './componentes/Resenia'
import ReseniaList from "./componentes/ReseniaList";

const App = () => {

    //crear estado para los datos de resenias
    const [lista_resenias , setListaResenias] = useState(Resenias)

    return(
        <div className="container">
            <ReseniaList listaresenias={lista_resenias} />
        </div>
    )
}

export default App