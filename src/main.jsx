import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '@/App';
import PackageDetails from '@/pages/PackageDetails';
import '@/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/package/:type/:id" element={<PackageDetails />} />
    </Routes>
  </BrowserRouter>
);