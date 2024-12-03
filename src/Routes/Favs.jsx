import React from 'react';
import { useGlobalContext } from '../Components/utils/global.context';
import { Link } from 'react-router-dom';

const Favs = () => {
  const { state, dispatch } = useGlobalContext();  // Acceder al contexto global
  const favorites = state.favorites || [];  // Asegurarse de que 'favorites' sea un array, por si no está definido

  // Función para quitar de favoritos
  const removeFromFavorites = (dentist) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: dentist });
  };

  return (
    <main className={state.theme}>
      <h1>Favoritos</h1>
      <div className="card-container">
        {favorites.length > 0 ? (
          favorites.map((dentist) => (
            <div className="card" key={dentist.id}> {/* Usar 'id' como clave única */}
              <h2>{dentist.name}</h2>
              <p>{dentist.email}</p>
              <button>
                <Link to={`/detail/${dentist.id}`}>Ver detalle</Link>
              </button>
              <button onClick={() => removeFromFavorites(dentist)}>Remove Fav</button>
            </div>
          ))
        ) : (
          <p>No tienes dentistas en tus favoritos.</p>
        )}
      </div>
    </main>
  );
};

export default Favs;
