import React from "react";
import { Link } from "react-router-dom";
import '../../styles/style_bienvenida.css';
import Header from "../../componentes/header1";
import Footer from "../../componentes/footer";

const Bienvenida = () =>{
  return(
<div>
    <Header />
  {/* Hero Section */}
  <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/img/carrusel-images/supersale.jpg" className="d-block w-100" alt="Oferta 1" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Hasta 30% de Descuento en Productos de Cuidado de ropa</h5>
          <p>Exclusivo para compras en app, web y domicilios.</p>
          <Link to="#" className="btn btn-danger">Compra Aquí</Link>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/img/carrusel-images/pngtree-sale-promotion-50-off-image_914144.png" className="d-block w-100" alt="Oferta 2" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Hasta 50% de Descuento en Hogar y Limpieza</h5>
          <p>Oferta válida hasta fin de mes.</p>
          <Link to="#" className="btn btn-danger">Compra Aquí</Link>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  {/* Categorías */}
  <section className="categories-section">
    <div className="container">
      <div className="row text-center">
        <div className="col-md-3">
          <Link to="#" className="category-link">
            <div className="category-icon">
              <i className="bi bi-person-standing-dress" />
            </div>
            <div className="category-text">
              Cuidado de la Ropa
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="#" className="category-link">
            <div className="category-icon">
              <i className="bi bi-house-door" />
            </div>
            <div className="category-text">
              Hogar y Limpieza
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="#" className="category-link">
            <div className="category-icon">
              <i className="bi bi-square" />
            </div>
            <div className="category-text">
              Cuidado de Pisos
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="#" className="category-link">
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
        <div className="col-md-3">
          <div className="card product-card">
            <img src="/img/products-images/producto1.png" className="card-img-top" alt="Suavizante Textil" />
            <div className="card-body">
              <h5 className="card-title">Suavizante Textil 1L</h5>
              <p className="card-text"><strong>$20.000</strong></p>
              <Link to="#" className="btn btn-outline-primary">
                <i className="bi bi-cart" /> Agregar
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card product-card">
            <img src="/img/products-images/producto2.jpg" className="card-img-top" alt="Cera Polimérica" />
            <div className="card-body">
              <h5 className="card-title">Cera Polimérica 750ML</h5>
              <p className="card-text"><strong>$17.000</strong></p>
              <Link to="#" className="btn btn-outline-primary">
                <i className="bi bi-cart" /> Agregar
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card product-card">
            <img src="/img/products-images/producto3.jpg" className="card-img-top" alt="Detergente Líquido" />
            <div className="card-body">
              <h5 className="card-title">Detergente Líquido 1L</h5>
              <p className="card-text"><strong>$20.000</strong></p>
              <Link to="#" className="btn btn-outline-primary">
                <i className="bi bi-cart" /> Agregar
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card product-card">
            <img src="/img/products-images/ambientador1.jpg" className="card-img-top" alt="Producto 4" />
            <div className="card-body">
              <h5 className="card-title">Multiusos Ambientador </h5>
              <p className="card-text"><strong>$8.99</strong></p>
              <Link to="#" className="btn btn-outline-primary">
                <i className="bi bi-cart" /> Agregar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Segunda sección de productos */}
  <section className="products-section">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="card product-card">
            <img src="/img/products-images/tripleaccion.jpg" className="card-img-top" alt="Producto 1" />
            <div className="card-body">
              <h5 className="card-title">Triple Acción</h5>
              <p className="card-text"><strong>$14.999</strong></p>
              <Link to="#" className="btn btn-outline-primary">
                <i className="bi bi-cart" /> Agregar
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card product-card">
            <img src="/img/products-images/producto6.jpg" className="card-img-top" alt="Producto 2" />
            <div className="card-body">
              <h5 className="card-title">Desengrasante Industrial 1L</h5>
              <p className="card-text"><strong>$11.500</strong></p>
              <Link to="#" className="btn btn-outline-primary">
                <i className="bi bi-cart" /> Agregar
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card product-card">
            <img src="/img/products-images/lavaloza.jpg" className="card-img-top" alt="Producto 3" />
            <div className="card-body">
              <h5 className="card-title">Lavaloza 1L</h5>
              <p className="card-text"><strong>$13.500</strong></p>
              <Link to="#" className="btn btn-outline-primary">
                <i className="bi bi-cart" /> Agregar
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card product-card">
            <img src="/img/products-images/limpiapisos.jpg" className="card-img-top" alt="Producto 4" />
            <div className="card-body">
              <h5 className="card-title">Limpiador de pisos y juntas</h5>
              <p className="card-text"><strong>$10.000</strong></p>
              <Link to="#" className="btn btn-outline-primary">
                <i className="bi bi-cart" /> Agregar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
    <Footer />
</div>

  )
}

export default Bienvenida;