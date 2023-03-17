import React from 'react';
import ResourceTabsContainer from '../../containers/resources/ResourceTabsContainer.js';

const ResourceListPage = () => {
  return (
    <div>
      <div className="row mb-4">
        <div className="col-lg-8 mx-auto text-center">
          <h2 className="fs-1">Ressources citoyennes</h2>
          <p className="mb-0">Choisissez les ressources que vous souhaitez suivre</p>
        </div>
      </div>
      <ResourceTabsContainer />
    </div>
  );
};

export default ResourceListPage;
