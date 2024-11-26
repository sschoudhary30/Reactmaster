import React from 'react'
import Shop1 from '../../public/images/Shop1.jpeg';
import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {

    const { resData } = props;
    //const { resName, cuisien, starRate, timeofDel} = resData; // this called destructuring of code.  there is also concept of optional chaining also by " ? ".
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
      } = resData; 

    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0",}}>
            <img  className="res-logo" src={CDN_URL + cloudinaryImageId} alt="res-Logo"/>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating} ⭐</h4>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} Min</h4>    
        </div>
    )

}

export default RestaurentCard