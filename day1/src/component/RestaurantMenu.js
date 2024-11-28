import React, { useState } from "react"; 
import Shimmer from "./Shimmer";
import { useParams  } from "react-router-dom"; 
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurentMenu = () => {

    //const [resInfo, setresInfo] = useState(null);
    const { resId } = useParams();
    const resInfo  = useRestaurantMenu(resId);

    {/** 

        // this before custom hook.   
    useEffect(()=>{
        fetchMenu();

    },[])

    const fetchMenu = async () => {
        const data = await fetch("");
        const json = await data.json("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resId );
        
        setresInfo(json.data)
    }

    */}

    if (resInfo === null) <Shimmer />; 

    const {name, cuisines, costForTwoMessage } = resInfo?.data?.cards[0]?.card?.card?.Info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

   
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}  -  {costForTwoMessage}</p>
            <ul>
            {
                itemCards.map((item) => (<li key={ item.card.info.id}> {item.card.info.name} - {"Rs"}{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>))
            }
            </ul>
        </div>

    );
};

export default RestaurentMenu;