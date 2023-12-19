import React from 'react'
import ReactDOM from 'react-dom/client'
/* import { createBrowserRouter, RouterProvider } from "react-router-dom"; */
import {BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Signup from './Signup.jsx'
import './index.css'

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]); */

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
</BrowserRouter>
  
)
