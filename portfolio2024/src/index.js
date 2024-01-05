import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import App from './App';
import Aspen from './pages/aspen';
import Trailblazer from './pages/tbz';
import Safari from './pages/safari';
import Falcon from './pages/falcon';
import UAVSim from './pages/uavsim';
import Robokin from './pages/robokin';
import About from './pages/about';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"aspen",
    element:<Aspen/>
  },
  {
    path:"trailblazer",
    element:<Trailblazer/>
  },
  {
    path:"safari",
    element:<Safari/>
  },
  {
    path:"falcon",
    element:<Falcon/>
  },
  {
    path:"rl",
    element:<UAVSim/>
  },
  {
    path:"robokin",
    element:<Robokin/>
  },
  {
    path:"about",
    element:<About/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
