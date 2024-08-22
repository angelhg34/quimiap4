import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Bienvenida from "./paginas/auth/bienvenida";
import Register from "./paginas/auth/registro_clientes";
import Nosotros from "./paginas/auth/nosotros";
import Contacto from "./paginas/auth/contactanos";
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' exact element={<Bienvenida />}/>     
          <Route path='/registro_clientes.js' exact element={<Register />}/>
          <Route path='/registro_clientes.js' exact element={<Register />}/>
          <Route path='/nosotros.js' exact element={<Nosotros />}/>
          <Route path='/contactanos.js' exact element={<Contacto />}/>  
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
