import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import store from "./store/store.js";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./component/pages/Home";
import AddPost from "./component/pages/AddPost";
import SignUp from "./component/pages/SignUp";
import EditPost from "./component/pages/EditPost";
import Post from "./component/pages/Post";
import AllPosts from "./component/pages/AllPosts";
import Dashboard from "./component/pages/Dashboard";

import Login from "./component/Login";
import AuthLayout from "./component/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
  path: "/dashboard",
  element: (
    <AuthLayout authentication>
      <Dashboard />
    </AuthLayout>
  ),
},
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <EditPost />
          </AuthLayout>
        ),
      },
      {
  path: "/post/:slug",
  element: (
    <AuthLayout authentication>
      <Post />
    </AuthLayout>
  ),
},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);