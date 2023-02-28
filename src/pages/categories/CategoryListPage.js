import React from 'react';
import CategoryListContainer from '../../containers/categories/CategoryListContainer.js';

const CategoryListPage = () => {
  return (
    <div>
      <div className="row mb-4">
        <div className="col-lg-8 mx-auto text-center">
          <h2 className="fs-1">Catégories des ressources citoyennes</h2>
          <p className="mb-0">Choisissez les catégories de ressources qui vous intéressent</p>
        </div>
      </div>
      <CategoryListContainer />
    </div>
  );
};

export default CategoryListPage;