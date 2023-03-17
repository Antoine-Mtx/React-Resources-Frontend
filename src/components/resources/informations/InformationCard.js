import React from 'react';
import { Link } from 'react-router-dom';

const InformationCard = ({ information }) => {
  return (
    <div className="card shadow h-100 d-flex flex-column">
      <div className="card-img-top flex-grow-5">
      {/* <img src={information.image} className="card-img-top flex-grow-5" alt={information.name} /> */}
      </div>
      <div className="card-body flex-grow-5">
        <div className="d-flex flex-row justify-content-between mb-2">
          {/* eslint-disable-next-line */}
          <a href="#" className="badge bg-success bg-opacity-10 text-success">
            {/* {information.category?.name} */}
            Débutant
          </a>
          {/* eslint-disable-next-line */}
          <a href="#" className="text-danger">
            <i className="bi bi-heart"></i>
          </a>
        </div>
        <Link to={`/informations/${information.id}`} className="text-decoration-none">
          <h5 className="card-title fw-normal">{information.name}</h5>
          <p className="card-text">{information.description}</p>
        </Link>
      </div>
      <div className="card-footer pt-0 pb-3 flex-grow-2">
      </div>
    </div>
  );
};

export default InformationCard;