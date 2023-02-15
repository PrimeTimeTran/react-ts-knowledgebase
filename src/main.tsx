import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { ProSidebarProvider } from 'react-pro-sidebar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/post";

function Home() {
  return <h1>Welcome! Find something to learn in the sidebar</h1>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "posts/:postId",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProSidebarProvider>
      <RouterProvider router={router} />
    </ProSidebarProvider>
  </React.StrictMode>,
)
