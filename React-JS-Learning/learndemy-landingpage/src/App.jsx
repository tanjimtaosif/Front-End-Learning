import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}
