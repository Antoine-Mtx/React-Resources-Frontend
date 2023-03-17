import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTutorials } from '../../actions/tutorialActions.js';
import { fetchInformations } from '../../actions/informationActions.js';
import { fetchEvents } from '../../actions/eventActions.js';
import ResourceTabs from '../../components/resources/ResourceTabs.js';

const ResourceTabsContainer = () => {
  const dispatch = useDispatch();
  const tutorials = useSelector((state) => state.resource.tutorial.tutorials);
  const informations = useSelector((state) => state.resource.information.informations);
  const events = useSelector((state) => state.resource.event.events);
  const loading = useSelector((state) => state.resource.loading);
  const error = useSelector((state) => state.resource.error);

  useEffect(() => {
    dispatch(fetchTutorials());
    dispatch(fetchInformations());
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <ResourceTabs
      tutorials={tutorials}
      informations={informations}
      events={events}
      loading={loading}
      error={error}
    />
  );
};

export default ResourceTabsContainer;