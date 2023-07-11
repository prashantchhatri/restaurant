import React from "react";
import ReactDOM from "react-dom/client";
import Header from './Header'
import Body from './Body'
import About from "./About";
import Contact from "./Contact";
import Error from "./Eroor";
import { RouterProvider, createBrowserRouter } from "react-router-dom"

// heading = React.createElement("h1", {id: "heading"}, "Hello World From React!!");

const AppLayout = () => {
    return(
    <div className="app">
        <Header/>
        <Body/>
    </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <Contact/>
    }
])

root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);