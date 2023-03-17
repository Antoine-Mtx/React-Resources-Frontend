import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div className="card shadow h-100 d-flex flex-column">
      <div className="card-img-top flex-grow-5">
      {/* <img src={event.image} className="card-img-top flex-grow-5" alt={event.name} /> */}
      </div>
      <div className="card-body flex-grow-5">
        <div className="d-flex flex-row justify-content-between mb-2">
          {/* eslint-disable-next-line */}
          <a href="#" className="badge bg-success bg-opacity-10 text-success">
            {/* {event.category?.name} */}
            Débutant
          </a>
          {/* eslint-disable-next-line */}
          <a href="#" className="text-danger">
            <i className="bi bi-heart"></i>
          </a>
        </div>
        <Link to={`/events/${event.id}`} className="text-decoration-none">
          <h5 className="card-title fw-normal">{event.name}</h5>
          <p className="card-text">{event.description}</p>
        </Link>
      </div>
      <div className="card-footer pt-0 pb-3 flex-grow-2">
      </div>
    </div>
  );
};

export default EventCard;