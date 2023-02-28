import React, { useState, useEffect } from 'react';
import CategoryList from '../../components/categories/CategoryList.js';
import axios from 'axios';

const CategoryListContainer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get('http://localhost:8000/api/category', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <CategoryList categories={categories} />
  );
};

export default CategoryListContainer;

