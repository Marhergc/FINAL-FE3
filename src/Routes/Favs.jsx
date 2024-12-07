import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Components/utils/global.context';

const Favs = () => {
  const { state, dispatch } = useGlobalContext();

  const handleRemoveFav = (id) => {
    dispatch({ type: 'REMOVE_FAV', payload: id });
  };

  return (
    <div className="favs">
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {state.favs.length > 0 ? (
          state.favs.map((fav) => (
            <div key={fav.id} className="card">
              <img src="/images/doctor.jpg" alt={fav.name} />
              <h3>{fav.name}</h3>
              <p>{fav.username}</p>
              <Link to={`/detail/${fav.id}`}>
                <button>Ver Detalles</button>
              </Link>
              <button onClick={() => handleRemoveFav(fav.id)}>Remover de Favoritos</button>
            </div>
          ))
        ) : (
          <p>Sin dentistas favoritos seleccionados</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
