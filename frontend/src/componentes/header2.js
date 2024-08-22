import React from "react";
import '../styles/style_header2.css'
const Header2 = () =>{
    return(
        <div>
            <header className="py-3 mb-4 border-bottom">
    <div className="d-flex align-items-center">
    <img src="https://i.ibb.co/dbTBHkz/LOGO-JEFE-DE-PRODUCCI-N.jpg" alt="LOGO-JEFE-DE-PRODUCCI-N" class="logo"/>
    </div>
    <ul className="nav me-auto mb-2 mb-lg-0">
      <li className="nav-item"><a href="usuarios_admin.js" className="nav-link px-2">Usuarios</a></li>
      <li className="nav-item"><a href="productos.js" className="nav-link px-2">Productos</a></li>
      <li className="nav-item"><a href="ventas_admin.js" className="nav-link px-2">Ventas</a></li>
      <li className="nav-item"><a href="domicilios_admin.js" className="nav-link px-2">Domicilios</a></li>
    </ul>
    <div>
      {/* Botón para cerrar sesion */}
      <button type="button" className="btn btn-primary btn-custom" data-bs-toggle="modal" data-bs-target="#loginModal">
        Cerrar sesión
      </button>
    </div></header>
        </div>
    )
}

export default Header2;
