import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main.jsx';
import Home from './pages/home/Home.jsx';
import Chefscart from './pages/chefsDetails/chefscart.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Login from './Layout/login/Login.jsx';
import Ragister from './Layout/login/Ragister.jsx';
import PrivateRoute from './Layout/login/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/ragister",
        element: <Ragister></Ragister>,
      },
     
      {
        path: "/chefs/:id",
        element:<Chefscart></Chefscart>,
        loader:({params})=>fetch(`http://localhost:5000/chefs/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
