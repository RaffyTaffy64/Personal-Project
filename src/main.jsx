import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Account from './components/Account.jsx'
import Payment from './components/Payment.jsx'
import Events from './components/Events.jsx'
import Register from './components/Register.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="Login" element={<Login />} />
      <Route path="/Account" element={<Account />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Events" element={<Events />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)


