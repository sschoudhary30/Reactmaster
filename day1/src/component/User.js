import { useState } from "react";

const User = (porps) => {

    const [count, setCount] = useState(0);
    const [count2] = useState(1);
    
     
    return(
        <div className="user-card">
            <h1>Count:{count}</h1>
            <h1>Count:{count2}</h1>
            <h1>Name: {porps.name}</h1>
            <h2>Location: Dehradun</h2>
            <h4>Contact: @suresh_aumix </h4>
        </div>
    )
}

export default User;