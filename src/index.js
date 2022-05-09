import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme } from '@mui/material/styles';
import useVH from 'react-viewport-height';
import blue from '@mui/material/colors/blue';


const theme = createTheme({
  palette: {
    primary: blue,
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   


    <App />
   
   
  </React.StrictMode>
);


