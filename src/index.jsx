import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import Home from './Pages/Home';

const root = createRoot(document.getElementById('root'));

//<Provider store={module store importé}>
root.render(
  <Router >
    <Provider >
      <Routes >
        <Route exact path="/" element={ <Home />} />
      </Routes>
    </Provider>
  </Router>
);


