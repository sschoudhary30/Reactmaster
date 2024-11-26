import { title } from "process";
import React, { Children } from "react";
import ReactDOM from "react-dom/client";


import Header from "./component/Header";
import Body from "./component/Body";
import { element } from "three/examples/jsm/nodes/Nodes.js";

import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurentMenu from "./component/RestaurantMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router/dom";
import { error } from "console";













const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet />
            
            


 
        </div>
    )
}

const appRouter = createBrowserRouter ([
    {
        path:"/",
        element: <AppLayout/>,
        Children: [
            {
                path:"/",
                element: <Body />,

            },
            {
                path:"/about",
                element: <About/>,
        
            },
            {
                path:"/Contact",
                element:<Contact />,
            },
            {
                path:"/restaurant/:resId", // here /: spicfy it is dynamic route element.
                element:<RestaurentMenu />
            }

        ],
        errorElement: <Error />, 
    } 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxheading); // this how React element are render.
//root.render(<AppLayout/>); // this how react component are render. 
root.render(<RouterProvider router={appRouter}/>); // render with approuter power.