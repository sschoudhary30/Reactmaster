import React from 'react'
import Shop1 from '../../public/images/Shop1.jpeg';

const RestaurentCard = (props) => {

    const { resData } = props;
    const { resName, cuisien, starRate, timeofDel} = resData; // this called destructuring of code.  there is also concept of optional chaining also by " ? ". 

    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0",}}>
            <img  className="res-logo" src={Shop1} alt="res-Logo"/>
            <h3>{resName}</h3>
            <h4>{cuisien}</h4>
            <h4>{starRate} ⭐</h4>
            <h4>{timeofDel/2} Min</h4>    
        </div>
    )

}

export default RestaurentCard