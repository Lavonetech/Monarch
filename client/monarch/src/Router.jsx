import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <h1>hello</h1>,
    },
    
])

const Router = () => {
  return <RouterProvider router={Routers} />
}

export default Router