import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Bienvenida from "./paginas/auth/bienvenida";
import Register from "./paginas/auth/registro_clientes";
import Nosotros from "./paginas/auth/nosotros";
import Contacto from "./paginas/auth/contactanos";
import UsuariosAdmin from "./paginas/auth/usuarios_admin";
import Productos from "./paginas/auth/productos";
import VentasAdmin from "./paginas/auth/ventas_admin";
import DomicilioAdmin from "./paginas/auth/domicilios_admin";
import Carrito from "./paginas/auth/carrito";
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
          <Route path='/usuarios_admin.js' exact element={<UsuariosAdmin />}/>
          <Route path='/productos.js' exact element={<Productos />}/>
          <Route path='/ventas_admin.js' exact element={<VentasAdmin />}/>
          <Route path='/domicilios_admin.js' exact element={<DomicilioAdmin />}/>
          <Route path='/carrito.js' exact element={<Carrito />}/>

        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
