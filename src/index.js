import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";
import Admin from "./components/Administracion";
import AdminProductos from "./components/Administracion/AdminProductos";
import AdminCategorias from "./components/Administracion/AdminCategorias";
import Productos from "./components/Productos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin_productos",
    element: <AdminProductos />,
  },
  {
    path: "/admin_categorias",
    element: <AdminCategorias />,
  },
  {
    path: "/categoria/:nombre/:id",
    element: <Productos />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
