import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/appStore.js';
import Layout from './components/layout/Layout.js';
import ResourceListPage from './pages/resources/ResourceListPage.js';
import CategoryListPage from './pages/categories/CategoryListPage.js';
import RegistrationPage from './pages/authentication/RegistrationPage.js';
import LoginPage from './pages/authentication/LoginPage.js';
// import ResourceDetailPage from './pages/ResourceDetailPage';
// import ResourceFormPage from './pages/ResourceFormPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/resources" element={<ResourceListPage />} />
            <Route path="/categories" element={<CategoryListPage />} />
            {/* <Route path="/resources/:id" element={<ResourceDetailPage />} />
            <Route path="/resources/new" element={<ResourceFormPage />} /> */}
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;

