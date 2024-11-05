import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage';
import ProjectDetail from '../pages/ProjectDetail';
import NotFound from '../pages/NoPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;