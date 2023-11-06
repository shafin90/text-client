import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import WelcomePage from './pages/WelcomePage/WelcomePage';
import App from './pages/App/App';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AuthProvider from './component/AuthProvider/AuthProvider';
import MessageSection from './component/MessageSection/MessageSection';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <WelcomePage></WelcomePage>,
  // },
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/registration',
    element: <RegistrationPage></RegistrationPage>
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },
  {
    path:"/chat",
    element: <MessageSection></MessageSection>
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);