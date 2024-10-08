import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/header_styles.css';
import Swal from 'sweetalert2';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("isAuthenticated") === "true"
  );
  const [userName, setUserName] = useState(() => {
    return sessionStorage.getItem("userName") || "";
  });
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/inicio_registro.js'); // Cambia esta ruta a la ruta correcta de tu página de inicio de sesión/registro
  };

  useEffect(() => {
    if (isAuthenticated) {
      const storedUserName = sessionStorage.getItem("userName");
      if (storedUserName) {
        setUserName(storedUserName);
      }
    } else {
      setUserName("");
    }
  }, [isAuthenticated]);


  const handleLogout = () => {
    sessionStorage.clear();
    setIsAuthenticated(false);
    setUserName("");
    localStorage.removeItem('carrito'); // Elimina el carrito del almacenamiento local
    navigate("/");
  };

  const handleMisVentasClick = () => {
    if (!isAuthenticated) {
      Swal.fire({
        title: 'Acceso Denegado',
        text: 'Debes iniciar sesión para acceder a esta sección.',
        icon: 'warning',
        confirmButtonText: 'Ir a la bienvenida',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/"); // Redirige a la página de bienvenida
        }
      });
    } else {
      navigate("/MisVentas.js"); // Redirige a la página de Mis Ventas si está autenticado
    }
  };
  return (
    <div>
      <header className="bg-light border-bottom sticky-header">
        <div className="container d-flex justify-content-between align-items-center py-3">
          {/* Logo */}
          <div className="header-logo-container">
            <a href="/">
              <img
                src="/img/LOGO_JEFE_DE_PRODUCCIÓN-Photoroom.png"
                alt="Logo"
                className="header-logo me-4"
              />
            </a>
          </div>
          {/* Botón de opciones */}
          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-secondary me-3"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasCategorias"
              aria-controls="offcanvasCategorias"
            >
              <i className="bi bi-list" />
            </button>
            <span>Más Opciones</span>
          </div>
          {/* Barra de búsqueda */}
          <div className="mx-3 flex-grow-1">
            <form className="d-flex justify-content-center">
              <input
                className="form-control search-bar"
                type="search"
                placeholder="Buscar productos"
                aria-label="Buscar"
              />
              <button
                className="btn btn-outline-success search-button ms-2"
                type="submit"
              >
                <i className="bi bi-search" />
              </button>
            </form>
          </div>
          {/* Login Dropdown */}
          <div className="dropdown">
            {isAuthenticated ? (
              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person" /> {userName || "Usuario"}
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="userDropdown"
                >
                  <li>
                    <button onClick={handleLogout} className="dropdown-item">
                      Cerrar sesión
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <button
                className="btn btn-outline-success dropdown-toggle"
                id="loginDropdown"
                type="button"
                onClick={handleRedirect} // Usa handleRedirect aquí
              >
                <i className="bi bi-person" /> Iniciar sesión o Registrate
              </button>
              </>
            )}
          </div>
          {/* Carrito de compras */}
          <Link to="/carrito.js" className="text-success ms-3">
            <i className="bi bi-cart3 fs-4" />
          </Link>
        </div>
      </header>
      {/* Sidebar interactivo */}
      <div className="offcanvas offcanvas-start offcanvas-categorias" tabIndex={-1} id="offcanvasCategorias" aria-labelledby="offcanvasCategoriasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasCategoriasLabel">Mis Ventas</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <ul className="list-group">
            <li className="list-group-item">
            <button onClick={handleMisVentasClick} className="text-decoration-none text-dark btn btn-link">
                Ver mis ventas
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
