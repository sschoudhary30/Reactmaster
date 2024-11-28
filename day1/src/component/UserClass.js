import React from "react";
class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state ={
            count:0,
            count2:0,
        }
    }
    // this we create useState in class based compo
    // this.state is big object can hold 

   


    render() {
        return(
            <div className="user-card">
            <h1>Count:{this.state.count}</h1>
            <button onClick={() => {
                this.setState({
                    // pass aobject.
                    count: this.state.count + 1,
                    count2: this.state.count2 + 1,
            }) 
            }}>Count Increase</button>
            <h1>Name:{this.props.name}</h1>   
            <h2>Location: Dehradun</h2>
            <h4>Contact: @suresh_aumix</h4>
        </div>

        )
    }
}

export default UserClass;