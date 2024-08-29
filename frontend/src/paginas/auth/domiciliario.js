import React, { useState, useEffect } from 'react';
import Header4 from '../../componentes/header4';
import axios from 'axios';
import Swal from 'sweetalert2'; // Importa SweetAlert2

const Domiciliario = () => {
  const [domicilios, setDomicilios] = useState([]);

  // Función para obtener domicilios de la API
  const fetchDomicilios = async () => {
    try {
      const response = await axios.get('http://localhost:4000/domicilio');
      setDomicilios(response.data);
    } catch (error) {
      console.error('Error fetching domicilios:', error);
    }
  };

  useEffect(() => {
    fetchDomicilios();
  }, []);

  // Función para actualizar el estado del domicilio
  const confirmarDomicilio = async (domicilioId) => {
    try {
      await axios.patch(`http://localhost:4000/domicilio/${domicilioId}`, {
        estado: 'Entregado'
      });

      // Actualizar el estado local después de la actualización
      setDomicilios(domicilios.map(domicilio =>
        domicilio.id === domicilioId ? { ...domicilio, estado: 'Entregado' } : domicilio
      ));

      // Mostrar alerta con SweetAlert2
      Swal.fire({
        title: 'Confirmación',
        text: 'Domicilio confirmado como entregado',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    } catch (error) {
      console.error('Error updating domicilio:', error);

      // Mostrar alerta de error con SweetAlert2
      Swal.fire({
        title: 'Error',
        text: 'No se pudo actualizar el estado del domicilio',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <div>
      <Header4 />
      <section className="container mt-5">
        <h2>Consulta de domicilios pendientes</h2>
        <br />
        {/* Tabla de domicilios */}
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th>ID domicilio</th>
              <th>Dirección</th>
              <th>Fecha de entrega</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {domicilios.length === 0 ? (
              <tr>
                <td colSpan="4">No hay domicilios pendientes.</td>
              </tr>
            ) : (
              domicilios.map((domicilio) => (
                <tr key={domicilio.id}>
                  <td>{domicilio.id}</td>
                  <td>{domicilio.direccion}</td>
                  <td>{domicilio.fecha_entrega}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning btn-sm"
                      onClick={() => confirmarDomicilio(domicilio.id)}
                    >
                      Confirmar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Domiciliario;
