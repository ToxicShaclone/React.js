import React, {Fragment} from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App (){
    return (
        <Fragment>
            <NavBar />
            <div className="tiendaH1">
                <h1>
                    Domando Termis
                </h1>
                <ItemListContainer greeting="hola me llamo Matias!" />
                
            </div>
        </Fragment>
    )
}
export default App;
