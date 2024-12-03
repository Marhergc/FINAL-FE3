import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams(); // Obtén el ID de la URL
  const [dentist, setDentist] = useState(null); // Estado local para el detalle del dentista

  // Efecto para obtener los datos del dentista desde la API
  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentist(data); // Guarda los datos en el estado local
      } catch (error) {
        console.error('Error al obtener el detalle del dentista:', error);
      }
    };

    fetchDentist();
  }, [id]);

  if (!dentist) {
    return <p>Cargando detalle del dentista...</p>; // Renderiza esto mientras se cargan los datos
  }

  return (
    <main>
      <h1>Detalle del Dentista</h1>
      <div className="dentist-detail">
        <h2>{dentist.name}</h2>
        <p>Email: {dentist.email}</p>
        <p>Teléfono: {dentist.phone}</p>
        <p>Website: <a href={`https://${dentist.website}`} target="_blank" rel="noopener noreferrer">{dentist.website}</a></p>
        <p>Compañía: {dentist.company.name}</p>
      </div>
    </main>
  );
};

export default Detail;
