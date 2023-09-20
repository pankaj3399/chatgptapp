import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter as Router } from 'react-router-dom';
// import { Router, RouterProvider } from 'react-router-dom';
// import { router } from './Router/Router.jsx';
import { Provider } from 'react-redux';
import { store } from './redux-rtk/app/store.js';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        {/* <RouterProvider router={router}> */}
        <Router>
          <App />
          <Toaster />
        </Router>
        {/* </RouterProvider> */}
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
  ,
)
