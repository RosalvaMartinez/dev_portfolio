import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import About from './components/About.tsx'
import Email from './components/Email.tsx'
import MyResume from './components/MyResume.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/email",
    element: <Email />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/resume",
    element: <MyResume />
  }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
