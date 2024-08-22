import React from "react";
import { Link } from "react-router-dom";
import '../styles/header_styles.css'
const Header = () =>{
    return(
<div>
<header className="bg-light border-bottom sticky-header">
    <div className="container d-flex justify-content-between align-items-center py-3">
      {/* Logo */}
      <div className="header-logo-container">
      <a href="/"><img src="/img/LOGO_JEFE_DE_PRODUCCIÓN-Photoroom.png" alt="Logaa" className="header-logo me-4" />
      </a>
      </div>
      {/* Botón de categorías (tres rayitas) */}
      <div className="d-flex align-items-center">
        <button className="btn btn-outline-secondary me-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCategorias" aria-controls="offcanvasCategorias">
          <i className="bi bi-list" />
        </button>
        <span>Categorías</span>
      </div>
      {/* Barra de búsqueda centrada */}
      <div className="mx-3 flex-grow-1">
        <form className="d-flex justify-content-center">
          <input className="form-control search-bar" type="search" placeholder="Buscar productos" aria-label="Buscar" />
          <button className="btn btn-outline-success search-button ms-2" type="submit">
            <i className="bi bi-search" />
          </button>
        </form>
      </div>
      {/* Botón de Iniciar Sesión con menú desplegable */}
      <div className="dropdown">
        <Link to="#" className="btn btn-outline-success dropdown-toggle" id="loginDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="bi bi-person" /> Iniciar sesión
        </Link>
        <div className="dropdown-menu dropdown-menu-end dropdown-menu-login" aria-labelledby="loginDropdown">
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" />
            </div>
            <div className="mb-3">
              <Link to="#">¿Olvidaste tu contraseña?</Link>
            </div>
            <button type="submit" className="btn btn-primary w-100">Ingresar</button>
          </form>
          <div className="text-center mt-3">
            <Link to="/registro_clientes.js">Quiero crear mi cuenta</Link>
          </div>
        </div>
      </div>
      {/* Ícono de carrito de compras */}
      <Link to="./carrito.js" className="text-success ms-3">
        <i className="bi bi-cart3 fs-4" />
      </Link>
    </div>
  </header>
  {/* Sidebar interactivo */}
  <div className="offcanvas offcanvas-start offcanvas-categorias" tabIndex={-1} id="offcanvasCategorias" aria-labelledby="offcanvasCategoriasLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasCategoriasLabel">Categorías</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body">
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="#" className="d-flex justify-content-between align-items-center text-decoration-none text-dark" data-bs-toggle="collapse" data-bs-target="#ofertasCollapse" aria-expanded="false" aria-controls="ofertasCollapse">
            Ofertas
            <i className="bi bi-chevron-down" />
          </Link>
          <div className="collapse" id="ofertasCollapse">
            <ul className="list-group">
              <li className="list-group-item"><Link to="#" className="text-decoration-none text-dark">Oferta 1</Link></li>
              <li className="list-group-item"><Link to="#" className="text-decoration-none text-dark">Oferta 2</Link></li>
            </ul>
          </div>
        </li>
        <li className="list-group-item">
          <Link to="#" className="d-flex justify-content-between align-items-center text-decoration-none text-dark" data-bs-toggle="collapse" data-bs-target="#ropaCollapse" aria-expanded="false" aria-controls="ropaCollapse">
            Cuidado de Ropa
            <i className="bi bi-chevron-down" />
          </Link>
          <div className="collapse" id="ropaCollapse">
            <ul className="list-group">
              <li className="list-group-item"><Link to="#" className="text-decoration-none text-dark">Detergentes</Link></li>
              <li className="list-group-item"><Link to="#" className="text-decoration-none text-dark">Suavizantes</Link></li>
              <li className="list-group-item"><Link to="#" className="text-decoration-none text-dark">Blanqueadores</Link></li>
            </ul>
          </div>
        </li>
        <li className="list-group-item">
          <Link to="#" className="d-flex justify-content-between align-items-center text-decoration-none text-dark" data-bs-toggle="collapse" data-bs-target="#hogarCollapse" aria-expanded="false" aria-controls="hogarCollapse">
            Hogar y Limpieza
            <i className="bi bi-chevron-down" />
          </Link>
          <div className="collapse" id="hogarCollapse">
            <ul className="list-group">
              <li className="list-group-item"><Link to="#" className="text-decoration-none text-dark">Limpiadores Multiusos</Link></li>
              <li className="list-group-item"><Link to="#" className="text-decoration-none text-dark">Desinfectantes</Link></li>
              <li className="list-group-item"><Link to="#" className="text-decoration-none text-dark">Ambientadores</Link></li>
            </ul>
          </div>
        </li>
        <li className="list-group-item">
          <Link to="#" className="d-flex justify-content-between align-items-center text-decoration-none text-dark" data-bs-toggle="collapse" data-bs-target="#desinfectantesCollapse" aria-expanded="false" aria-controls="desinfectantesCollapse">
            Desinfectantes
            <i className="bi bi-chevron-down" />
          </Link>
          <div className="collapse" id="desinfectantesCollapse">
            <ul className="list-group">
              <li className="list-group-item"><Link to="#" className="text-decoration-none text-dark">Desinfectante 1</Link></li>
              <li className="list-group-item"><Link to="#" className="text-decoration-none text-dark">Desinfectante 2</Link></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

    )
}

export default Header;