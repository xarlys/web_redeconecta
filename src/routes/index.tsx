import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Index from '../pages/Index';
import SignIn from '../pages/SignIn';

const RoutesPage: React.FC = () => (
 
    <Routes>
      <Route path="/" caseSensitive={false} element={<Index />} />
      <Route path="/login" caseSensitive={false} element={<SignIn />} />
    </Routes>
  
);

export default RoutesPage;