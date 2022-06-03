import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router >
    <Routes >
      <Route exact path="/" element={ <Home />} />
    </Routes>
  </Router>
);


