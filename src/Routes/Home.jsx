import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setDentists(data))
      .catch((error) => console.error("Error fetching dentists:", error));
  }, []);

  const handleAddFav = (dentist) => {
    dispatch({ type: "ADD_FAV", payload: dentist });
  };

  return (
    <div className="cards-container">
      {dentists.map((dentist) => (
        <div key={dentist.id} className="card">
          <Card dentist={dentist} />
          <button onClick={() => handleAddFav(dentist)}>
            Agregar a favoritos
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
