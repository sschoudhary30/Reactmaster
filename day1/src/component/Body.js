import React from 'react'
import RestaurentCard from './RestaurentCard';
import resList from '../utils/mockData';
import { useState }  from 'react'

const Body = () => {

    // local state Variable - super variable

    const [ListOfRestaurants, setListOFRestaurant] = useState(resList);
  return (
    <div className="body">
            <div className="filter">
                <button className='filter-btn' onClick={() => {
                    // filter logic

                    const filterList = ListOfRestaurants.filter(
                        (res) => res.starRate > 4
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
                ListOfRestaurants.map((restaurant) => (<RestaurentCard key={restaurant.id} resData={restaurant}/>))
            }
            

            </div>
        </div>
  )
}

export default Body