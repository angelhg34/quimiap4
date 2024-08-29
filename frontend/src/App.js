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
import JfProduccion from "./paginas/auth/jf_produccion";
import VentasjfProduccion from "./paginas/auth/ventas_jfproduccion";
import Domiciliario from "./paginas/auth/domiciliario";
import VentasDomiciliario from "./paginas/auth/ventas_domiciliario";
import VentasCliente from "./paginas/auth/venta_cliente";
import MisVentas from "./paginas/auth/MisVentas";
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
          <Route path='/jf_produccion.js' exact element={<JfProduccion />}/>
          <Route path='/ventas_jfproduccion.js' exact element={<VentasjfProduccion />}/>
          <Route path='/domiciliario.js' exact element={<Domiciliario />}/>
          <Route path='/ventas_domiciliario.js' exact element={<VentasDomiciliario />}/>
          <Route path='/venta_cliente.js' exact element={<VentasCliente />}/>
          <Route path='/MisVentas.js' exact element={<MisVentas />}/>


        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
