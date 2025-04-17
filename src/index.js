import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional: You can include global styles here
import App from './App'; // Main component (To-Do App)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
