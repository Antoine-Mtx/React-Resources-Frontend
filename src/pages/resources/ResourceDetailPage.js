import React from 'react';
import ResourceDetailContainer from '../../containers/resources/ResourceDetailContainer.js';

const ResourceDetailPage = () => {
  return (
    <div>
      <div className="row mb-4">
        <div className="col-lg-8 mx-auto text-center">
          <h2 className="fs-1">Détail de la ressource</h2>
        </div>
      </div>
      <ResourceDetailContainer />
    </div>
  );
};

export default ResourceDetailPage;