import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Layout/Root';
import Erropage from './Pages/Erropage/Erropage';

import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Erropage></Erropage>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);