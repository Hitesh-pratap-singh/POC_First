// import logo from './logo.svg';
import React from 'react';
import Signup from './components/Signup';
import { AuthProvider } from './contexts/AuthContext';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login'; 
import PrivateRoute from './components/PrivateRoute';
// import './App.css';

function App() {
  return (
          <div className='w-100 h-100' style={{maxWidth: '400px'}}>
            <BrowserRouter>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path='/' component= {Dashboard} />
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
              </Switch>
            </AuthProvider>
            </BrowserRouter>
          </div>
  );
}

export default App;
