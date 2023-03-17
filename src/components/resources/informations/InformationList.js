import React from 'react';
import InformationCard from './InformationCard.js';

const InformationList = ({ informations, loading, error }) => {
  return (
    <div className="row row-height-custom g-4">
      {informations.map((information) => (
        <div key={information.id} className="col-sm-6 col-lg-4 col-xl-3">
          <InformationCard information={information} />
        </div>
      ))}
    </div>
  );
};

export default InformationList;