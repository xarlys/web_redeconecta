import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Index from '../pages/Index';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const RoutesPage: React.FC = () => (
 
    <Routes>
      <Route path="/" caseSensitive={false} element={<Index />} />
      <Route path="/login" caseSensitive={false} element={<SignIn />} />
      <Route path="/signup" caseSensitive={false} element={<SignUp />} />
    </Routes>
  
);

export default RoutesPage;