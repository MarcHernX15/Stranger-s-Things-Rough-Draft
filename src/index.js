import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import ErrorPage from "./components/errorPage";
import Posts from "./components/Posts";
import Register from "./components/Register"
import DetailedPostView from "./components/detailedPosts";
import Login from "./components/Login";
import Profile from "./components/Profile"
import NewMessages from "./components/NewMessages";
import NewPosts from "./components/NewPosts";
import EditPost from "./components/EditPost";
import IndexHome from "./components/indexhome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <IndexHome />
            },
            {
                path: "/posts",
                element: <Posts />
            },
            {
                path:"/posts/:id",
                element:<DetailedPostView />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path:"/login",
                element: <Login />
            },
            {
                path:"/profile",
                element: <Profile />
            },
            {
                path:"/newmessages/:id",
                element: <NewMessages />
            },
            {
                path:"/newPosts",
                element: <NewPosts />
            },
            {
                path:"/editPosts/:id",
                element:<EditPost />
            }
        ]
    }
])

ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"));