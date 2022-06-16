import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import './main.css'
import store from './Redux/Store';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import UserDashboard from './Pages/UserDashboard';
import AccountDetail from './Pages/AccountDetails';
import ErrorPage from './Pages/Error';

const root = createRoot(document.getElementById('root'));

//<Provider store={module store importé}>
root.render(
  <Router >
      <Provider store={store}>
        <Routes >
          <Route exact path="/" element={ <Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user/:id" element={<UserDashboard />} />
          <Route path="/user/:id/details" element={<AccountDetail />} />
          <Route path="*" element ={<ErrorPage type="404"/>} />
        </Routes>
      </Provider>
  </Router>
);


