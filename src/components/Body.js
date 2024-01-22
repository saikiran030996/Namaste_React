import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    // Local  State variable = Super powerful variable

    console.log("body rendered")
    const [listOfRestaurants,setListOfRestaurants] = useState([]);

    const [filteredRestaurant,setFilteredRestaurant] = useState([]);

    const [searchText,setSearchText] = useState("")

    useEffect(() => {
        fetchData();
    },[]); 

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9254533&lng=77.546757&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );
          
        const json = await data.json();
        // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

        // Optional Chaning
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    };
    

    // if(listOfRestaurants.length === 0){
    //     return <Shimmer/>
    // }
   const onlineStatus = useOnlineStatus();

   if(onlineStatus === false) return (<h1>Looks like you're offline!! Please check the internet connection;</h1>);
        
    return listOfRestaurants.length === 0 ? <Shimmer></Shimmer> : (
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);

                    }}/>
                    <button onClick={()=>{
                        // Filter the restaurant cards and update the UI
                        // searchText

                        console.log(searchText);

                        const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestaurant(filteredRestaurant)

                    }}>Search</button>
                </div>
                
                <button className="filter-btn" onClick={() => {
                    // Filter logic here
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.data.avgRating >4);
                     setListOfRestaurants(filteredList);
                        
                }}>Top Rated Restaurants</button>
                
            </div>
            <div className='res-container'>
                {
                    filteredRestaurant.map((restaurant) => (<Link  key = {restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> <RestaurantCard resData = {restaurant}/> </Link>
                ))}

            

                
            </div>

        </div>
    )
}

export default Body;