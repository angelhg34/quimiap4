import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MisVentas = () => {
  const [ventas, setVentas] = useState([]);
  const navigate = useNavigate();
  const isAuthenticated = sessionStorage.getItem("isAuthenticated") === "true";
  const userId = sessionStorage.getItem("userId"); // Obtener el ID del usuario de la sesión

  useEffect(() => {
    if (!isAuthenticated) {
      alert("Debes iniciar sesión para acceder a esta página.");
      navigate("/"); // Redirige a la página de inicio de sesión si no está autenticado
    } else {
      const fetchVentas = async () => {
        try {
          const response = await axios.get("http://localhost:4000/Sales", {
            params: { userId } // Asegúrate de que la API filtre por userId
          });
          setVentas(response.data);
        } catch (error) {
          console.error("Error fetching sales:", error);
        }
      };

      fetchVentas();
    }
  }, [isAuthenticated, navigate, userId]);

  const handleCancel = async (ventaId) => {
    try {
      await axios.delete(`http://localhost:4000/Sales/${ventaId}`);
      setVentas(ventas.filter(venta => venta.id !== ventaId));
    } catch (error) {
      console.error("Error canceling sale:", error);
    }
  };

  return (
    <div>
      <header>
        {/* Incluye el Header aquí si deseas mostrarlo en esta página */}
      </header>
      <main className="container">
        <h1>Mis Ventas</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ventas.map((venta) => (
              <tr key={venta.id}>
                <td>{venta.id}</td>
                <td>{venta.fecha_venta}</td>
                <td>{venta.precio_total}</td>
                <td>{venta.estado}</td>
                <td>
                  <button onClick={() => handleCancel(venta.id)} className="btn btn-danger">
                    Cancelar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/" className="btn btn-primary">Regresar</Link>
      </main>
      <footer>
        {/* Incluye el Footer aquí si deseas mostrarlo en esta página */}
      </footer>
    </div>
  );
};

export default MisVentas;
