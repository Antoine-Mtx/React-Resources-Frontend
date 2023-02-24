import React, { useState, useEffect } from 'react';
import ResourceList from '../../components/resources/ResourceList.js';
import axios from 'axios';

const ResourceListContainer = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/resource')
      .then((response) => {
        setResources(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ResourceList resources={resources} />
  );
};

export default ResourceListContainer;

