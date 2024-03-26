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
import ListBooks from './components/ListBooks/ListBooks';
import PageStat from './components/pageStat/PageStat';
import ContactPage from './components/ContactPage/ContactPage';

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
        element: <ListBooks></ListBooks>,
      },
      {
        path: '/pagetoread',
        element: <PageStat></PageStat>,
      },
      {
        path: '/books-details/:id',
        element: <BookDetails></BookDetails>,
      },
      {
        path: '/contact',
        element: <ContactPage></ContactPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
