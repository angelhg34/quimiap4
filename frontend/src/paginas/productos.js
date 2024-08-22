import React from 'react';
import Header2 from '../componentes/header2';

const Productos = () =>{
    return(
        <div>
            <Header2 />
            <div className="container">
    
  <section className="container mt-5">
    <h2>Registro de productos</h2>
    <br />
    {/* Botón para abrir el modal */}
    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#registroProductoModal">
      Registrar Producto
    </button>
    {/* Modal */}
    <div className="modal fade" id="registroProductoModal" tabIndex={-1} aria-labelledby="registroProductoModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="registroProductoModalLabel">Registrar Producto</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="id_producto" className="form-label">ID Producto</label>
                <input type="text" className="form-control" id="id_producto" placeholder="Ingrese ID del producto" />
              </div>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" placeholder="Ingrese nombre del producto" />
              </div>
              <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripción</label>
                <input type="text" className="form-control" id="descripcion" placeholder="Ingrese descripción del producto" />
              </div>
              <div className="mb-3">
                <label htmlFor="categoria" className="form-label">Categoría</label>
                <input type="text" className="form-control" id="categoria" placeholder="Ingrese categoría del producto" />
              </div>
              <div className="mb-3">
                <label htmlFor="composicion" className="form-label">Composición</label>
                <input type="text" className="form-control" id="composicion" placeholder="Ingrese composición del producto" />
              </div>
              <div className="mb-3">
                <label htmlFor="contenidoNeto" className="form-label">Contenido Neto</label>
                <input type="text" className="form-control" id="contenidoNeto" placeholder="Ingrese contenido neto del producto" />
              </div>
              <div className="mb-3">
                <label htmlFor="usos" className="form-label">Usos</label>
                <input type="text" className="form-control" id="usos" placeholder="Ingrese usos del producto" />
              </div>
              <div className="mb-3">
                <label htmlFor="advertencias" className="form-label">Advertencias</label>
                <input type="text" className="form-control" id="advertencias" placeholder="Ingrese advertencias del producto" />
              </div>
              <div className="mb-3">
                <label htmlFor="precio_unitario" className="form-label">Precio Unitario</label>
                <input type="text" className="form-control" id="precio_unitario" placeholder="Ingrese precio unitario del producto" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" className="btn btn-success">Guardar</button>
          </div>
        </div>
      </div>
    </div>
    {/* Tabla de productos */}
    <table className="table table-striped mt-4">
      <thead>
        <tr>
          <th>ID Producto</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Categoría</th>
          <th>Composición</th>
          <th>Contenido Neto</th>
          <th>Usos</th>
          <th>Advertencias</th>
          <th>Precio Unitario</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Detergente</td>
          <td>Detergente en polvo para ropa</td>
          <td>Limpieza</td>
          <td>Sulfonato de alquilbenceno</td>
          <td>1 kg</td>
          <td>Ropa</td>
          <td>Mantener fuera del alcance de los niños</td>
          <td>$10000 COP</td>
          <td>
            <button type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editarProductoModal">Editar</button>
          </td>
          <td>
            <button type="button" className="btn btn-danger btn-sm">Eliminar</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jabón Líquido</td>
          <td>Jabón líquido antibacterial</td>
          <td>Higiene</td>
          <td>Triclosán</td>
          <td>500 ml</td>
          <td>Manos</td>
          <td>Evitar contacto con los ojos</td>
          <td>$5000 COP</td>
          <td>
            <button type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editarProductoModal">Editar</button>
          </td>
          <td>
            <button type="button" className="btn btn-danger btn-sm">Eliminar</button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Desinfectante</td>
          <td>Desinfectante multiusos</td>
          <td>Limpieza</td>
          <td>Cloruro de benzalconio</td>
          <td>1 L</td>
          <td>Superficies</td>
          <td>Usar en áreas ventiladas</td>
          <td>$8000 COP</td>
          <td>
            <button type="button" className="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editarProductoModal">Editar</button>
          </td>
          <td>
            <button type="button" className="btn btn-danger btn-sm">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  {/* Modal para editar producto*/}
  <div className="modal fade" id="editarProductoModal" tabIndex={-1} aria-labelledby="editarProductoModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="editarProductoModalLabel">Editar Producto</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="edit_id_producto" className="form-label">ID Producto</label>
              <input type="text" className="form-control" id="edit_id_producto" placeholder="Ingrese ID del producto" />
            </div>
            <div className="mb-3">
              <label htmlFor="edit_nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="edit_nombre" placeholder="Ingrese nombre del producto" />
            </div>
            <div className="mb-3">
              <label htmlFor="edit_descripcion" className="form-label">Descripción</label>
              <input type="text" className="form-control" id="edit_descripcion" placeholder="Ingrese descripción del producto" />
            </div>
            <div className="mb-3">
              <label htmlFor="edit_categoria" className="form-label">Categoría</label>
              <input type="text" className="form-control" id="edit_categoria" placeholder="Ingrese categoría del producto" />
            </div>
            <div className="mb-3">
              <label htmlFor="edit_composicion" className="form-label">Composición</label>
              <input type="text" className="form-control" id="edit_composicion" placeholder="Ingrese composición del producto" />
            </div>
            <div className="mb-3">
              <label htmlFor="edit_contenidoNeto" className="form-label">Contenido Neto</label>
              <input type="text" className="form-control" id="edit_contenidoNeto" placeholder="Ingrese contenido neto del producto" />
            </div>
            <div className="mb-3">
              <label htmlFor="edit_usos" className="form-label">Usos</label>
              <input type="text" className="form-control" id="edit_usos" placeholder="Ingrese usos del producto" />
            </div>
            <div className="mb-3">
              <label htmlFor="edit_advertencias" className="form-label">Advertencias</label>
              <input type="text" className="form-control" id="edit_advertencias" placeholder="Ingrese advertencias del producto" />
            </div>
            <div className="mb-3">
              <label htmlFor="edit_precio_unitario" className="form-label">Precio Unitario</label>
              <input type="text" className="form-control" id="edit_precio_unitario" placeholder="Ingrese precio unitario del producto" />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" className="btn btn-success">Guardar Cambios</button>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Productos;