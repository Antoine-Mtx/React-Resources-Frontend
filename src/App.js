import './App.css';

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';
import Layout from './components/layout/Layout.js';
import { restoreAuthenticatedUser } from './actions/authenticationActions.js';
import ResourceListPage from './pages/resources/ResourceListPage.js';
import ResourceDetailPage from './pages/resources/ResourceDetailPage.js';
import CategoryListPage from './pages/categories/CategoryListPage.js';
import RegistrationPage from './pages/authentication/RegistrationPage.js';
import LoginPage from './pages/authentication/LoginPage.js';
// import ResourceDetailPage from './pages/ResourceDetailPage';
// import ResourceFormPage from './pages/ResourceFormPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    // Restore the authenticated user from localStorage when the app loads
    store.dispatch(restoreAuthenticatedUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<ResourceListPage />} />
            <Route path="/resources" element={<ResourceListPage />} />
            <Route path="/resources/:id" element={<ResourceDetailPage />} />
            <Route path="/categories" element={<CategoryListPage />} />
            {/* <Route path="/resources/new" element={<ResourceFormPage />} /> */}
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;

