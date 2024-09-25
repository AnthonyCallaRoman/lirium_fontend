import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function AgregarSubCategoria() {
  const [nombre, setNombre] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Hacemos una solicitud POST para agregar un nuevo producto
    await axios.post('http://localhost:4000/subCategoria/createSubCategoria', { nombre })
      .then(() => {
        router.push('/SubCategoria/listSubCategoria'); // Redirige a la página principal después de agregar el producto
      })
      .catch(error => console.error('Error adding product:', error));
  };

  return (
    <div>
      <h1>Agregar Sub Categoria</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <button type="submit">Agregar Sub Categoria</button>
      </form>
    </div>
  );
}