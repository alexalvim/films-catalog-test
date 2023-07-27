import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Films } from './pages/Films';
import { Film } from './pages/Film';
import { PageNotFound } from './pages/PageNotFound';

const router = createBrowserRouter([
  {
    path: "/films",
    element: <Films />,
  },
  {
    path: "films/:filmId",
    element: <Film />,
  },
  {
    path: "/",
    element: <Navigate to="/films" replace />
  },
  {
    path: "/*",
    element: <PageNotFound/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
