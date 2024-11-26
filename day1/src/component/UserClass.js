import React from "react";
class UserClass extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div className="user-card">
            <h1>Name:{this.props.name}</h1>
            <h2>Location: Dehradun</h2>
            <h4>Contact: @suresh_aumix</h4>
        </div>

        )
    }
}

export default UserClass;