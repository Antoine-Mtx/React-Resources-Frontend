import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryList from '../../components/categories/CategoryList.js';
import { fetchCategories } from '../../actions/categoryActions.js';

const CategoryListContainer = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const loading = useSelector(state => state.category.loading);
  const error = useSelector(state => state.category.error);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <CategoryList categories={categories} loading={loading} error={error} />
  );
};

export default CategoryListContainer;
