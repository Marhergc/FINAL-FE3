import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDentist(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dentist details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!dentist) return <p>No se encontraton dentistas</p>;

  return (
    <div className="detail">
      <h1>{dentist.name}</h1>
      <p><strong>Email:</strong> {dentist.email}</p>
      <p><strong>Phone:</strong> {dentist.phone}</p>
      <p><strong>Website:</strong> {dentist.website}</p>
      <p><strong>Company:</strong> {dentist.company?.name}</p>
      <p><strong>Address:</strong> {dentist.address?.street}, {dentist.address?.city}</p>
    </div>
  );
};

export default Detail;
