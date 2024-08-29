import React, { useState, useEffect } from 'react';
import Header2 from '../../componentes/header2';
import axios from 'axios';
import Swal from 'sweetalert2';

const VentasAdmin = () => {
  const [ventas, setVentas] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentVenta, setCurrentVenta] = useState(null);

  // Función para obtener VENTAS de la API
  const fetchVentas = async () => {
    try {
      const response = await axios.get('http://localhost:4000/Sales');
      setVentas(response.data);
    } catch (error) {
      console.error('Error fetching ventas:', error);
    }
  };

  useEffect(() => {
    fetchVentas();
  }, []);

  return (
    <div>
      <Header2 />
      <div className="container">
        <section className="container mt-5">
          <h2>Consulta de Ventas</h2>
          <br />
          {/* Botón para abrir el modal */}
          <button type="button" className="btn btn-success mb-3">Generar Reporte</button>
          {/* Tabla de ventas */}
          <table className="table table-striped mt-4">
            <thead>
              <tr>
                <th>ID Venta</th>
                <th>Fecha Venta</th>
                <th>Método de Pago</th>
                <th>Precio Total</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {ventas.map((venta) => (
                <tr key={venta.id}>
                  <td>{venta.id}</td>
                  <td>{venta.fecha_venta}</td>
                  <td>{venta.metodo_pago}</td>
                  <td>{venta.precio_total}</td>
                  <td>{venta.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default VentasAdmin;
