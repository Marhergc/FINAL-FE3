import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ dentist }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail/${dentist.id}`);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img
        src={`${process.env.PUBLIC_URL}/images/doctor.jpg`}
        alt={`Imagen de ${dentist.name}`}
        className="card-image"
      />
      <div className="card-content">
        <h3>{dentist.name}</h3>
        <p>{dentist.email}</p>
      </div>
    </div>
  );
};

export default Card;
