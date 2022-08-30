import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import './components/EditDelete/EditCompany.css'
import './components/Modal/modal.css'
import './components/pages/Tickets/Tickets.css'
import './css/index.css'

import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProviderWrapper } from './context/auth.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <AuthProviderWrapper>
    <App />
    </AuthProviderWrapper>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
