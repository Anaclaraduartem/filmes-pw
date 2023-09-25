import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Marvel from './pages/Marvel';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Marvel/>
  </React.StrictMode>
);

