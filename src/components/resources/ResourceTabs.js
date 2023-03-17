import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import TutorialList from './tutorials/TutorialList.js';
import InformationList from './informations/InformationList.js';
import EventList from './events/EventList.js';

const ResourceTabs = ({ tutorials, informations, events, loading, error }) => {
  const [activeKey, setActiveKey] = useState('tutorials');

  return (
    <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
      <Nav variant="pills" className="mb-3">
        <Nav.Item>
          <Nav.Link eventKey="tutorials">Tutorials</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="informations">Informations</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="events">Events</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="tutorials">
          <TutorialList tutorials={tutorials} loading={loading} error={error} />
        </Tab.Pane>
        <Tab.Pane eventKey="informations">
          <InformationList informations={informations} loading={loading} error={error} />
        </Tab.Pane>
        <Tab.Pane eventKey="events">
          <EventList events={events} loading={loading} error={error} />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default ResourceTabs;