import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Amplify } from 'aws-amplify';
import outputs from './amplify_outputs.json';

if (!outputs) {
  console.error('Amplify outputs file is missing or empty.');
} else {
  Amplify.configure(outputs);
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
