import React from 'react';
import TutorialCard from './TutorialCard.js';

const TutorialList = ({ tutorials, loading, error }) => {
  return (
    <div className="row row-height-custom g-4">
      {tutorials.map((tutorial) => (
        <div key={tutorial.id} className="col-sm-6 col-lg-4 col-xl-3 h-100">
          <TutorialCard tutorial={tutorial} />
        </div>
      ))}
    </div>
  );
};

export default TutorialList;
