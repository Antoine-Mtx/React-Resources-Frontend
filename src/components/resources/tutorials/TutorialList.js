import React from 'react';
import TutorialCard from './TutorialCard.js';

const TutorialList = ({ tutorials, loading, error }) => {
  return (
    <div className="row g-4 mb-4">
      {tutorials.map((tutorial) => (
        <div key={tutorial.id} className="col-sm-6 col-lg-4 col-xl-3">
          <TutorialCard tutorial={tutorial} />
        </div>
      ))}
    </div>
  );
};

export default TutorialList;
