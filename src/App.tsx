import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CurrentTab from './pages/CurrentTab';
import LoginPage from './pages/Login';
import NotFound404 from './pages/NotFound404';
import PasswordGenerator from './pages/PasswordGenerator';
import RegisterPage from './pages/Register';
import Settings from './pages/Settings';
import Vault from './pages/Vault';
import AuthRoute from "./components/AuthRoute";
import BaseLayout from './components/layouts/BaseLayout';
import ForgotPassword from './pages/ForgotPassword';

const App = () => {

  return (

    <Routes>
      <Route>
        
        {/* Protected routes */}
        <Route element={<AuthRoute />}>
          <Route path="/current-tab" element={<CurrentTab />} />
          <Route path="/" element={<CurrentTab />} />
          
          <Route path="/vault" element={<Vault />} />
          <Route path="/password-generator" element={<PasswordGenerator />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<RegisterPage/>}/>
        <Route path="*" element={<NotFound404 />} />
        
      </Route>
    </Routes>

  );
}

export default App;
