import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import './main.css'
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import UserDashboard from './Pages/UserDashboard';

const root = createRoot(document.getElementById('root'));

//<Provider store={module store importé}>
root.render(
  <Router >
      <Routes >
        <Route exact path="/" element={ <Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user/:id" element={<UserDashboard />} />
      </Routes>
  </Router>
);


