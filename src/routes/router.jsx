// Router.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Error404 from '../pages/NoPage';
import ProjectDetail from '../pages/ProjectDetail';

const Router = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default Router;