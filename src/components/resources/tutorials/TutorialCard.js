import React from 'react';
import { Link } from 'react-router-dom';
import formatDate from '../../../utils/dateHelper.js';

const defaultImage = 'https://img.freepik.com/free-vector/website-faq-section-user-help-desk-customer-support-frequently-asked-questions-problem-solution-quiz-game-confused-man-cartoon-character_335657-1602.jpg?w=996&t=st=1679069565~exp=1679070165~hmac=468858cd08779606550271c01d6f86855a608abe6346e4d6fd8bce81d5a34571';

const TutorialCard = ({ tutorial }) => {
  return (
    <div className="card shadow h-100 d-flex flex-column">
      <img src={tutorial.tutorial.image ? tutorial.tutorial.image : defaultImage} className="card-img-top flex-grow-5" alt={tutorial.name} />
      <div className="card-body flex-grow-5">
        <div className="d-flex flex-row justify-content-between mb-2">
          {/* eslint-disable-next-line */}
          <a href="#" className="badge bg-success bg-opacity-10 text-success">
            {tutorial.category?.name}
          </a>
          {/* eslint-disable-next-line */}
          <a href="#" className="text-danger">
            <i className="bi bi-heart"></i>
          </a>
        </div>
        <Link to={`/tutorials/${tutorial.id}`} className="text-decoration-none">
          <h5 className="card-title fw-normal">{tutorial.name}</h5>
          <p className="card-text">{tutorial.description}</p>
        </Link>
      </div>
      <div className="card-footer flex-grow-2 d-flex justify-content-between align-items-center">
        {/* eslint-disable-next-line */}
        <a href="#">
          {tutorial.user?.username}
        </a>
        {/* eslint-disable-next-line */}
        <p className="text-muted m-0">
          {formatDate(tutorial.created_at)} <i className="bi bi-calendar"></i> 
        </p>
      </div>
    </div>
  );
};

export default TutorialCard;