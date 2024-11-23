/*
import { title } from "process";
import React from "react";
import ReactDOM from "react-dom/client";
/**
 * 
 * // how to create this kind of nest struct in react.
 * <div id ="parent">
 *      <div id="child1">
 *          <h1 id="heading1">I am h1 tag.</h1>
 *          <h2> I am h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1 id="heading1">I am h1 tag.</h1>
 *          <h2> I am h2 tag</h2>
 *      </div>
 * </div>
 * 
 * 
 * 
 * 
 *
*const parent = React.createElement(
*
*    "div",
*    {id:"parent"},
*    [React.createElement(
*        "div",
        {id:"child1"},
        [React.createElement("h1",{id:"heading1"},"I am h1 tag 🐼 ."),React.createElement("h2",{},"I am h2 tag 👻.")]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1",{id:"heading2"},"I am h1 tag."),React.createElement("h2",{},"I am h2 tag.")]
    )
    ]
);

const heading = React.createElement("h1",{
    id:"heading",
},"Hello world from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

// React element are equilvalent to react-dom element

// below is jsx way to make html element in react.

// React Element
/*
const elem =(
    <span> this react element inside react element
    </span>
);

const jsxheading = (
    
    <h1 id="heading">
    {elem
        // should be inside tag part and this inside React element
    }
    <br/>
    suresh is daddy of coding 🚀💀
    </h1>
); // Now this became react element

// React component.
// React Functional component 

const HeadingComponent1 = () =>{
    return <h1> this is React Functional based component 💀.</h1>
};

const HeadingComponent2 = () =>(
    <div id="container">
        <h1> this is React Functional based component fir 💀.</h1>
    </div>
    
);

const num = 1000;

// here we are calling one component inside another component like headingcomponent2
const HeadingComponent3 = () =>(
    <div id="container">
        {
            // below is example of component composition
        }
        <HeadingComponent2/>
        {
            jsxheading
            // this is how React Element are render inside react Component code.
        }
        <h2>
        { // we can write anything in this curly brases of javascript.
            num +"suresh"
        }
        </h2>
        <h1> this is React Functional based component fir see💀.</h1>
    </div>
    
);

// short hand function 
//both are same
const f1 =()=> true; // only when function return on single thing, then return statement can be avoided.
const  f2 = () =>{ // most used.
    return true;
};


const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxheading); // this how React element are render.
root.render(<HeadingComponent3/>); // this how react component are render.
*/