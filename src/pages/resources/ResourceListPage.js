import React from 'react';
import ResourceListContainer from '../../containers/resources/ResourceListContainer.js';

const ResourceListPage = () => {
  return (
    <div>
      <div className="row mb-4">
        <div className="col-lg-8 mx-auto text-center">
          <h2 className="fs-1">Ressources citoyennes</h2>
          <p className="mb-0">Choisissez les ressources que vous souhaitez suivre</p>
        </div>
      </div>
      <ResourceListContainer />
    </div>
  );
};

export default ResourceListPage;
