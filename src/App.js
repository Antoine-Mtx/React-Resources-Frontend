import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResourceListPage from './pages/resources/ResourceListPage.js';
// import ResourceDetailPage from './pages/ResourceDetailPage';
// import ResourceFormPage from './pages/ResourceFormPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/resources" element={<ResourceListPage />} />
          {/* <Route path="/resources/:id" element={<ResourceDetailPage />} />
          <Route path="/resources/new" element={<ResourceFormPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

