import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Importa SweetAlert2
import '../../styles/style_bienvenida.css';
import Header from "../../componentes/header1";
import Footer from "../../componentes/footer";
import { Link } from 'react-router-dom';

const Bienvenida = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  
  // Función para obtener productos de la API
  const fetchProductos = async () => {
    try {
      const response = await axios.get('http://localhost:4000/Products');
      setProductos(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  // Función para filtrar productos según la categoría seleccionada
  const productosFiltrados = categoriaSeleccionada
    ? productos.filter(producto => producto.categoria === categoriaSeleccionada)
    : productos;

  // Función para manejar el clic en una categoría
  const handleCategoriaClick = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  // Función para agregar producto al carrito
  const agregarAlCarrito = async (producto) => {
    // Mostrar alerta de confirmación
    const confirmAgregar = await Swal.fire({
      title: 'Confirmar',
      text: `¿Deseas agregar ${producto.nombre} al carrito?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, agregar',
      cancelButtonText: 'Cancelar'
    });
  
    // Si el usuario confirma, agrega el producto al carrito
    if (confirmAgregar.isConfirmed) {
      const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
      const productoEnCarrito = carritoGuardado.find(p => p.id === producto.id);
  
      let nuevoCarrito;
      if (productoEnCarrito) {
        nuevoCarrito = carritoGuardado.map(p =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } else {
        nuevoCarrito = [...carritoGuardado, { ...producto, cantidad: 1 }];
      }
  
      localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  
      // Mostrar alerta de éxito
      Swal.fire({
        title: '¡Éxito!',
        text: `${producto.nombre} ha sido agregado al carrito.`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
  
      console.log('Carrito después de agregar:', nuevoCarrito);
    }
  };

  return (
    <div>
      <Header />
      {/* Hero Section */}
      <div className="hero">
        <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/img/carrusel-images/supersale.jpg" className="d-block w-100" alt="Oferta 1" />
              <div className="carousel-caption d-none d-md-block">
                <Link to="#" className="btn btn-danger">Compra Aquí</Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/img/carrusel-images/pngtree-sale-promotion-50-off-image_914144.png" className="d-block w-100" alt="Oferta 2" />
              <div className="carousel-caption d-none d-md-block">
                <Link to="#" className="btn btn-danger">Compra Aquí</Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/img/carrusel-images/slide-1.webp" className="d-block w-80" alt="Oferta 3" />
              <div className="carousel-caption d-none d-md-block">
                <Link to="#" className="btn btn-danger">Compra Aquí</Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Categorías */}
      <section className="categories-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3">
              <Link onClick={() => handleCategoriaClick('Cuidado de la Ropa')} className="category-link">
                <div className="category-icon">
                  <i className="bi bi-person-standing-dress" />
                </div>
                <div className="category-text">
                  Cuidado de la Ropa
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link onClick={() => handleCategoriaClick('Hogar y Limpieza')} className="category-link">
                <div className="category-icon">
                  <i className="bi bi-house-door" />
                </div>
                <div className="category-text">
                  Hogar y Limpieza
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link onClick={() => handleCategoriaClick('Cuidado de Pisos')} className="category-link">
                <div className="category-icon">
                  <i className="bi bi-square" />
                </div>
                <div className="category-text">
                  Cuidado de Pisos
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link onClick={() => handleCategoriaClick('Desinfectantes')} className="category-link">
                <div className="category-icon">
                  <i className="bi bi-shield-check" />
                </div>
                <div className="category-text">
                  Desinfectantes
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Productos destacados */}
      <section className="products-section">
        <div className="container">
          <h2 className="text-center mb-4">Productos Destacados</h2>
          <div className="row">
            {productosFiltrados.slice(0, 4).map((producto) => (
              <div className="col-md-3" key={producto.id}>
                <div className="card product-card">
                  <div className="card-body">
                    <img 
                      src={producto.imagen} 
                      alt={producto.nombre} 
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }} 

                      className="object-cover w-full h-full absolute inset-0" 
                    />
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text"><strong>${producto.precio_unitario}</strong></p>
                    <button onClick={() => agregarAlCarrito(producto)} className="btn btn-outline-primary">
                      <i className="bi bi-cart" /> Agregar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Segunda sección de productos */}
      <section className="products-section">
        <div className="container">
          <div className="row">
            {productosFiltrados.slice(4, 8).map((producto) => (
              <div className="col-md-3" key={producto.id}>
                <div className="card product-card">
                  <div className="card-body">
                    <img 
                      src={producto.imagen} 
                      alt={producto.nombre}
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                      className="object-cover w-full h-full absolute inset-0" 
                    />
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text"><strong>${producto.precio_unitario}</strong></p>
                    <button onClick={() => agregarAlCarrito(producto)} className="btn btn-outline-primary">
                      <i className="bi bi-cart" /> Agregar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Tercera sección de productos */}
      <section className="products-section">
        <div className="container">
          <div className="row">
            {productosFiltrados.slice(8, 12).map((producto) => (
              <div className="col-md-3" key={producto.id}>
                <div className="card product-card">
                  <div className="card-body">
                    <img 
                      src={producto.imagen} 
                      alt={producto.nombre} 
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                      className="object-cover w-full h-full absolute inset-0" 
                    />
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text"><strong>${producto.precio_unitario}</strong></p>
                    <button onClick={() => agregarAlCarrito(producto)} className="btn btn-outline-primary">
                      <i className="bi bi-cart" /> Agregar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Bienvenida;
