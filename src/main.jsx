import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import WelcomePage from './pages/WelcomePage/WelcomePage';
import App from './pages/App/App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage></WelcomePage>,
  },
  {
    path:'/app',
    element:<App></App>
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);