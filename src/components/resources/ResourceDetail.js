import React from 'react';

const ResourceDetail = ({ resource, loading, error }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <ul className="nav nav-pills nav-pills-bg-soft px-3" id="resource-pills-tab" role="tablist">
        <li className="nav-item me-2 me-sm-4" role="presentation">
          <button className="nav-link mb-0 active" id="resource-pills-tab-1" data-bs-toggle="pill" data-bs-target="#resource-pills-1" type="button" role="tab" aria-controls="resource-pills-1" aria-selected="true">Description</button>
        </li>
        <li className="nav-item me-2 me-sm-4" role="presentation">
          <button className="nav-link mb-0" id="resource-pills-tab-2" data-bs-toggle="pill" data-bs-target="#resource-pills-2" type="button" role="tab" aria-controls="resource-pills-2" aria-selected="false" tabIndex="-1">Commentaires</button>
        </li>
      </ul>
      <div className="tab-content" id="resource-pills-tabContent">
        <div className="tab-pane fade show active" id="resource-pills-1" role="tabpanel" aria-labelledby="resource-pills-tab-1">
          <h3>Description</h3>
          <p>{resource.description}</p>
        </div>
        <div className="tab-pane fade" id="resource-pills-2" role="tabpanel" aria-labelledby="resource-pills-tab-2">
          <h3>Commentaires</h3>
          <p>No comments yet.</p>
        </div>
      </div>
    </>
  );
};

export default ResourceDetail;
