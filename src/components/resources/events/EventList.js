import React from 'react';
import EventCard from './EventCard.js';

const EventList = ({ events, loading, error }) => {
  return (
    <div className="row row-height-custom g-4">
      {events.map((event) => (
        <div key={event.id} className="col-sm-6 col-lg-4 col-xl-3">
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
};

export default EventList;
