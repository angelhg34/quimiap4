import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/header_styles.css';

const Header = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("isAuthenticated") === "true"
  );
  const [userName, setUserName] = useState(() => {
    return sessionStorage.getItem("userName") || "";
  });
  const navigate = useNavigate();

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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:4000/Users", {
        params: {
          correo_electronico: email,
          contrasena: password,
        },
      });

      const user = response.data.find(
        (u) => u.correo_electronico === email && u.contrasena === password
      );

      if (user) {
        sessionStorage.setItem("isAuthenticated", "true");
        sessionStorage.setItem("userRole", user.rol);
        sessionStorage.setItem("userName", user.nombres);
        sessionStorage.setItem("userId", user.id); // Guardar el ID del usuario
        setIsAuthenticated(true);
        setUserName(user.nombres);

        switch (user.rol.toLowerCase()) {
          case "cliente":
            navigate("/");
            break;
          case "jefe de producción":
            navigate("/jf_produccion.js");
            break;
          case "domiciliario":
            navigate("/domiciliario.js");
            break;
          case "gerente":
            navigate("/usuarios_admin.js");
            break;
          default:
            navigate("/");
        }
      } else {
        alert("Correo o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setIsAuthenticated(false);
    setUserName("");
    localStorage.removeItem('carrito'); // Elimina el carrito del almacenamiento local
    navigate("/");
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
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person" /> Iniciar sesión
                </button>
                <div
                  className="dropdown-menu dropdown-menu-end dropdown-menu-login"
                  aria-labelledby="loginDropdown"
                >
                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Ingresa tu correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Ingresa tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <Link to="#">¿Olvidaste tu contraseña?</Link>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Ingresar
                    </button>
                  </form>
                  <div className="text-center mt-3">
                    <Link to="/registro_clientes.js">
                      Quiero crear mi cuenta
                    </Link>
                  </div>
                </div>
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
              <Link to="/MisVentas.js" className="text-decoration-none text-dark">
                Ver mis ventas
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
