import React, { useState } from "react";
import Header from "../../componentes/header1";
import '../../styles/register_style.css'
import Footer from "../../componentes/footer";
import axios from 'axios';
import Swal from 'sweetalert2';

const Register = () =>{
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    telefono: '',
    correo_electronico: '',
    tipo_doc: '',
    num_doc: '',
    contrasena: '',
    genero: '',
    rol: 'Cliente'
  });

const [showPassword, setShowPassword] = useState(false);

const togglePassword = () => {
  setShowPassword(prevShowPassword => !prevShowPassword);
};

const enviar = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post("http://localhost:4000/Users", formData);

    // Mostrar alerta con SweetAlert2
    await Swal.fire({
      title: 'Registro Exitoso',
      text: '¡Tu registro se realizó con éxito!',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });

    // Redirigir a la página de bienvenida
    window.location.href = '/'; // Asegúrate de que la ruta sea correcta para tu aplicación

  } catch (error) {
    console.error("Error al enviar los datos:", error);

    // Mostrar alerta de error
    Swal.fire({
      title: 'Error',
      text: 'Hubo un problema al registrar tu cuenta. Inténtalo de nuevo.',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
};

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData(prevFormData => ({
    ...prevFormData,
    [name]: value
  }));
}
const handleKeyPress = (event) => {
  // Permite solo letras y espacios
  if (!/^[a-zA-Z\s]*$/.test(event.key)) {
    event.preventDefault();
  }
}

    return(
<div>
    <Header />
    <section className="register-section container mt-5">
        <h2 className="text-center mb-4">Crear mi cuenta</h2>
        <form onSubmit={enviar}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="tipoDocumento" className="form-label">Tipo de documento</label>
              <select
                id="tipoDocumento"
                className="form-select"
                name="tipo_doc"
                value={formData.tipo_doc}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="Cedula de Ciudadania">Cédula de Ciudadanía</option>
                <option value="Tarjeta de identidad">Tarjeta de Identidad</option>
                <option value="Cédula de extranjería">Cédula de Extranjería</option>
                <option value="Pasaporte">Pasaporte</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="numeroIdentificacion" className="form-label">Nº de identificación</label>
              <input
                type="number"
                className="form-control"
                id="numeroIdentificacion"
                name="num_doc"
                placeholder="Ingresa tu identificación"
                value={formData.num_doc}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombres"
                placeholder="Ingresa tu nombre"
                value={formData.nombres}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="apellido" className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="apellido"
                name="apellidos"
                placeholder="Ingresa tu apellido"
                value={formData.apellidos}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="correoElectronico" className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                id="correoElectronico"
                name="correo_electronico"
                placeholder="Ingresa tu correo electrónico"
                value={formData.correo_electronico}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="genero" className="form-label">Género</label>
              <select
                id="genero"
                className="form-select"
                name="genero"
                value={formData.genero}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona tu género</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="celular" className="form-label">Celular</label>
              <div className="input-group">
                <span className="input-group-text">+57</span>
                <input
                  type="number"
                  className="form-control"
                  id="celular"
                  name="telefono"
                  placeholder="Ingresa tu celular"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 password">
              <label htmlFor="contrasena" className="form-label">Contraseña</label>
              <div className="input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="contrasena"
                  name="contrasena"
                  placeholder="Ingresa tu contraseña"
                  value={formData.contrasena}
                  onChange={handleChange}
                  required
                />
                <button type="button" className="btn-toggle-visibility" onClick={togglePassword}>
                <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"} />
                </button>
              </div>
            </div>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="terminos"
              name="terminos"
              required
            />
            <label className="form-check-label" htmlFor="terminos">
              Autorizo el Tratamiento de datos. Acepto los Términos y Condiciones
            </label>
          </div>
          <button type="submit" className="btn btn-register w-100">Guardar</button>
        </form>
      </section>
      <Footer />
</div>

    )
}

export default Register;