import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({ categories }) => {
  return (
    <div className="row row-height-categoryList g-4">
      {categories.map((category) =>
        <div key={category.id} className="col-sm-6 col-md-4 col-xl-3">
          <div className="card card-body bg-success bg-opacity-10 text-center position-relative btn-transition p-4">
            {/* Image */}
            <div className="bg-body mx-auto rounded-circle mb-3">
              <img className="img-icon-xl" src={category.icon} alt="" />
            </div>
            {/* Title */}
            <h5 className="mb-2">
              <Link to={`/category/${category.id}`} className="stretched-link">{category.name}</Link>
            </h5>
            <h6 className="mb-0">nombre de Ressources</h6>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryList;
