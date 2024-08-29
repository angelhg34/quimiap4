import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/style_venta_cliente.css';
import Header from "../../componentes/header1";
import Footer from "../../componentes/footer";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const VentasCliente = () => {
  const [fechaVenta] = useState(new Date().toISOString().split('T')[0]); // Fecha actual
  const [metodoPago, setMetodoPago] = useState('');
  const [precioTotal, setPrecioTotal] = useState('');
  const [estado] = useState('En progreso'); // Estado por defecto

  const [carrito, setCarrito] = useState([]);
  const [cliente, setCliente] = useState(null);
  const [domicilio, setDomicilio] = useState({
    direccion: '',
    ciudad: '',
    codigo_postal: '',
    fecha_entrega: ''
  });
  const [mostrarDomicilio, setMostrarDomicilio] = useState(false);

  const navigate = useNavigate(); // Inicializa useNavigate

  // Asegúrate de obtener el ID del cliente desde la sesión o local storage
  const clienteId = localStorage.getItem('clienteId') || 'ID_DEL_CLIENTE'; 
  const carritoItems = JSON.parse(localStorage.getItem('carrito')) || [];

  useEffect(() => {
    // Obtener datos del cliente logeado
    const fetchCliente = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/Users/${clienteId}`);
        setCliente(response.data);
      } catch (error) {
        console.error('Error al obtener datos del cliente:', error);
      }
    };

    // Obtener datos del carrito
    const fetchCarrito = () => {
      setCarrito(carritoItems);
    };

    fetchCliente();
    fetchCarrito();
  }, [clienteId, carritoItems]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Datos de la venta
    const ventaData = {
      fecha_venta: fechaVenta,
      metodo_pago: metodoPago,
      precio_total: precioTotal,
      estado: estado,
    };

    try {
      // Registrar la venta
      const ventaResponse = await axios.post('http://localhost:4000/Sales', ventaData);
      const ventaId = ventaResponse.data.id;

      // Registrar los detalles de la venta
      carrito.forEach(async (producto) => {
        const detalleData = {
          venta_id: ventaId,
          producto_id: producto.id,
          cantidad: producto.cantidad,
          precio_unitario: producto.precio_unitario,
        };
        await axios.post('http://localhost:4000/SaleDetails', detalleData);
      });

      // Si se selecciona domicilio, registrar los datos del domicilio
      if (mostrarDomicilio) {
        const domicilioData = {
          venta_id: ventaId,
          direccion: domicilio.direccion,
          ciudad: domicilio.ciudad,
          codigo_postal: domicilio.codigo_postal,
          fecha_entrega: domicilio.fecha_entrega,
        };
        await axios.post('http://localhost:4000/domicilio', domicilioData);
      }

      Swal.fire({
        icon: 'success',
        title: 'Venta registrada con éxito',
        text: 'La venta ha sido registrada correctamente.',
      }).then(() => {
        // Redirige a bienvenida.js después de cerrar la alerta
        navigate('/');
        // Resetea los datos
        setMetodoPago('');
        setPrecioTotal('');
        setCarrito([]);
        setDomicilio({
          direccion: '',
          ciudad: '',
          codigo_postal: '',
          fecha_entrega: ''
        });
        setMostrarDomicilio(false);
        localStorage.removeItem('carrito');
        localStorage.removeItem('clienteId');
      });
    } catch (error) {
      console.error('Error al registrar la venta:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al registrar la venta. Inténtelo de nuevo.',
      });
    }
  };

  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + (producto.precio_unitario * producto.cantidad), 0);
  };

  useEffect(() => {
    setPrecioTotal(calcularTotal());
  }, [carrito]);

  // Validación de la fecha de entrega
  const handleFechaEntregaChange = (e) => {
    const fechaSeleccionada = new Date(e.target.value);
    const fechaActual = new Date();

    if (fechaSeleccionada >= fechaActual) {
      setDomicilio({ ...domicilio, fecha_entrega: e.target.value });
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Fecha Inválida',
        text: 'La fecha de entrega no puede ser anterior a la fecha actual.',
      });
      // Restablece la fecha de entrega a un valor vacío si no es válida
      setDomicilio({ ...domicilio, fecha_entrega: '' });
    }
  };

  return (
    <div>
      <Header />

      <div className="container mt-5">
        <h2>Registro de Venta</h2>

        {/* Mostrar Carrito de Compras en formato de tabla */}
        <div className="mb-5">
          <h4>Carrito de Compras</h4>
          {carrito.length > 0 ? (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio Unitario</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {carrito.map((producto) => (
                  <tr key={producto.id}>
                    <td>{producto.nombre}</td>
                    <td>${producto.precio_unitario}</td>
                    <td>{producto.cantidad}</td>
                    <td>${producto.precio_unitario * producto.cantidad}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3"><strong>Total:</strong></td>
                  <td>${precioTotal}</td>
                </tr>
              </tfoot>
            </table>
          ) : (
            <p>El carrito está vacío.</p>
          )}
        </div>

        {/* Formulario para registrar venta */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fechaVenta" className="form-label">Fecha de Venta</label>
            <input
              type="date"
              className="form-control"
              id="fechaVenta"
              value={fechaVenta}
              readOnly
            />
          </div>

          <div className="mb-3">
            <label htmlFor="metodoPago" className="form-label">Método de Pago</label>
            <select
              className="form-control"
              id="metodoPago"
              value={metodoPago}
              onChange={(e) => setMetodoPago(e.target.value)}
              required
            >
              <option value="">Selecciona un método de pago</option>
              <option value="Efectivo">Efectivo</option>
              <option value="Transferencia Bancaria">Transferencia Bancaria</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="precioTotal" className="form-label">Precio Total</label>
            <input
              type="number"
              className="form-control"
              id="precioTotal"
              value={precioTotal}
              readOnly
            />
          </div>

          <div className="mb-3">
            <label htmlFor="estado" className="form-label">Estado</label>
            <input
              type="text"
              className="form-control"
              id="estado"
              value={estado}
              readOnly
            />
          </div>

          <div className="mb-3">
            <label htmlFor="domicilio" className="form-label">
              <input
                type="checkbox"
                id="domicilio"
                checked={mostrarDomicilio}
                onChange={() => setMostrarDomicilio(!mostrarDomicilio)}
              />
              <span> ¿Desea que le enviemos el pedido a domicilio?</span>
            </label>
          </div>

          {mostrarDomicilio && (
            <div>
              <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Dirección</label>
                <input
                  type="text"
                  className="form-control"
                  id="direccion"
                  value={domicilio.direccion}
                  onChange={(e) => setDomicilio({ ...domicilio, direccion: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="ciudad" className="form-label">Ciudad</label>
                <input
                  type="text"
                  className="form-control"
                  id="ciudad"
                  value={domicilio.ciudad}
                  onChange={(e) => setDomicilio({ ...domicilio, ciudad: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="codigoPostal" className="form-label">Código Postal</label>
                <input
                  type="text"
                  className="form-control"
                  id="codigoPostal"
                  value={domicilio.codigo_postal}
                  onChange={(e) => setDomicilio({ ...domicilio, codigo_postal: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="fechaEntrega" className="form-label">Fecha de Entrega</label>
                <input
                  type="date"
                  className="form-control"
                  id="fechaEntrega"
                  value={domicilio.fecha_entrega}
                  onChange={handleFechaEntregaChange}
                  required
                  min={new Date().toISOString().split('T')[0]} // Establece el valor mínimo
                />
              </div>
            </div>
          )}

          <button type="submit" className="btn btn-success">Registrar Venta</button>
        </form>
      </div>
      <br/>
      <br/>
      <Footer />
    </div>
  );
};

export default VentasCliente;
