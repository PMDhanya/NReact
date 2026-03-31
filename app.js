import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {useState,useEffect} from "react";
import Shimmer from "./src/components/Shimmer"; 
import { createBrowserRouter,Outlet,RouterProvider, useOutletContext, Navigate, useLocation} from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Error from "./src/components/Error"; 
import { Link } from "react-router-dom";  
import RestaurantMenu from "./RestaurantMenu";
import useOnlineStatus from "./useOnlineStatus";
import { lazy,Suspense } from "react";


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

const Header=({ cartCount })=>{
  const [btnName,setBtnName]=useState("Login");
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
                    <button className="login"onClick={()=>{
                        setBtnName(btnName==="Login"?"Logout":"Login")}}>{btnName}</button>
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
   
                  




const RestaurantCard=(props)=>{
    const {resData} = props;
    return (
        <div className="res-card" style ={ {backgroundColor: "#f5e9f1"} }>
            <img className="res-logo"
            alt="res-logo"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`} />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} mins</h4>

        </div>
    );
};

const FALLBACK_RESTAURANTS = [
  {
    info: {
      id: "123456",
      name: "Pizza Paradise",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
      cuisines: ["Pizza", "Italian", "Fast Food"],
      avgRating: 4.3,
      costForTwo: "Rs400 for two",
      sla: { deliveryTime: 30 },
    },
  },
  {
    info: {
      id: "234567",
      name: "Burger Hub",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.6,
      costForTwo: "Rs300 for two",
      sla: { deliveryTime: 25 },
    },
  },
  {
    info: {
      id: "345678",
      name: "Green Bites",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      cuisines: ["Healthy Food", "Salads", "Vegan"],
      avgRating: 4.7,
      costForTwo: "Rs250 for two",
      sla: { deliveryTime: 20 },
    },
  },
  {
    info: {
      id: "456789",
      name: "Spice Kingdom",
      cloudinaryImageId: "rng/md/carousel/production/indian101",
      cuisines: ["Indian", "North Indian", "Biryani"],
      avgRating: 4.2,
      costForTwo: "Rs500 for two",
      sla: { deliveryTime: 35 },
    },
  },
  {
    info: {
      id: "567890",
      name: "Chinese Dragon",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ba9f1f59-30d5-44de-afad-df6db8471ead_9648.jpg",
      cuisines: ["Chinese", "Asian", "Thai"],
      avgRating: 4.4,
      costForTwo: "Rs350 for two",
      sla: { deliveryTime: 28 },
    },
  },
  {
    info: {
      id: "678901",
      name: "Dessert Delight",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/731001f1-f1c4-4f5f-849f-79a697cb0b72_390173.jpg",
      cuisines: ["Desserts", "Ice Cream", "Bakery"],
      avgRating: 4.6,
      costForTwo: "Rs200 for two",
      sla: { deliveryTime: 22 },
    },
  },
  {
    info: {
      id: "789012",
      name: "Sushi Station",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
      cuisines: ["Japanese", "Sushi", "Asian"],
      avgRating: 4.8,
      costForTwo: "Rs800 for two",
      sla: { deliveryTime: 40 },
    },
  },
  {
    info: {
      id: "890123",
      name: "South Spice",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
      cuisines: ["South Indian", "Dosa", "Idli"],
      avgRating: 4.5,
      costForTwo: "Rs300 for two",
      sla: { deliveryTime: 25 },
    },
  },
  {
    info: {
      id: "901234",
      name: "Pasta Palace",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/7bd350a8-55e7-459b-83a2-e250e670d194_14558.JPG",
      cuisines: ["Italian", "Pasta", "Continental"],
      avgRating: 4.1,
      costForTwo: "Rs450 for two",
      sla: { deliveryTime: 32 },
    },
  },
];

let Body=()=>{
    const [resList,setResList]=React.useState([]);
    const [filteredResList,setFilteredResList]=React.useState([]);
    const [SearchText,setSearchText]=React.useState("");
    const [showVegOnly, setShowVegOnly] = React.useState(false);
    const [showFastDelivery, setShowFastDelivery] = React.useState(false);
    const [showBudgetFriendly, setShowBudgetFriendly] = React.useState(false);
                    
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
            {filteredResList.map((restaurant)=>(<Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} state={{resName: restaurant.info.name}} style={{textDecoration: "none", color: "inherit"}}><RestaurantCard resData={restaurant} /></Link>))}
        </div>
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

const Checkout = () => {
  const outletContext = useOutletContext() || {};
  const cartItems = outletContext.cartItems || {};
  const clearCart = outletContext.clearCart || (() => {});
  const cartItemList = Object.values(cartItems);
  const [selectedAddress, setSelectedAddress] = useState("home");
  const [selectedPayment, setSelectedPayment] = useState("upi");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderMeta, setOrderMeta] = useState(null);

  const subtotal = cartItemList.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = cartItemList.length > 0 ? 40 : 0;
  const taxes = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + deliveryFee + taxes;

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
          <label className="checkout-option">
            <input
              type="radio"
              name="address"
              value="home"
              checked={selectedAddress === "home"}
              onChange={(e) => setSelectedAddress(e.target.value)}
            />
            <span>Home - Madhapur, Hyderabad</span>
          </label>
          <label className="checkout-option">
            <input
              type="radio"
              name="address"
              value="work"
              checked={selectedAddress === "work"}
              onChange={(e) => setSelectedAddress(e.target.value)}
            />
            <span>Work - HITEC City, Hyderabad</span>
          </label>

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
          <div className="checkout-row"><span>Subtotal</span><span>Rs{subtotal}</span></div>
          <div className="checkout-row"><span>Delivery Fee</span><span>Rs{deliveryFee}</span></div>
          <div className="checkout-row"><span>Taxes</span><span>Rs{taxes}</span></div>
          <div className="checkout-total"><span>Total</span><span>Rs{grandTotal}</span></div>
          <button
            className="place-order-btn"
            onClick={() => {
              const generatedOrderId = `NR${Date.now().toString().slice(-6)}`;
              setOrderMeta({
                orderId: generatedOrderId,
                etaMinutes: 30,
                totalAmount: grandTotal,
                addressLabel: selectedAddress === "home" ? "Home - Madhapur, Hyderabad" : "Work - HITEC City, Hyderabad",
              });
              clearCart();
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

  useEffect(() => {
    const statusTimer = setInterval(() => {
      setActiveStep((prev) => (prev < TRACKING_STEPS.length - 1 ? prev + 1 : prev));
    }, 7000);

    const etaTimer = setInterval(() => {
      setEtaMinutes((prev) => (prev > 0 ? prev - 1 : 0));
    }, 60000);

    return () => {
      clearInterval(statusTimer);
      clearInterval(etaTimer);
    };
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
    </div>
  );
};

const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout=()=>{
  const [cartItems, setCartItems] = useState(() => {
    try {
      const cachedCart = localStorage.getItem("nreact_cart");
      return cachedCart ? JSON.parse(cachedCart) : {};
    } catch (error) {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("nreact_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const itemKey = String(item.id);
      const existingItem = prev[itemKey];

      if (existingItem) {
        return {
          ...prev,
          [itemKey]: {
            ...existingItem,
            quantity: existingItem.quantity + 1,
          },
        };
      }

      return {
        ...prev,
        [itemKey]: {
          id: item.id,
          name: item.name,
          price: item.price || 0,
          quantity: 1,
        },
      };
    });
  };

  const decreaseCartItem = (itemId) => {
    setCartItems((prev) => {
      const itemKey = String(itemId);
      const existingItem = prev[itemKey];
      if (!existingItem) return prev;

      if (existingItem.quantity === 1) {
        const nextItems = { ...prev };
        delete nextItems[itemKey];
        return nextItems;
      }

      return {
        ...prev,
        [itemKey]: {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        },
      };
    });
  };

  const getItemQuantity = (itemId) => cartItems[String(itemId)]?.quantity || 0;
  const cartCount = Object.values(cartItems).reduce((total, item) => total + item.quantity, 0);
  const clearCart = () => setCartItems({});

    return <div className="app">
    <Header cartCount={cartCount} />
    <Outlet context={{ addToCart, decreaseCartItem, getItemQuantity, cartItems, clearCart }} />
         
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
}],
  errorElement:<Error />,
},

]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
