import { title } from "process";
import React from "react";
import ReactDOM from "react-dom/client";


import Header from "./component/Header";
import Body from "./component/Body";












const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            


 
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxheading); // this how React element are render.
root.render(<AppLayout/>); // this how react component are render. 