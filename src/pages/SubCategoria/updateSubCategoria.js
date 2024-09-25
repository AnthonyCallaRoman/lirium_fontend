import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function EditarSubCategoria() {
    const [nombre, setNombre] = useState('');
    const router = useRouter();
    const { id } = router.query;
  
    useEffect(() => {
      // Hacemos una solicitud GET para obtener los detalles del producto
      if (id) {
        axios.get(`http://localhost:4000/subCategoria/getSubCategoria/${id}`)
          .then((response) => {
            const subcategoria = response.data;
            setNombre(subcategoria.nombre);
          })
          .catch(error => console.error('Error fetching product:', error));
      }
    }, [id]);
  
    const handleUpdate = async (e) => {
      e.preventDefault();
      // Hacemos una solicitud PUT para actualizar el producto
      await axios.put(`http://localhost:4000/subCategoria/updateSubCategoria/${id}`, { nombre })
        .then(() => {
          router.push('/SubCategoria/listSubCategoria'); // Redirige a la página principal después de actualizar
        })
        .catch(error => console.error('Error updating product:', error));
    };
  
    return (
      <div>
        <h1>Editar Sub Categoria</h1>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
         
          <button type="submit">Actualizar Sub Categoria</button>
        </form>
      </div>
    );
  }