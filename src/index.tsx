import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import Modal from 'react-modal';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import zxcvbn from 'zxcvbn'; // password strength calculator

ReactDOM.createRoot(document.getElementById("root")!).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
       <ToastContainer />
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

Modal.setAppElement('#root');
