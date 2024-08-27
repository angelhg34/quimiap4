import React from 'react';
import Header3 from '../../componentes/header3';
const VentasDomiciliario = () =>{
    return(
        <div>
            <Header3 />
            <div className="container">
  <section className="container mt-5">
    <h2>Consulta de Ventas</h2>
    <br />
    {/* Botón para abrir el modal */}
    <button type="button" className="btn btn-success mb-3">Generar Reporte</button>
    {/* Tabla de productos */}
    <table className="table table-striped mt-4">
      <thead>
        <tr>
          <th>ID Venta</th>
          <th>Precio Unitario</th>
          <th>Cantidad</th>
          <th>Método de Pago</th>
          <th>ID Cliente</th>
          <th>ID Producto</th>
          <th>Fecha de Venta</th>
          <th>Precio Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>10000</td>
          <td>2</td>
          <td>Efectivo</td>
          <td>101</td>
          <td>201</td>
          <td>2024-07-31 12:30:00</td>
          <td>20000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>20000</td>
          <td>1</td>
          <td>Tarjeta</td>
          <td>102</td>
          <td>202</td>
          <td>2024-07-31 13:00:00</td>
          <td>20000</td>
        </tr>
        <tr>
          <td>3</td>
          <td>15000</td>
          <td>3</td>
          <td>Transferencia</td>
          <td>103</td>
          <td>203</td>
          <td>2024-07-31 14:00:00</td>
          <td>45000</td>
        </tr>
      </tbody>
    </table>
  </section>
</div>

        </div>
    )
}

export default VentasDomiciliario;