import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useGlobalContext } from '../Components/utils/global.context';

const Home = () => {
  const { state, dispatch } = useGlobalContext(); // Obtener estado global y función dispatch
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setDentists(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  // Función para agregar a favoritos
  const addToFavorites = (dentist) => {
    dispatch({ type: 'ADD_FAVORITE', payload: dentist }); // Actualiza el estado global
  };

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className="card-container">
        {dentists.map((dentist) => (
          <div className="card" key={dentist.id}>
            <h2>{dentist.name}</h2>
            <p>{dentist.email}</p>
            <button>
              <Link to={`/detail/${dentist.id}`}>Ver detalle</Link>
            </button>
            <button onClick={() => addToFavorites(dentist)}>Add Fav</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
