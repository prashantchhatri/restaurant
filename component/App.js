import React from "react";
import ReactDOM from "react-dom/client";
import Header from './Header'
import Body from './Body'
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";

const AppLayout = () => {
    return(
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restautants/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    },
])

root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);