import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ResourceDetail from '../../components/resources/ResourceDetail.js';
import { fetchResource } from '../../actions/resourceActions.js';

const ResourceDetailContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { resource, loading, error } = useSelector((state) => state.resource);

  useEffect(() => {
    dispatch(fetchResource(id));
  }, [dispatch, id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return <ResourceDetail resource={resource} />;
};

export default ResourceDetailContainer;
