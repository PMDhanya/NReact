import {useState,useEffect} from "react";
import {useParams, useLocation, useOutletContext} from "react-router-dom";
import Shimmer from "./src/components/Shimmer";
import mockMenuData from "./mockMenuData";

const MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4400802&lng=78.3489168&restaurantId=";

const parseMenuItem = (itemCard) => {
    const info = itemCard?.card?.info;
    if (!info?.id || !info?.name) return null;

    return {
        id: info.id,
        name: info.name,
        price: (info.price || info.defaultPrice || 0) / 100,
        isVeg: info.isVeg === 1,
        description: info.description || "",
        ratingCount: Number(info?.ratings?.aggregatedRating?.ratingCountV2 || 0),
    };
};

const normalizeLiveCategories = (cards = []) => {
    const categoryCards = cards.filter((c) => {
        const type = c?.card?.card?.["@type"] || "";
        return type.includes("ItemCategory") || type.includes("NestedItemCategory");
    });

    return categoryCards
        .map((c) => {
            const card = c?.card?.card;
            const directItems = (card?.itemCards || []).map(parseMenuItem).filter(Boolean);
            const nestedItems = (card?.categories || [])
                .flatMap((nested) => nested?.itemCards || [])
                .map(parseMenuItem)
                .filter(Boolean);
            const items = [...directItems, ...nestedItems];

            return {
                title: card?.title || "Menu",
                items,
            };
        })
        .filter((category) => category.items.length > 0);
};

const buildPresetSections = (categories = []) => {
    const allItems = categories.flatMap((category) => category.items || []);
    if (allItems.length === 0) return [];

    const uniqueById = [];
    const seen = new Set();
    allItems.forEach((item) => {
        if (!seen.has(item.id)) {
            seen.add(item.id);
            uniqueById.push(item);
        }
    });

    const recommendedItems = uniqueById.slice(0, 10);
    const hasRatingSignal = uniqueById.some((item) => item.ratingCount > 0);
    const mostOrderedItems = hasRatingSignal
        ? [...uniqueById].sort((a, b) => b.ratingCount - a.ratingCount).slice(0, 10)
        : uniqueById.slice(0, 10);
    const vegItems = uniqueById.filter((item) => item.isVeg).slice(0, 10);
    const nonVegItems = uniqueById.filter((item) => !item.isVeg).slice(0, 10);

    return [
        { title: "Recommended", items: recommendedItems },
        { title: "Most Ordered", items: mostOrderedItems },
        { title: "Veg Dishes", items: vegItems },
        { title: "Non-Veg Dishes", items: nonVegItems },
    ].filter((section) => section.items.length > 0);
};

const mergeCategoriesWithPresets = (categories = []) => {
    const presets = buildPresetSections(categories);
    const existingTitles = new Set(categories.map((category) => (category.title || "").toLowerCase()));
    const uniquePresets = presets.filter(
        (section) => !existingTitles.has(section.title.toLowerCase())
    );
    return [...uniquePresets, ...categories];
};

const RestaurantMenu=()=>{
    const [resinfo,setresInfo]=useState(null);
    const [menuCategories,setMenuCategories]=useState([]);
    const [openCategoryIndex, setOpenCategoryIndex] = useState(0); //accordion 
    const [menuSearchText, setMenuSearchText] = useState("");
    const [vegOnly, setVegOnly] = useState(false);
    const [sortBy, setSortBy] = useState("recommended");
    const {resId}=useParams();
    const location = useLocation();
    const resName = location.state?.resName || "";
    const { addToCart, decreaseCartItem, getItemQuantity } = useOutletContext();

    useEffect(()=>{fetchMenu();},[]);

    const fetchMenu=async()=>{
        try {
            // Try live Swiggy API first
            const data=await fetch(MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER");
            const json=await data.json();
            console.log("Live API response:", json);

            const info = json?.data?.cards?.find(c=>c?.card?.card?.info?.name)?.card?.card?.info;
            const rawCards = json?.data?.cards?.find(c=>c?.groupedCard)
                ?.groupedCard?.cardGroupMap?.REGULAR?.cards
                || [];

            const parsedCategories = normalizeLiveCategories(rawCards);
            const cats = mergeCategoriesWithPresets(parsedCategories);

            if(info && cats.length > 0){
                setresInfo(info);
                setMenuCategories(cats);
                setOpenCategoryIndex(0);
                return; // success — stop here
            }
        } catch(err) {
            console.log("Swiggy API failed, using mock data:", err.message);
        }

        // Fallback: use mock menu data (match by restaurant name)
        const nameKey = resName.toLowerCase().trim();
        const mock = mockMenuData[nameKey]
          || Object.entries(mockMenuData).find(([k]) => k !== "default" && (nameKey.includes(k) || k.includes(nameKey)))?.[1]
          || mockMenuData["default"];
        setresInfo({
            name: resName || mock.name,
            cuisines: mock.cuisines,
            costForTwoMessage: mock.costForTwoMessage,
            avgRating: mock.avgRating,
            totalRatingsString: mock.totalRatingsString,
            areaName: mock.areaName,
            sla: mock.sla,
        });
        setMenuCategories(mergeCategoriesWithPresets(mock.menu || []));
        setOpenCategoryIndex(0);
    };

    if(resinfo===null) return <Shimmer />;

    const {name,cuisines,costForTwoMessage,avgRating,totalRatingsString,areaName,sla} = resinfo;
    const normalizedQuery = menuSearchText.trim().toLowerCase();

    const filteredCategories = menuCategories
        .map((category) => {
            const items = (category.items || []).filter((item) => {
                const matchesVeg = !vegOnly || item.isVeg;
                const matchesSearch =
                    normalizedQuery.length === 0 ||
                    item.name.toLowerCase().includes(normalizedQuery) ||
                    item.description.toLowerCase().includes(normalizedQuery);
                return matchesVeg && matchesSearch;
            });

            let sortedItems = [...items];
            if (sortBy === "priceAsc") {
                sortedItems.sort((a, b) => a.price - b.price);
            } else if (sortBy === "priceDesc") {
                sortedItems.sort((a, b) => b.price - a.price);
            } else if (sortBy === "topRated") {
                sortedItems.sort((a, b) => b.ratingCount - a.ratingCount);
            }

            return {
                ...category,
                items: sortedItems,
            };
        })
        .filter((category) => category.items.length > 0);

    return (
        <div className="menu">
            <div className="menu-header">
                <h1>{name}</h1>
                <p className="menu-cuisines">{cuisines?.join(", ")}</p>
                <div className="menu-meta">
                    <span className="menu-rating">★ {avgRating} ({totalRatingsString})</span>
                    <span>{costForTwoMessage}</span>
                    <span>{sla?.slaString}</span>
                    <span>{areaName}</span>
                </div>
            </div>
            <hr />
            <h2>Menu</h2>
            <div className="menu-tools">
                <input
                    type="text"
                    value={menuSearchText}
                    onChange={(e) => setMenuSearchText(e.target.value)}
                    className="menu-search-box"
                    placeholder="Search dishes in this menu"
                />
                <label className="veg-toggle">
                    <input
                        type="checkbox"
                        checked={vegOnly}
                        onChange={(e) => setVegOnly(e.target.checked)}
                    />
                    <span>Veg only</span>
                </label>
                <select
                    className="menu-sort-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="recommended">Sort: Recommended</option>
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                    <option value="topRated">Top Rated</option>
                </select>
            </div>
            {filteredCategories.length === 0 && (
                <div className="menu-empty-state">
                    No dishes match your current filters.
                </div>
            )}
            {filteredCategories.map((category,index)=>(
                <div key={index} className="menu-category">
                    <button
                        type="button"
                        className="menu-category-toggle"
                        onClick={() =>
                            setOpenCategoryIndex(openCategoryIndex === index ? -1 : index)
                        }
                        aria-expanded={openCategoryIndex === index}
                    >
                        <h3>{category.title} ({category.items.length})</h3>
                        <span className="menu-category-icon">
                            {openCategoryIndex === index ? "-" : "+"}
                        </span>
                    </button>
                    {openCategoryIndex === index && (
                        <ul>
                            {category.items?.map((item)=>(
                                <li key={item.id} className="menu-item">
                                    <div className="menu-item-header">
                                        <div className="menu-item-details">
                                            <span className={item.isVeg ? "veg-dot" : "nonveg-dot"}>●</span>
                                            <span className="menu-item-name">{item.name}</span>
                                        </div>
                                        <div className="menu-item-actions">
                                            <span className="menu-item-price">₹{item.price}</span>
                                            {getItemQuantity(item.id) === 0 ? (
                                                <button className="menu-add-btn" onClick={() => addToCart(item)}>Add</button>
                                            ) : (
                                                <div className="menu-qty-control">
                                                    <button onClick={() => decreaseCartItem(item.id)}>-</button>
                                                    <span>{getItemQuantity(item.id)}</span>
                                                    <button onClick={() => addToCart(item)}>+</button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {item.description && (
                                        <p className="menu-item-desc">{item.description}</p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};
export default RestaurantMenu;