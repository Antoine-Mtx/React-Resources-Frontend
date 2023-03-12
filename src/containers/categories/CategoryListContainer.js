import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryList from '../../components/categories/CategoryList.js';
import { fetchCategories } from '../../actions/categoryActions.js';

const CategoryListContainer = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.categoryList);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <CategoryList categories={categories} loading={loading} error={error} />
  );
};

export default CategoryListContainer;
