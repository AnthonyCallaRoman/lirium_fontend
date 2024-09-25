import { useState, useEffect } from "react";
import axios from 'axios';

export default function Home() {
  const [mensaje, setMensaje] = useState('');
  const [subcategoria, setSubCategoria] = useState([]);

  const copiarId = async (id) => {
    try {
      await navigator.clipboard.writeText(id);
      alert(`ID copiado: ${id}`)
      // Limpia el mensaje después de 2 segundos
      setTimeout(() => {
        setMensaje('');
      }, 2000);
    } catch (error) {
      console.error('Error al copiar el ID: ', error)
    }
  };

  useEffect(() => {
    axios.get('http://localhost:4000/subCategoria/getAllSubCategoria')
      .then(response => {
        setSubCategoria(response.data);
      })
      .catch(error => console.error('Error fetching sub Categoria:', error));
  }, []);

  return (
    <div>
      <h1>Lista de sub Categoria</h1>
      <ul>
        {subcategoria.map((subcategoria) => (
          <li key={subcategoria._id}>{subcategoria._id}-{subcategoria.nombre}
            <button onClick={() => copiarId(subcategoria._id)}>CopiarID</button>
          </li>
        ))}
      </ul>
      {mensaje && <div className="mensaje-copiado">{mensaje}</div>} {/* Muestra el mensaje */}
            <style jsx>{`
                .mensaje-copiado {
                    margin-top: 10px;
                    padding: 10px;
                    background-color: #d4edda;
                    color: #155724;
                    border: 1px solid #c3e6cb;
                    border-radius: 5px;
                    transition: opacity 0.5s ease-in-out; // Transición suave
                }
            `}</style>
    </div>
  );

}