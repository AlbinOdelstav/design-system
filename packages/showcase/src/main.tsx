import React from 'react';
import ReactDOM from 'react-dom/client';
// Import the library's base stylesheet (Tailwind layers + generated token vars).
import '../../ui/src/tailwind/base.css';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
