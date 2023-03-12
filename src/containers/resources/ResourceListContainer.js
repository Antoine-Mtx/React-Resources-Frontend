import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ResourceList from '../../components/resources/ResourceList.js';
import { fetchResources } from '../../actions/resourceActions.js';

const ResourceListContainer = () => {
  const dispatch = useDispatch();
  const { resources, loading, error } = useSelector(state => state.resource.resources);

  useEffect(() => {
    dispatch(fetchResources());
  }, [dispatch]);

  return (
    <ResourceList resources={resources} loading={loading} error={error} />
  );
};

export default ResourceListContainer;
