import React from 'react';
import { Container } from 'react-bootstrap';

const Main = ({ children }) => {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
};

export default Main;
