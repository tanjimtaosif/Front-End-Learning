import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Courses from '../pages/Courses';
import TermsAndConditions from "../pages/TermsAndConditions";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/terms" element={<TermsAndConditions />} />
    </Routes>
  );
}
