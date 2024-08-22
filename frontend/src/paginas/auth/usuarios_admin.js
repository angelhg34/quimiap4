import React, { useEffect, useState } from 'react';
import '../../styles/style_usuarios.css';
import axios from 'axios';
import Header2 from '../../componentes/header2';

const UsuariosAdmin = () => {
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        telefono: '',
        correo_electronico: '',
        tipo_doc: '',
        num_doc: '',
        contrasena: '',
        genero: '',
        rol: ''
        });
  
    const [usuarios, setUsuarios] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
  
    useEffect(() => {
      const fetchUsuarios = async () => {
        try {
          const response = await axios.get("http://localhost:4000/Users");
          setUsuarios(response.data);
        } catch (error) {
          alert("Error al cargar los usuarios:", error);
        }
      };
  
      fetchUsuarios();
    }, []);
  
    useEffect(() => {
      const registerButton = document.querySelector('.register-button');
      const handleClick = () => {
        document.getElementById('formContainer').style.display = 'block';
        document.querySelectorAll('.navbar, .user-table, h1, .register-button').forEach(function(element) {
          element.classList.add('blur-background');
        });
      };
  
      registerButton.addEventListener('click', handleClick);
  
      return () => {
        registerButton.removeEventListener('click', handleClick);
      };
    }, []);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }));
    };
  
    const closeForm = () => {
      document.getElementById('formContainer').style.display = 'none';
      document.querySelectorAll('.navbar, .user-table, h1, .register-button').forEach(function(element) {
        element.classList.remove('blur-background');
      });
    };
  
    const enviar = async (event) => {
      event.preventDefault();
      if (isEditing) {
        try {
          await axios.put(`http://localhost:4000/Users/${formData.Ref}`, formData);
          const updatedUsuarios = usuarios.map((usuario, index) =>
            index === currentIndex ? formData : usuario
          );
          setUsuarios(updatedUsuarios);
          alert("Usuario actualizado con éxito");
          closeForm(); // Cerrar el formulario después de la edición
        } catch (error) {
          console.error(error);
          alert("Error al actualizar el usuario:", error.message || error.toString());
        }
      } else {
        try {
          const response = await axios.post("http://localhost:4000/Users", formData);
          setUsuarios(prevUsuarios => [...prevUsuarios, response.data]);
          alert("Usuario agregado con éxito");
          closeForm(); // Cerrar el formulario después de agregar
        } catch (error) {
          console.error(error);
          alert("Error al agregar el usuario:", error.message || error.toString());
        }
      }
      
      setFormData({
        nombres: '',
        apellidos: '',
        telefono: '',
        correo_electronico: '',
        tipo_doc: '',
        num_doc: '',
        contrasena: '',
        genero: '',
        rol: ''
      });
    };
  
    const editarUsuario = (index) => {
      setFormData(usuarios[index]);
      setIsEditing(true);
      setCurrentIndex(index);
      document.getElementById('formContainer').style.display = 'block';
      document.querySelectorAll('.navbar, .user-table, h1, .register-button').forEach(function(element) {
        element.classList.add('blur-background');
      });
    };
    const eliminarUsuario = async (index) => {
      try {
        const usuario = usuarios[index];
        console.log(`Eliminando usuario con Ref: ${usuario.Ref}`);
        await axios.delete(`http://localhost:4000/Users/${usuario.Ref}`);
        
        const updatedUsuarios = usuarios.filter((_, i) => i !== index);
        setUsuarios(updatedUsuarios);
        
        alert("Usuario eliminado con éxito");
      } catch (error) {
        console.error(error.response || error.message);
        alert("Error al eliminar el usuario:", error.message || error.toString());
      }
    };
  
    return (
      <div>
        <Header2 />
        <h1>Gestion De Usuarios Administrativos</h1>
        <button className="register-button">Registrar Usuario</button>
        <table className="user-table">
          <thead>
            <tr>
              <th>Ref #</th>
              <th>Tipo de Documento</th>
              <th>N° Identificacion</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo Electronico</th>
              <th>Genero</th>
              <th>Celular</th>
              <th>Contraseña</th>
              <th>Rol</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{usuario.tipo_doc}</td>
                <td>{usuario.num_doc}</td>
                <td>{usuario.nombres}</td>
                <td>{usuario.apellidos}</td>
                <td>{usuario.correo_electronico}</td>
                <td>{usuario.genero}</td>
                <td>{usuario.telefono}</td>
                <td>{usuario.contrasena}</td>
                <td>{usuario.rol}</td>
                <td>
                  <button className="edit-button" onClick={() => editarUsuario(index)}>🖋️</button>
                  <button className="delete-button" onClick={() => eliminarUsuario(index)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="form-container" id="formContainer">
          <button className="close-btn" onClick={closeForm}>×</button>
          <form className="user-form" id="userForm" onSubmit={enviar}>
            <label htmlFor="tipo_doc">Tipo De Documento</label>
            <select 
              id="tipo_doc"
              name="tipo_doc"
              value={formData.tipo_doc}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Seleccione una opcion</option>
              <option value="Tarjeta de identidad">Tarjeta de identidad</option>
              <option value="Cedula de Ciudadania">Cedula de Ciudadania</option>
              <option value="Cedula de extranjeria">Cedula de extranjeria</option>
            </select>
  
            <label htmlFor="num_doc">N° Identificacion</label>
            <input 
              type="number" 
              value={formData.num_doc} 
              onChange={handleChange}
              id="num_doc" 
              name="num_doc" 
              required 
            />
  
            <label htmlFor="nombres">Nombre</label>
            <input 
              type="text"
              value={formData.nombres}
              onChange={handleChange}
              id="nombres" 
              name="nombres" 
              required 
            />
  
            <label htmlFor="apellidos">Apellido</label>
            <input 
              type="text" 
              id="apellidos" 
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              required 
            />
  
            <label htmlFor="correo_electronico">Correo Electronico</label>
            <input 
              type="email" 
              value={formData.correo_electronico}
              onChange={handleChange}
              id="correo_electronico" 
              name="correo_electronico" 
              required 
            />
  
            <label htmlFor="genero">Genero</label>
            <select 
              id="genero"
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Seleccione una opcion</option>
              <option value="Femenino">Femenino</option>
              <option value="Masculino">Masculino</option>
            </select>
  
            <label htmlFor="celular">Celular</label>
            <input 
              type="number" 
              value={formData.telefono}
              onChange={handleChange}
              id="telefono" 
              name="telefono" 
              required 
            />
  
            <label htmlFor="contrasena">Contraseña</label>
            <input 
              type="password"
              value={formData.contrasena}
              onChange={handleChange}
              id="contrasena" 
              name="contrasena" 
              required 
            />
  
            <label htmlFor="rol">Rol</label>
            <select 
              id="rol"
              name="rol"
              value={formData.rol}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Seleccione una opcion</option>
              <option value="Gerente">Gerente</option>
              <option value="jefe de producción">jefe de producción</option>
              <option value="Domiciliario">Domiciliario</option>
            </select>
            <button type="submit">{isEditing ? 'Actualizar' : 'Agregar'}</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default UsuariosAdmin;
  