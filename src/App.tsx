import './App.css';
import React from 'react';
import Layout from './components/layouts/BaseLayout';
import { Route, Routes } from 'react-router-dom';
import CurrentTab from './pages/CurrentTab';
import LoginPage from './pages/Login';
import NotFound404 from './pages/NotFound404';
import PasswordGenerator from './pages/PasswordGenerator';
import RegisterPage from './pages/Register';
import Settings from './pages/Settings';
import Vault from './pages/Vault';
import AuthRoute from "./components/AuthRoute";

const App = () => {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Protected routes */}
          <Route element={<AuthRoute />}>
            <Route index element={<CurrentTab />} />
            <Route path="/vault" element={<Vault />} />
            <Route path="/password-generator" element={<PasswordGenerator />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<RegisterPage/>}/>
          <Route path="*" element={<NotFound404 />} />
          
        </Route>
      </Routes>
      
    </Layout>
  );
}

export default App;
