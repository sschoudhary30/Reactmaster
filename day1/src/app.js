import { title } from "process";
import React, { Children, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";


import Header from "./component/Header";
import Body from "./component/Body";
import { element } from "three/examples/jsm/nodes/Nodes.js";

import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurentMenu from "./component/RestaurantMenu";
import Grocery from "./component/Grocery";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router/dom";
import { error } from "console";





// this lazy way of loading Grocery.
// react some time suspend rendering.
// bzc it time to load.

// to avoid this error : <Suspense><Grocery/></Suspense>
const Grocery = lazy(() => import("./component/Grocery"));





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
                path:"/Grocery",
                element: <Suspense fallback={<h1>you can pass something for loading time. here in fallback like shimmer ui and etc.</h1>}><Grocery/></Suspense>,

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