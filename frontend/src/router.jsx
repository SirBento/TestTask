import App from './App.jsx'
import { createBrowserRouter} from 'react-router-dom'
import React from 'react'
import { SignUp, SignIn, RegistrationSuccess } from './routes'

export const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/signin", element: <SignIn/>},
    {path: "/signup", element: <SignUp/>},
    {path: "/successful", element: <RegistrationSuccess/>}])

    