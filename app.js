import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {useState,useEffect} from "react";
import Shimmer from "./src/components/Shimmer"; 
import { createBrowserRouter,Outlet,RouterProvider, useOutletContext, Navigate, useLocation, useNavigate} from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Error from "./src/components/Error"; 
import { Link } from "react-router-dom";  
import RestaurantMenu from "./RestaurantMenu";
import useOnlineStatus from "./useOnlineStatus";
import { lazy,Suspense } from "react";
import Toast from "./src/components/Toast";
import LoginModal from "./src/components/LoginModal";
import UserProfile from "./src/components/UserProfile";
import Footer from "./src/components/Footer";


// const heading=React.createElement("h1",{id:"heading",abc:"xyz"},"Hello, nReact!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



// const parent=React.createElement("div",{id:"parent"},[
//     React.createElement("div",{id:"child"},
//     [React.createElement("h1",{},"I am an h1 tag"),
//     React.createElement("h2",{},"I am an h2 tag"),]),
//     React.createElement("div",{id:"child2"},
//     [React.createElement("h1",{},"I am an h1 tag"),
//     React.createElement("h2",{},"I am an h2 tag"),]),
// ]);




// const heading = React.createElement("h1",{id:"heading"},"Hello, nReact!");
// console.log(heading);

// const JsxHeading = <h1 id="heading" className="section" tabIndex="1">Hello, nReact using jsx!</h1>;
// console.log(JsxHeading);

// const elem=<span>React</span>; //1. react element inside a element

//2. react element inside a component
// const title=(<h1 className="head" tabIndex="1">
//     {elem}                       
//     Hello, nReact using jsxxxx! 
//     </h1>);
    
 // 3.rendering component inside another functional component.(COMPONENT COMPOSITION)
// const HeadingComponent=()=>(
//     <div id="container"> 
//         {10+22}
//         {title} 
//         {title} 
//         {title}                      
//         <h1 className="section" tabIndex="1">Hello, nReact using jsx!</h1>
//     </div>
// );
// const root = createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

const Header=({ cartCount, user, onLoginClick, onLogout, darkMode, onToggleDark })=>{
  const onlineStatus = useOnlineStatus();
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.creativefabrica.com/wp-content/uploads/2020/02/11/Food-Logo-Graphics-1-70.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                  <li>Online Status: {onlineStatus ? "🟢 Online" : "🔴 Offline"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li className="cart-link"><Link to="/cart">Cart ({cartCount})</Link></li>
                    {user ? (
                        <>
                            <li><Link to="/profile" className="header-profile-link">👤 {user.name}</Link></li>
                            <button className="login" onClick={onLogout}>Logout</button>
                        </>
                    ) : (
                        <button className="login" onClick={onLoginClick}>Login</button>
                    )}
                    <button className="dark-toggle" onClick={onToggleDark} aria-label="Toggle dark mode" title="Toggle dark mode">
                        {darkMode ? "☀️" : "🌙"}
                    </button>
                </ul>
            </div>
            </div>
    );
};
// let resList=[
//                     {
//                       "info": {
//                         "id": "123456",
//                         "name": "Pizza Paradise",
//                         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
//                         "locality": "MG Road",
//                         "areaName": "Central District",
//                         "costForTwo": "₹400 for two",
//                         "cuisines": [
//                           "Pizza",
//                           "Italian",
//                           "Fast Food"
//                         ],
//                         "avgRating": 4.3,
//                         "avgRatingString": "4.3",
//                         "totalRatingsString": "10K+ ratings",
//                         "veg": false,
//                         "sla": {
//                           "deliveryTime": 30,
//                           "lastMileTravel": 3.5,
//                           "slaString": "30 mins"
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "50% OFF",
//                           "subHeader": "UPTO ₹100"
//                         }
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "234567",
//                         "name": "Burger Hub",
//                         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
//                         "locality": "Park Street",
//                         "areaName": "Downtown",
//                         "costForTwo": "₹300 for two",
//                         "cuisines": [
//                           "Burgers",
//                           "American",
//                           "Fast Food"
//                         ],
//                         "avgRating": 4.5,
//                         "avgRatingString": "4.5",
//                         "totalRatingsString": "15K+ ratings",
//                         "veg": false,
//                         "sla": {
//                           "deliveryTime": 25,
//                           "lastMileTravel": 2,
//                           "slaString": "25 mins"
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "40% OFF",
//                           "subHeader": "UPTO ₹80"
//                         }
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "345678",
//                         "name": "Green Bites",
//                         "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
//                         "locality": "Residency Road",
//                         "areaName": "South Zone",
//                         "costForTwo": "₹250 for two",
//                         "cuisines": [
//                           "Healthy Food",
//                           "Salads",
//                           "Vegan"
//                         ],
//                         "avgRating": 4.7,
//                         "avgRatingString": "4.7",
//                         "totalRatingsString": "8K+ ratings",
//                         "veg": true,
//                         "sla": {
//                           "deliveryTime": 20,
//                           "lastMileTravel": 1.5,
//                           "slaString": "20 mins"
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "30% OFF",
//                           "subHeader": "UPTO ₹75"
//                         }
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "456789",
//                         "name": "Spice Kingdom",
//                         "cloudinaryImageId": "rng/md/carousel/production/indian101",
//                         "locality": "Brigade Road",
//                         "areaName": "City Center",
//                         "costForTwo": "₹500 for two",
//                         "cuisines": [
//                           "Indian",
//                           "North Indian",
//                           "Biryani"
//                         ],
//                         "avgRating": 4.2,
//                         "avgRatingString": "4.2",
//                         "totalRatingsString": "12K+ ratings",
//                         "veg": false,
//                         "sla": {
//                           "deliveryTime": 35,
//                           "lastMileTravel": 4,
//                           "slaString": "35 mins"
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "20% OFF",
//                           "subHeader": "UPTO ₹50"
//                         }
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "567890",
//                         "name": "Chinese Dragon",
//                         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ba9f1f59-30d5-44de-afad-df6db8471ead_9648.jpg",
//                         "locality": "Commercial Street",
//                         "areaName": "East District",
//                         "costForTwo": "₹350 for two",
//                         "cuisines": [
//                           "Chinese",
//                           "Asian",
//                           "Thai"
//                         ],
//                         "avgRating": 4.4,
//                         "avgRatingString": "4.4",
//                         "totalRatingsString": "9K+ ratings",
//                         "veg": false,
//                         "sla": {
//                           "deliveryTime": 28,
//                           "lastMileTravel": 2.8,
//                           "slaString": "28 mins"
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "60% OFF",
//                           "subHeader": "UPTO ₹120"
//                         }
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "678901",
//                         "name": "Dessert Delight",
//                         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/731001f1-f1c4-4f5f-849f-79a697cb0b72_390173.jpg",
//                         "locality": "Lavelle Road",
//                         "areaName": "West End",
//                         "costForTwo": "₹200 for two",
//                         "cuisines": [
//                           "Desserts",
//                           "Ice Cream",
//                           "Bakery"
//                         ],
//                         "avgRating": 4.6,
//                         "avgRatingString": "4.6",
//                         "totalRatingsString": "7K+ ratings",
//                         "veg": true,
//                         "sla": {
//                           "deliveryTime": 22,
//                           "lastMileTravel": 1.8,
//                           "slaString": "22 mins"
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "25% OFF",
//                           "subHeader": "UPTO ₹60"
//                         }
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "789012",
//                         "name": "Sushi Station",
//                         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
//                         "locality": "Indiranagar",
//                         "areaName": "Uptown",
//                         "costForTwo": "₹800 for two",
//                         "cuisines": [
//                           "Japanese",
//                           "Sushi",
//                           "Asian"
//                         ],
//                         "avgRating": 4.8,
//                         "avgRatingString": "4.8",
//                         "totalRatingsString": "5K+ ratings",
//                         "veg": false,
//                         "sla": {
//                           "deliveryTime": 40,
//                           "lastMileTravel": 5.2,
//                           "slaString": "40 mins"
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "15% OFF",
//                           "subHeader": "UPTO ₹150"
//                         }
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "890123",
//                         "name": "South Spice",
//                         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
//                         "locality": "Jayanagar",
//                         "areaName": "South Bangalore",
//                         "costForTwo": "₹300 for two",
//                         "cuisines": [
//                           "South Indian",
//                           "Dosa",
//                           "Idli"
//                         ],
//                         "avgRating": 4.5,
//                         "avgRatingString": "4.5",
//                         "totalRatingsString": "11K+ ratings",
//                         "veg": true,
//                         "sla": {
//                           "deliveryTime": 25,
//                           "lastMileTravel": 3,
//                           "slaString": "25 mins"
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "35% OFF",
//                           "subHeader": "UPTO ₹70"
//                         }
//                       }
//                     },
//                     {
//                       "info": {
//                         "id": "901234",
//                         "name": "Pasta Palace",
//                         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/7bd350a8-55e7-459b-83a2-e250e670d194_14558.JPG",
//                         "locality": "Koramangala",
//                         "areaName": "Tech Hub",
//                         "costForTwo": "₹450 for two",
//                         "cuisines": [
//                           "Italian",
//                           "Pasta",
//                           "Continental"
//                         ],
//                         "avgRating": 4.1,
//                         "avgRatingString": "4.1",
//                         "totalRatingsString": "6K+ ratings",
//                         "veg": false,
//                         "sla": {
//                           "deliveryTime": 32,
//                           "lastMileTravel": 3.8,
//                           "slaString": "32 mins"
//                         },
//                         "aggregatedDiscountInfoV3": {
//                           "header": "45% OFF",
//                           "subHeader": "UPTO ₹90"
//                         }
//                       }
//                     }
//                   ];
   
                  




const FALLBACK_IMG = (seed) => `https://picsum.photos/seed/${seed}/660/200`;

const RestaurantCard = ({ resData, isFav, onToggleFav }) => {
    const info = resData.info;
    // Prefer localImage (Unsplash), fall back to Swiggy CDN, then picsum
    const imgSrc = info.localImage
        || (info.cloudinaryImageId
            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`
            : FALLBACK_IMG(info.id));
    return (
        <div className="res-card" style={{ backgroundColor: "#f5e9f1" }}>
            <div className="res-img-wrap">
                <img
                    className="res-logo"
                    alt={info.name}
                    src={imgSrc}
                    onError={(e) => { e.currentTarget.src = FALLBACK_IMG(info.id); }}
                />
                <button
                    className={`fav-btn ${isFav ? "fav-active" : ""}`}
                    onClick={(e) => { e.preventDefault(); onToggleFav(info.id); }}
                    aria-label={isFav ? "Remove from favourites" : "Add to favourites"}
                >
                    {isFav ? "❤️" : "🤍"}
                </button>
            </div>
            <h3>{info.name}</h3>
            <h4>{info.cuisines.join(", ")}</h4>
            <h4>{info.avgRating}</h4>
            <h4>{info.costForTwo}</h4>
            <h4>{info.sla.deliveryTime} mins</h4>
        </div>
    );
};

const FALLBACK_RESTAURANTS = [
  {
    info: {
      id: "123456", name: "Pizza Paradise",
      localImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=660&q=80",
      cuisines: ["Pizza", "Italian", "Pasta"], avgRating: 4.3,
      costForTwo: "₹400 for two", veg: false, sla: { deliveryTime: 30 },
    },
  },
  {
    info: {
      id: "234567", name: "Burger Hub",
      localImage: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=660&q=80",
      cuisines: ["Burgers", "American", "Shakes"], avgRating: 4.6,
      costForTwo: "₹300 for two", veg: false, sla: { deliveryTime: 25 },
    },
  },
  {
    info: {
      id: "345678", name: "Green Bites",
      localImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=660&q=80",
      cuisines: ["Healthy Food", "Salads", "Vegan"], avgRating: 4.7,
      costForTwo: "₹250 for two", veg: true, sla: { deliveryTime: 20 },
    },
  },
  {
    info: {
      id: "456789", name: "Spice Kingdom",
      localImage: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=660&q=80",
      cuisines: ["North Indian", "Mughlai", "Biryani"], avgRating: 4.2,
      costForTwo: "₹500 for two", veg: false, sla: { deliveryTime: 35 },
    },
  },
  {
    info: {
      id: "567890", name: "Chinese Dragon",
      localImage: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=660&q=80",
      cuisines: ["Chinese", "Pan-Asian", "Noodles"], avgRating: 4.4,
      costForTwo: "₹350 for two", veg: false, sla: { deliveryTime: 28 },
    },
  },
  {
    info: {
      id: "678901", name: "Dessert Delight",
      localImage: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=660&q=80",
      cuisines: ["Desserts", "Ice Cream", "Waffles"], avgRating: 4.6,
      costForTwo: "₹200 for two", veg: true, sla: { deliveryTime: 22 },
    },
  },
  {
    info: {
      id: "789012", name: "Sushi Station",
      localImage: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=660&q=80",
      cuisines: ["Japanese", "Sushi", "Ramen"], avgRating: 4.8,
      costForTwo: "₹800 for two", veg: false, sla: { deliveryTime: 40 },
    },
  },
  {
    info: {
      id: "890123", name: "South Spice",
      localImage: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=660&q=80",
      cuisines: ["South Indian", "Kerala", "Andhra"], avgRating: 4.5,
      costForTwo: "₹300 for two", veg: true, sla: { deliveryTime: 25 },
    },
  },
  {
    info: {
      id: "901234", name: "Pasta Palace",
      localImage: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=660&q=80",
      cuisines: ["Italian", "Pasta", "Continental"], avgRating: 4.1,
      costForTwo: "₹450 for two", veg: false, sla: { deliveryTime: 32 },
    },
  },
  {
    info: {
      id: "112233", name: "The Grill House",
      localImage: "https://images.unsplash.com/photo-1544025162-d76694265947?w=660&q=80",
      cuisines: ["BBQ", "Grills", "American"], avgRating: 4.5,
      costForTwo: "₹600 for two", veg: false, sla: { deliveryTime: 38 },
    },
  },
  {
    info: {
      id: "223344", name: "Taco Loco",
      localImage: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=660&q=80",
      cuisines: ["Mexican", "Tex-Mex", "Burritos"], avgRating: 4.3,
      costForTwo: "₹350 for two", veg: false, sla: { deliveryTime: 27 },
    },
  },
  {
    info: {
      id: "334455", name: "The Waffle Co.",
      localImage: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=660&q=80",
      cuisines: ["Waffles", "Pancakes", "Café"], avgRating: 4.4,
      costForTwo: "₹280 for two", veg: true, sla: { deliveryTime: 22 },
    },
  },
];

const PAGE_SIZE = 6;

let Body=()=>{
    const [resList,setResList]=React.useState([]);
    const [filteredResList,setFilteredResList]=React.useState([]);
    const [SearchText,setSearchText]=React.useState("");
    const [showVegOnly, setShowVegOnly] = React.useState(false);
    const [showFastDelivery, setShowFastDelivery] = React.useState(false);
    const [showBudgetFriendly, setShowBudgetFriendly] = React.useState(false);
    const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE);
    const { favourites = [], toggleFav = () => {} } = useOutletContext() || {};
                    
useEffect(()=>{fetchData()},[]);

    const getCostForTwoValue = (costForTwo = "") => {
      const costDigits = String(costForTwo).replace(/[^0-9]/g, "");
      return costDigits ? Number(costDigits) : Number.MAX_SAFE_INTEGER;
    };

    const applyRestaurantFilters = (sourceList, searchValue, vegOnly, fastOnly, budgetOnly) => {
      return sourceList.filter((restaurant) => {
        const info = restaurant.info || {};
        const name = (info.name || "").toLowerCase();
        const cuisines = (info.cuisines || []).join(" ").toLowerCase();
        const query = searchValue.trim().toLowerCase();
        const matchesSearch =
          query.length === 0 || name.includes(query) || cuisines.includes(query);

        const isVeg = info.veg === true || (info.cuisines || []).some((c) => c.toLowerCase().includes("veg"));
        const matchesVeg = !vegOnly || isVeg;

        const deliveryTime = Number(info?.sla?.deliveryTime || 999);
        const matchesFastDelivery = !fastOnly || deliveryTime <= 30;

        const costForTwoValue = getCostForTwoValue(info.costForTwo);
        const matchesBudget = !budgetOnly || costForTwoValue <= 300;

        return matchesSearch && matchesVeg && matchesFastDelivery && matchesBudget;
      });
    };

    useEffect(() => {
      setFilteredResList(
        applyRestaurantFilters(
          resList,
          SearchText,
          showVegOnly,
          showFastDelivery,
          showBudgetFriendly
        )
      );
    }, [resList, SearchText, showVegOnly, showFastDelivery, showBudgetFriendly]);

    const fetchData=async()=>{
      try {
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3924982&lng=78.46796379999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          || json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          || json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          || json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if (restaurants && restaurants.length > 0) {
          setResList(restaurants);
          setFilteredResList(restaurants);
          return;
        }

        // If API shape changes or returns empty, keep UI usable with local mock data.
        setResList(FALLBACK_RESTAURANTS);
        setFilteredResList(FALLBACK_RESTAURANTS);
      } catch (error) {
        console.log("Fetch failed (CORS issue):", error.message);
        setResList(FALLBACK_RESTAURANTS);
        setFilteredResList(FALLBACK_RESTAURANTS);
      }
    }
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>🔴 You are offline. Please check your internet connection.</h1>;
    //Conditonally render shimmer UI
    if(resList.length===0){
        return <Shimmer />;
    }
return (
        <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box"value={SearchText} onChange={(e)=>{
              setSearchText(e.target.value);
            }} onKeyDown={(e)=>{
              if(e.key==="Enter"){
                setFilteredResList(
                  applyRestaurantFilters(
                    resList,
                    SearchText,
                    showVegOnly,
                    showFastDelivery,
                    showBudgetFriendly
                  )
                );
              }
            }}/>
            <button className="search-btn" onClick={()=>{console.log(SearchText);
             setFilteredResList(
               applyRestaurantFilters(
                 resList,
                 SearchText,
                 showVegOnly,
                 showFastDelivery,
                 showBudgetFriendly
               )
             );
            }}>Search</button>
          </div>
            <button className="filter-btn" onClick={()=>{ const filteredList=resList.filter((res) => res.info.avgRating>4.5); setFilteredResList(filteredList); console.log(filteredList);}}>Top Rated Restaurants</button>
        </div>
        <div className="home-filter-chips">
          <button className={`chip-btn ${showVegOnly ? "chip-active" : ""}`} onClick={() => setShowVegOnly((prev) => !prev)}>Veg Only</button>
          <button className={`chip-btn ${showFastDelivery ? "chip-active" : ""}`} onClick={() => setShowFastDelivery((prev) => !prev)}>Fast Delivery (&lt; 30 min)</button>
          <button className={`chip-btn ${showBudgetFriendly ? "chip-active" : ""}`} onClick={() => setShowBudgetFriendly((prev) => !prev)}>Under Rs300</button>
          <button className="chip-btn chip-clear" onClick={() => {
            setSearchText("");
            setShowVegOnly(false);
            setShowFastDelivery(false);
            setShowBudgetFriendly(false);
            setFilteredResList(resList);
          }}>Clear Filters</button>
        </div>
        <div className="restaurant-container">
            {filteredResList.slice(0, visibleCount).map((restaurant)=>(
                <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} state={{resName: restaurant.info.name}} style={{textDecoration: "none", color: "inherit"}}>
                    <RestaurantCard
                        resData={restaurant}
                        isFav={favourites.includes(restaurant.info.id)}
                        onToggleFav={toggleFav}
                    />
                </Link>
            ))}
        </div>
        {visibleCount < filteredResList.length && (
            <div className="load-more-wrap">
                <button className="load-more-btn" onClick={() => setVisibleCount((p) => p + PAGE_SIZE)}>
                    Load More Restaurants
                </button>
            </div>
        )}
        </div>
    );
};

const Cart = () => {
  const outletContext = useOutletContext() || {};
  const cartItems = outletContext.cartItems || {};
  const addToCart = outletContext.addToCart || (() => {});
  const decreaseCartItem = outletContext.decreaseCartItem || (() => {});
  const cartItemList = Object.values(cartItems);

  const subtotal = cartItemList.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = cartItemList.length > 0 ? 40 : 0;
  const taxes = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + deliveryFee + taxes;

  if (cartItemList.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <h2>Your cart is empty</h2>
        <p>Add items from a restaurant menu to see them here.</p>
        <Link to="/" className="cart-cta">Browse Restaurants</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Cart Summary</h2>
      <div className="cart-layout">
        <div className="cart-items">
          {cartItemList.map((item) => (
            <div key={item.id} className="cart-row">
              <div>
                <h4>{item.name}</h4>
                <p>Rs{item.price} each</p>
              </div>
              <div className="menu-qty-control">
                <button onClick={() => decreaseCartItem(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
              <strong>Rs{item.price * item.quantity}</strong>
            </div>
          ))}
        </div>
        <div className="cart-bill">
          <div><span>Subtotal</span><span>Rs{subtotal}</span></div>
          <div><span>Delivery Fee</span><span>Rs{deliveryFee}</span></div>
          <div><span>Taxes</span><span>Rs{taxes}</span></div>
          <hr />
          <div className="cart-total"><span>Total</span><span>Rs{grandTotal}</span></div>
          <Link to="/checkout" className="cart-checkout-btn">Proceed to Checkout</Link>
        </div>
      </div>
    </div>
  );
};

const PROMOS = { "SAVE10": 10, "WELCOME20": 20, "NREACT15": 15 };

const Checkout = () => {
  const outletContext = useOutletContext() || {};
  const cartItems = outletContext.cartItems || {};
  const placeOrder = outletContext.placeOrder || (() => {});
  const addresses = outletContext.addresses || [];
  const cartItemList = Object.values(cartItems);
  const DEFAULT_ADDRESSES = [
    { label: "Home", value: "Madhapur, Hyderabad" },
    { label: "Work", value: "HITEC City, Hyderabad" },
  ];
  const allAddresses = addresses.length > 0 ? addresses : DEFAULT_ADDRESSES;
  const [selectedAddressIdx, setSelectedAddressIdx] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState("upi");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderMeta, setOrderMeta] = useState(null);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState("");

  const applyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (PROMOS[code]) {
      setAppliedPromo({ code, pct: PROMOS[code] });
      setPromoError("");
    } else {
      setAppliedPromo(null);
      setPromoError("Invalid promo code. Try SAVE10, WELCOME20 or NREACT15");
    }
  };

  const subtotal = cartItemList.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = appliedPromo ? Math.round(subtotal * appliedPromo.pct / 100) : 0;
  const deliveryFee = cartItemList.length > 0 ? 40 : 0;
  const taxes = Math.round((subtotal - discount) * 0.05);
  const grandTotal = subtotal - discount + deliveryFee + taxes;

  if (cartItemList.length === 0 && !orderPlaced) {
    return <Navigate to="/cart" replace />;
  }

  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <div className="checkout-success">
          <h2>Order Placed Successfully</h2>
          <p>Your food is being prepared. Estimated arrival: 25-35 mins.</p>
          <Link to="/track-order" state={orderMeta} className="cart-checkout-btn">Track Order</Link>
          <Link to="/" className="cart-cta">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-layout">
        <div className="checkout-block">
          <h3>Delivery Address</h3>
          {allAddresses.map((addr, i) => (
            <label key={i} className="checkout-option">
              <input
                type="radio"
                name="address"
                value={i}
                checked={selectedAddressIdx === i}
                onChange={() => setSelectedAddressIdx(i)}
              />
              <span>{addr.label} - {addr.value}</span>
            </label>
          ))}
          <Link to="/profile" className="checkout-manage-addr">+ Manage Addresses</Link>

          <h3>Payment Method</h3>
          <label className="checkout-option">
            <input
              type="radio"
              name="payment"
              value="upi"
              checked={selectedPayment === "upi"}
              onChange={(e) => setSelectedPayment(e.target.value)}
            />
            <span>UPI</span>
          </label>
          <label className="checkout-option">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={selectedPayment === "card"}
              onChange={(e) => setSelectedPayment(e.target.value)}
            />
            <span>Credit/Debit Card</span>
          </label>
          <label className="checkout-option">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={selectedPayment === "cod"}
              onChange={(e) => setSelectedPayment(e.target.value)}
            />
            <span>Cash on Delivery</span>
          </label>
        </div>

        <div className="checkout-block">
          <h3>Order Summary</h3>
          {cartItemList.map((item) => (
            <div key={item.id} className="checkout-row">
              <span>{item.name} x {item.quantity}</span>
              <span>Rs{item.price * item.quantity}</span>
            </div>
          ))}
          <hr />
          {/* Promo code */}
          <div className="promo-row">
            <input
              className="promo-input"
              placeholder="Promo code (e.g. SAVE10)"
              value={promoCode}
              onChange={(e) => { setPromoCode(e.target.value); setPromoError(""); }}
            />
            <button className="promo-btn" onClick={applyPromo}>Apply</button>
          </div>
          {promoError && <p className="promo-error">{promoError}</p>}
          {appliedPromo && <p className="promo-success">✅ {appliedPromo.code} applied — {appliedPromo.pct}% off!</p>}
          <div className="checkout-row"><span>Subtotal</span><span>Rs{subtotal}</span></div>
          {discount > 0 && <div className="checkout-row promo-discount-row"><span>Discount ({appliedPromo.pct}%)</span><span>-Rs{discount}</span></div>}
          <div className="checkout-row"><span>Delivery Fee</span><span>Rs{deliveryFee}</span></div>
          <div className="checkout-row"><span>Taxes (5%)</span><span>Rs{taxes}</span></div>
          <div className="checkout-total"><span>Total</span><span>Rs{grandTotal}</span></div>
          <button
            className="place-order-btn"
            onClick={() => {
              const generatedOrderId = `NR${Date.now().toString().slice(-6)}`;
              const selectedAddr = allAddresses[selectedAddressIdx];
              const addressLabel = `${selectedAddr.label} - ${selectedAddr.value}`;
              setOrderMeta({ orderId: generatedOrderId, etaMinutes: 30, totalAmount: grandTotal, addressLabel });
              placeOrder({ orderId: generatedOrderId, totalAmount: grandTotal, addressLabel, items: cartItemList, paymentMethod: selectedPayment });
              setOrderPlaced(true);
            }}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

const TRACKING_STEPS = [
  "Order Confirmed",
  "Preparing in Kitchen",
  "Picked Up by Delivery Partner",
  "On the Way",
  "Delivered",
];

const TrackOrder = () => {
  const location = useLocation();
  const passedState = location.state || {};
  const [activeStep, setActiveStep] = useState(0);
  const [etaMinutes, setEtaMinutes] = useState(Number(passedState.etaMinutes || 30));
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const isDelivered = activeStep === TRACKING_STEPS.length - 1;

  useEffect(() => {
    const statusTimer = setInterval(() => {
      setActiveStep((prev) => (prev < TRACKING_STEPS.length - 1 ? prev + 1 : prev));
    }, 7000);
    const etaTimer = setInterval(() => {
      setEtaMinutes((prev) => (prev > 0 ? prev - 1 : 0));
    }, 60000);
    return () => { clearInterval(statusTimer); clearInterval(etaTimer); };
  }, []);

  return (
    <div className="tracking-page">
      <h2>Track Order</h2>
      <div className="tracking-card">
        <div className="tracking-meta">
          <p><strong>Order ID:</strong> {passedState.orderId || "NRAUTO"}</p>
          <p><strong>Delivering to:</strong> {passedState.addressLabel || "Saved address"}</p>
          <p><strong>Total:</strong> Rs{passedState.totalAmount || "--"}</p>
          <p><strong>ETA:</strong> {etaMinutes} mins</p>
        </div>
        <div className="tracking-steps">
          {TRACKING_STEPS.map((step, index) => (
            <div key={step} className={`tracking-step ${index <= activeStep ? "tracking-step-active" : ""}`}>
              <span className="tracking-dot" />
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Review panel — visible only after delivery */}
      {isDelivered && (
        <div className="review-card">
          {reviewSubmitted ? (
            <div className="review-thankyou">
              <span>🎉</span>
              <h3>Thanks for your review!</h3>
              <p>Your feedback helps others discover great food.</p>
            </div>
          ) : (
            <>
              <h3>How was your experience?</h3>
              <div className="review-stars">
                {[1,2,3,4,5].map((s) => (
                  <button
                    key={s}
                    className={`star-btn ${rating >= s ? "star-active" : ""}`}
                    onClick={() => setRating(s)}
                    aria-label={`Rate ${s} star${s > 1 ? "s" : ""}`}
                  >★</button>
                ))}
              </div>
              <textarea
                className="review-textarea"
                rows={3}
                placeholder="Tell us about your experience (optional)"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
              <button
                className="review-submit-btn"
                disabled={rating === 0}
                onClick={() => setReviewSubmitted(true)}
              >
                Submit Review
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

// ── Profile page wrapper ─────────────────────────────────────────────────────
const ProfilePage = () => {
  const navigate = useNavigate();
  const outletContext = useOutletContext() || {};
  const user = outletContext.user;
  const orders = outletContext.orders || [];
  const addresses = outletContext.addresses || [];
  const addAddress = outletContext.addAddress || (() => {});
  const deleteAddress = outletContext.deleteAddress || (() => {});
  const logout = outletContext.logout || (() => {});

  if (!user) {
    return (
      <div className="profile-not-logged">
        <span aria-hidden="true">🔒</span>
        <h2>Please sign in to view your profile</h2>
        <Link to="/" className="cart-cta" style={{ display: "inline-block", marginTop: "14px" }}>Back to Home</Link>
      </div>
    );
  }

  return (
    <UserProfile
      user={user}
      orders={orders}
      addresses={addresses}
      onAddAddress={addAddress}
      onDeleteAddress={deleteAddress}
      onLogout={() => { logout(); navigate("/"); }}
    />
  );
};

const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout=()=>{
  // ── Cart ─────────────────────────────────────────────────────────────────
  const [cartItems, setCartItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem("nreact_cart") || "null") || {}; } catch { return {}; }
  });

  // ── Auth ─────────────────────────────────────────────────────────────────
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("nreact_user") || "null"); } catch { return null; }
  });

  // ── Orders ───────────────────────────────────────────────────────────────
  const [orders, setOrders] = useState(() => {
    try { return JSON.parse(localStorage.getItem("nreact_orders") || "null") || []; } catch { return []; }
  });

  // ── Saved addresses ──────────────────────────────────────────────────────
  const [addresses, setAddresses] = useState(() => {
    try { return JSON.parse(localStorage.getItem("nreact_addresses") || "null") || []; } catch { return []; }
  });

  // ── Toasts ───────────────────────────────────────────────────────────────
  const [toasts, setToasts] = useState([]);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    localStorage.setItem("nreact_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ── Toast helpers ─────────────────────────────────────────────────────────
  const addToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3500);
  };
  const removeToast = (id) => setToasts((prev) => prev.filter((t) => t.id !== id));

  // ── Auth handlers ─────────────────────────────────────────────────────────
  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("nreact_user", JSON.stringify(userData));
    addToast(`Welcome, ${userData.name}! 👋`, "success");
  };
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("nreact_user");
    addToast("You have been signed out.", "info");
  };

  // ── Cart handlers ─────────────────────────────────────────────────────────
  const addToCart = (item) => {
    const isNew = !cartItems[String(item.id)];
    setCartItems((prev) => {
      const itemKey = String(item.id);
      const existingItem = prev[itemKey];
      if (existingItem) return { ...prev, [itemKey]: { ...existingItem, quantity: existingItem.quantity + 1 } };
      return { ...prev, [itemKey]: { id: item.id, name: item.name, price: item.price || 0, quantity: 1 } };
    });
    if (isNew) addToast(`"${item.name}" added to cart 🛒`, "success");
  };

  const decreaseCartItem = (itemId) => {
    setCartItems((prev) => {
      const itemKey = String(itemId);
      const existingItem = prev[itemKey];
      if (!existingItem) return prev;
      if (existingItem.quantity === 1) { const n = { ...prev }; delete n[itemKey]; return n; }
      return { ...prev, [itemKey]: { ...existingItem, quantity: existingItem.quantity - 1 } };
    });
  };

  const getItemQuantity = (itemId) => cartItems[String(itemId)]?.quantity || 0;
  const cartCount = Object.values(cartItems).reduce((total, item) => total + item.quantity, 0);
  const clearCart = () => setCartItems({});

  // ── Order handler ─────────────────────────────────────────────────────────
  const placeOrder = (orderDetails) => {
    const order = {
      ...orderDetails,
      date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
    };
    setOrders((prev) => {
      const updated = [order, ...prev];
      localStorage.setItem("nreact_orders", JSON.stringify(updated));
      return updated;
    });
    clearCart();
    addToast("Order placed successfully! 🎉", "success");
  };

  // ── Address handlers ─────────────────────────────────────────────────────
  const addAddress = (addr) => {
    setAddresses((prev) => {
      const updated = [...prev, addr];
      localStorage.setItem("nreact_addresses", JSON.stringify(updated));
      return updated;
    });
    addToast("Address saved!", "success");
  };

  const deleteAddress = (index) => {
    setAddresses((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      localStorage.setItem("nreact_addresses", JSON.stringify(updated));
      return updated;
    });
    addToast("Address removed.", "info");
  };

  // ── Favourites ───────────────────────────────────────────────────────────
  const [favourites, setFavourites] = useState(() => {
    try { return JSON.parse(localStorage.getItem("nreact_favs") || "null") || []; } catch { return []; }
  });

  const toggleFav = (resId) => {
    setFavourites((prev) => {
      const next = prev.includes(resId) ? prev.filter((id) => id !== resId) : [...prev, resId];
      localStorage.setItem("nreact_favs", JSON.stringify(next));
      addToast(next.includes(resId) ? "Added to favourites ❤️" : "Removed from favourites", "info");
      return next;
    });
  };

  // ── Dark mode ────────────────────────────────────────────────────────────
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("nreact_dark") === "true");

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("nreact_dark", String(darkMode));
  }, [darkMode]);

  return <div className="app">
    <Header cartCount={cartCount} user={user} onLoginClick={() => setShowLogin(true)} onLogout={handleLogout} darkMode={darkMode} onToggleDark={() => setDarkMode((p) => !p)} />
    <Outlet context={{ addToCart, decreaseCartItem, getItemQuantity, cartItems, clearCart, addToast, user, orders, addresses, addAddress, deleteAddress, placeOrder, logout: handleLogout, favourites, toggleFav }} />
    <Footer />
    <Toast toasts={toasts} removeToast={removeToast} />
    {showLogin && <LoginModal onClose={() => setShowLogin(false)} onLogin={handleLogin} />}
  </div>
};
const appRouter=createBrowserRouter([
  {
  path:"/",
  element:<AppLayout />,
  children:[
    {
      index:true,
      element:<Body />
    },
    {
  path:"about",
  element:<About />
},
{
  path:"contact",
  element:<Contact />
},
{ 
  path:"grocery",
  element:(<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>)
},
{
  path:"restaurants/:resId",
  element:<RestaurantMenu />
},
{
  path:"cart",
  element:<Cart />
},
{
  path:"checkout",
  element:<Checkout />
},
{
  path:"track-order",
  element:<TrackOrder />
},
{
  path:"profile",
  element:<ProfilePage />
}],
  errorElement:<Error />,
},

]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
