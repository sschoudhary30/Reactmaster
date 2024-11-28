import React from 'react'
import RestaurentCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState, useEffect }  from 'react'
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
    const [ListOfRestaurants, setListOFRestaurant] = useState(resList);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    // local state Variable - super variable

    /*useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/update");

        const json = await data.json();
        // optional chaining.
        setListOFRestaurant(json?.data?.cards[1]?.0?.card?.card?.gridElement?.infoWithStyle?.restaurant?);
        setfilteredRestaurant(json?.data?.cards[1]?.0?.card?.card?.gridElement?.infoWithStyle?.restaurant?);
        
    };
    */
    {// logic for spin loader

    }
    // conditional rendering.
    //if(ListOfRestaurants.length === 0){
       // return <Shimmer/>


    //}

    const [searchText, setsearchText] = useState("");

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Look's like you are offline</h1>
    
  return ListOfRestaurants.length === 0 ? <Shimmer/> :(
    <div className="body">
            <div className="filter">
                <div className='search'>
                    <input type="text" className='search-box' value={searchText} onChange={ (e) => {
                        setsearchText(e.target.value);
                    }}/>
                    <button onClick={() => {
                        // Filter the restraunt cards and update the UI.
                        // search text.
                        const filteredRestaurant = ListOfRestaurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
                        setListOFRestaurant(filteredRestaurant);

                    }}>search</button>

                </div>
                <button className='filter-btn' onClick={() => {
                    // filter logic

                    const filterList = ListOfRestaurants.filter(
                        (res) => res.avgRating > 4
                    )  

                    setListOFRestaurant(filterList);
                }}>Top Rated restaurant</button>
            </div>
            <div className="restaurent-container">
            {
                // this normal way of making muliple complement.

                //<RestaurentCard resData={resList[0]} /> 
                //<RestaurentCard resData={resList[1]} />
                //<RestaurentCard resData={resList[2]} />
                //<RestaurentCard resData={resList[3]} />
                //<RestaurentCard resData={resList[4]} />
            } 
            {
                // this is dynamic way of it
            }
            {
                // This dynamic calling of data. learn more of map, reduce, filter   
                // whenever we use looping property give key proprety to identify component.
                filteredRestaurant.map((restaurant) => (
                    <Link to={"/restaurants/"+restaurant.data.id}  key={restaurant.id}><RestaurentCard resData={restaurant}/></Link>))
            }
            

            </div>
        </div>
    )
}

export default Body