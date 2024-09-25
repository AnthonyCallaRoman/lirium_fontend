import { useState, useEffect } from "react";
import axios from 'axios';

export default function Home() {
  const [subcategoria, setSubCategoria] = useState([]);

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
          <li key={subcategoria._id}>{subcategoria.nombre}</li>
        ))}
      </ul>
    </div>
  );

}