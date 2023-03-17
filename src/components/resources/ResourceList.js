import React from 'react';
import TutorialCard from './tutorials/TutorialCard.js';
import InformationCard from './informations/InformationCard.js';
import EventCard from './events/EventCard.js';

const ResourceList = ({ resources, loading, error }) => {
  const renderCardByType = (resource) => {
    switch (resource.type) {
      case 'tutorial':
        return <TutorialCard resource={resource} />;
      case 'information':
        return <InformationCard resource={resource} />;
      case 'event':
        return <EventCard resource={resource} />;
      default:
        return null;
    }
  };

  if (loading) {
    return <div>Loading resources...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="row row-height-custom g-4">
      {resources.map((resource) => (
        <div key={resource.id} className="col-sm-6 col-lg-4 col-xl-3">
          {renderCardByType(resource)}
        </div>
      ))}
    </div>
  );
};

export default ResourceList;
