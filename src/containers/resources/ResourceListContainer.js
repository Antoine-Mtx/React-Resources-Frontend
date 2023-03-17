import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ResourceList from '../../components/resources/ResourceList.js';
import { fetchResources } from '../../actions/resourceActions.js';

const ResourceListContainer = () => {
  const dispatch = useDispatch();
  const resources = useSelector(state => state.resource.resources);
  const loading = useSelector(state => state.resource.loading);
  const error = useSelector(state => state.resource.error);

  useEffect(() => {
    dispatch(fetchResources());
  }, [dispatch]);

  return (
    <ResourceList resources={resources} loading={loading} error={error} />
  );
};

export default ResourceListContainer;
