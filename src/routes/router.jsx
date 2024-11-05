// Router.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Error404 from '../pages/NoPage';
import ProjectDetail from '../pages/ProjectDetail';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Router;