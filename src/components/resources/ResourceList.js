import React from 'react';

const ResourceList = ({ resources, loading, error }) => {
  return (
    <div className="row row-height-custom g-4">
      {resources.map((resource) =>
        <div key={resource.id} className="col-sm-6 col-lg-4 col-xl-3">
          <div className="card shadow h-100 d-flex flex-column">
            <div className="card-img-top flex-grow-5">
            {/* <img src={resource.image} className="card-img-top flex-grow-5" alt={resource.name} /> */}
            </div>
            <div className="card-body flex-grow-5">
              <div className="d-flex flex-row justify-content-between mb-2">
                {/* eslint-disable-next-line */}
                <a href="#" className="badge bg-success bg-opacity-10 text-success">
                  {/* {resource.category?.name} */}
                  Débutant
                </a>
                {/* eslint-disable-next-line */}
                <a href="#" className="text-danger">
                  <i className="bi bi-heart"></i>
                </a>
              </div>
              <h5 className="card-title fw-normal">{resource.name}</h5>
              <p className="card-text">{resource.description}</p>
            </div>
            <div className="card-footer pt-0 pb-3 flex-grow-2">
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourceList;
