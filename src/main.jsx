import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/HOme/Home';
import HomePage from './components/HomePAge/HomePage';
import BookDetails from './components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <div>404 . NOt Found</div>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
      },
      {
        path: '/listedbooks',
        element: <div>Listed book</div>,
      },
      {
        path: '/pagetoread',
        element: <div>Page To Read</div>,
      },
      {
        path: '/books-details/:id',
        element: <BookDetails></BookDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
