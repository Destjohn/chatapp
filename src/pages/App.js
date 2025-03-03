import React from 'react';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Room from './pages/Room';
import LoggerInRoute from '../LoggedInRoute';

import { AuthProvider } from './AuthService';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<LoggedInRoute />}>
            <Route path='/' element={<Room />} /> 
          </Route>
          <Route exact path='login' element={<Login />} />
          <Route exact path='signup' element={<SignUp />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;