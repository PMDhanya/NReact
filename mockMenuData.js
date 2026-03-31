// Mock menu data keyed by LOWERCASE restaurant name.
// RestaurantMenu matches by name (passed via Link state) so it works with dynamic Swiggy IDs.

const mockMenuData = {

  /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ DEFAULT (fallback for unknown restaurants) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  default: {
    name: "Restaurant",
    cuisines: ["Multi-cuisine"],
    costForTwoMessage: "â‚¹400 for two",
    avgRating: 4.2,
    totalRatingsString: "1K+ ratings",
    areaName: "Your Area",
    sla: { slaString: "30-35 mins" },
    menu: [
      {
        title: "Recommended",
        items: [
          { id: "d1", name: "Veg Fried Rice", price: 180, isVeg: true, description: "Aromatic rice tossed with fresh vegetables" },
          { id: "d2", name: "Paneer Butter Masala", price: 220, isVeg: true, description: "Rich creamy tomato gravy with soft paneer cubes" },
          { id: "d3", name: "Chicken Biryani", price: 280, isVeg: false, description: "Hyderabadi dum biryani with tender chicken" },
          { id: "d4", name: "Butter Naan", price: 50, isVeg: true },
          { id: "d5", name: "Gulab Jamun (2 pcs)", price: 80, isVeg: true, description: "Soft milk-solid dumplings in rose syrup" },
        ],
      },
    ],
  },

  /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 1. Pizza Hut â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  "pizza hut": {
    menu: [
      {
        title: "Bestseller Pizzas",
        items: [
          { id: "ph1", name: "Margherita", price: 199, isVeg: true, description: "A hugely popular margherita with cheese & tomato sauce" },
          { id: "ph2", name: "Peppy Paneer", price: 349, isVeg: true, description: "Chunky paneer with crisp capsicum & spicy red paprika" },
          { id: "ph3", name: "Chicken Supreme", price: 449, isVeg: false, description: "Loaded with chicken tikka, salami, pepperoni" },
          { id: "ph4", name: "Veggie Supreme", price: 379, isVeg: true, description: "Black olives, capsicum, onion, mushroom & sweet corn" },
          { id: "ph5", name: "Spicy Chicken Triple", price: 499, isVeg: false, description: "Schezwan chicken, tikka chicken & Sausage" },
        ],
      },
      {
        title: "Sides",
        items: [
          { id: "ph6", name: "Garlic Breadsticks (4 pcs)", price: 139, isVeg: true },
          { id: "ph7", name: "Chicken Wings (8 pcs)", price: 299, isVeg: false, description: "Baked buffalo wings with ranch dip" },
          { id: "ph8", name: "Stuffed Garlic Bread", price: 189, isVeg: true, description: "Cheese & jalapeÃ±o stuffed" },
        ],
      },
      {
        title: "Pasta & Beverages",
        items: [
          { id: "ph9", name: "Creamy Tomato Pasta", price: 219, isVeg: true },
          { id: "ph10", name: "Chicken Alfredo Pasta", price: 269, isVeg: false },
          { id: "ph11", name: "Pepsi (475ml)", price: 60, isVeg: true },
          { id: "ph12", name: "Chocolate Lava Cake", price: 109, isVeg: true, description: "Warm molten chocolate centre" },
        ],
      },
    ],
  },

  /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 2. KFC â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  "kfc": {
    menu: [
      {
        title: "Chicken Buckets",
        items: [
          { id: "kfc1", name: "Hot & Crispy Chicken (8 pcs)", price: 599, isVeg: false, description: "Signature 11 herbs & spices fried chicken" },
          { id: "kfc2", name: "Popcorn Chicken (Large)", price: 249, isVeg: false, description: "Bite-sized crispy chicken pieces" },
          { id: "kfc3", name: "Chicken Strips (5 pcs)", price: 299, isVeg: false },
          { id: "kfc4", name: "Smoky Grilled Wings (6 pcs)", price: 329, isVeg: false, description: "Charcoal-grilled with smoky BBQ glaze" },
        ],
      },
      {
        title: "Burgers & Wraps",
        items: [
          { id: "kfc5", name: "Classic Zinger Burger", price: 219, isVeg: false, description: "Crunchy chicken fillet, spicy mayo, lettuce" },
          { id: "kfc6", name: "Veg Zinger Burger", price: 179, isVeg: true, description: "Crispy veg patty with lettuce & mayo" },
          { id: "kfc7", name: "Chicken Wrap Roll", price: 159, isVeg: false },
          { id: "kfc8", name: "Paneer Wrap Roll", price: 139, isVeg: true },
        ],
      },
      {
        title: "Fries & Beverages",
        items: [
          { id: "kfc9", name: "French Fries (Large)", price: 129, isVeg: true },
          { id: "kfc10", name: "Coleslaw", price: 79, isVeg: true },
          { id: "kfc11", name: "Pepsi (475ml)", price: 60, isVeg: true },
          { id: "kfc12", name: "Chocolate Brownie", price: 89, isVeg: true },
        ],
      },
    ],
  },

  /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 3. Dum Safar Biryani â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  "dum safar biryani": {
    menu: [
      {
        title: "Dum Biryani",
        items: [
          { id: "ds1", name: "Hyderabadi Chicken Dum Biryani", price: 299, isVeg: false, description: "Slow-cooked with saffron, mint & fried onions" },
          { id: "ds2", name: "Mutton Dum Biryani", price: 399, isVeg: false, description: "Tender mutton on the bone, aromatic spices" },
          { id: "ds3", name: "Egg Biryani", price: 229, isVeg: false },
          { id: "ds4", name: "Paneer Dum Biryani", price: 249, isVeg: true, description: "Marinated paneer in fragrant basmati" },
          { id: "ds5", name: "Prawns Biryani", price: 449, isVeg: false, description: "Jumbo prawns layered with spiced rice" },
        ],
      },
      {
        title: "Kebabs & Starters",
        items: [
          { id: "ds6", name: "Chicken Seekh Kebab (4 pcs)", price: 229, isVeg: false },
          { id: "ds7", name: "Mutton Boti Kebab", price: 299, isVeg: false, description: "Charcoal-grilled tender mutton pieces" },
          { id: "ds8", name: "Paneer Tikka", price: 199, isVeg: true },
          { id: "ds9", name: "Apollo Fish", price: 279, isVeg: false, description: "Crispy fried fish tossed in spicy masala" },
        ],
      },
      {
        title: "Curries & Breads",
        items: [
          { id: "ds10", name: "Mirchi ka Salan", price: 149, isVeg: true, description: "Tangy peanut-sesame gravy with green chillies" },
          { id: "ds11", name: "Butter Chicken", price: 269, isVeg: false },
          { id: "ds12", name: "Rumali Roti", price: 35, isVeg: true },
          { id: "ds13", name: "Double Ka Meetha", price: 99, isVeg: true, description: "Hyderabadi bread pudding with milk rabdi" },
        ],
      },
    ],
  },

  /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 4. Srikanya â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  "srikanya": {
    menu: [
      {
        title: "Biryani",
        items: [
          { id: "sr1", name: "Chicken Biryani (Full)", price: 280, isVeg: false, description: "Andhra-style spicy chicken biryani" },
          { id: "sr2", name: "Mutton Biryani", price: 350, isVeg: false },
          { id: "sr3", name: "Veg Biryani", price: 199, isVeg: true },
          { id: "sr4", name: "Ulavacharu Chicken Biryani", price: 299, isVeg: false, description: "Signature horse-gram broth biryani" },
        ],
      },
      {
        title: "South Indian",
        items: [
          { id: "sr5", name: "Pesarattu", price: 79, isVeg: true, description: "Green moong dal crepe, Andhra speciality" },
          { id: "sr6", name: "Masala Dosa", price: 89, isVeg: true },
          { id: "sr7", name: "Idli (3 pcs)", price: 59, isVeg: true },
          { id: "sr8", name: "Andhra Meals (Unlimited)", price: 179, isVeg: true, description: "Rice, sambhar, rasam, curd, fry, curry, papad" },
        ],
      },
      {
        title: "Starters",
        items: [
          { id: "sr9", name: "Chilli Chicken", price: 219, isVeg: false },
          { id: "sr10", name: "Guntur Chicken", price: 249, isVeg: false, description: "Fiery red chilli chicken, Andhra style" },
          { id: "sr11", name: "Mirchi Bajji (4 pcs)", price: 69, isVeg: true },
        ],
      },
    ],
  },

  /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 5. WeFit â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  "wefit - protein bowls, salads & sandwiches": {
    menu: [
      {
        title: "Protein Bowls",
        items: [
          { id: "wf1", name: "Grilled Chicken Protein Bowl", price: 299, isVeg: false, description: "Brown rice, grilled chicken, broccoli, peanut sauce" },
          { id: "wf2", name: "Paneer Tikka Protein Bowl", price: 269, isVeg: true, description: "Quinoa, tandoori paneer, veggies, mint chutney" },
          { id: "wf3", name: "Egg Bhurji Bowl", price: 229, isVeg: false, description: "Multigrain rice, spiced scrambled eggs" },
          { id: "wf4", name: "Tofu Teriyaki Bowl", price: 259, isVeg: true, description: "Japanese-style teriyaki tofu, edamame, rice" },
        ],
      },
      {
        title: "Salads",
        items: [
          { id: "wf5", name: "Caesar Salad with Chicken", price: 279, isVeg: false },
          { id: "wf6", name: "Greek Salad", price: 199, isVeg: true, description: "Feta, olives, cucumber, tomato, oregano" },
          { id: "wf7", name: "Asian Sesame Chicken Salad", price: 289, isVeg: false },
        ],
      },
      {
        title: "Sandwiches & Wraps",
        items: [
          { id: "wf8", name: "Grilled Chicken Sandwich", price: 219, isVeg: false, description: "Whole wheat, chicken, lettuce, cheese, mustard" },
          { id: "wf9", name: "Paneer Tikka Wrap", price: 189, isVeg: true },
          { id: "wf10", name: "Egg White Omelette Wrap", price: 179, isVeg: false },
          { id: "wf11", name: "Peanut Butter Banana Smoothie", price: 169, isVeg: true },
        ],
      },
    ],
  },

  /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 6. Bakingo â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  "bakingo": {
    menu: [
      {
        title: "Bestseller Cakes",
        items: [
          { id: "bk1", name: "Choco Truffle Cake (500g)", price: 449, isVeg: true, description: "Rich dark chocolate layered cake" },
          { id: "bk2", name: "Dutch Chocolate Cake (500g)", price: 399, isVeg: true },
          { id: "bk3", name: "Butterscotch Crunch Cake (500g)", price: 429, isVeg: true, description: "Butterscotch cream with caramel crunch" },
          { id: "bk4", name: "Red Velvet Cake (500g)", price: 499, isVeg: true, description: "Cream cheese frosted red velvet" },
          { id: "bk5", name: "Pineapple Cake (500g)", price: 379, isVeg: true },
        ],
      },
      {
        title: "Jar Cakes & Pastries",
        items: [
          { id: "bk6", name: "Chocolate Jar Cake", price: 149, isVeg: true },
          { id: "bk7", name: "Tiramisu Jar", price: 179, isVeg: true },
          { id: "bk8", name: "Blueberry Cheesecake Slice", price: 169, isVeg: true },
          { id: "bk9", name: "Brownie (2 pcs)", price: 139, isVeg: true, description: "Fudgy chocolate brownies with walnuts" },
        ],
      },
      {
        title: "Cookies & Breads",
        items: [
          { id: "bk10", name: "Choco Chip Cookies (6 pcs)", price: 149, isVeg: true },
          { id: "bk11", name: "Garlic Bread Loaf", price: 119, isVeg: true },
          { id: "bk12", name: "Banana Bread", price: 179, isVeg: true },
        ],
      },
    ],
  },

  /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 7. Theobroma â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  "theobroma": {
    menu: [
      {
        title: "Signature Desserts",
        items: [
          { id: "tb1", name: "Chocolate Overload Pastry", price: 145, isVeg: true, description: "Triple chocolate layers with ganache" },
          { id: "tb2", name: "Red Velvet Pastry", price: 155, isVeg: true },
          { id: "tb3", name: "New York Cheesecake", price: 195, isVeg: true, description: "Classic baked cheesecake with berry compote" },
          { id: "tb4", name: "Tiramisu", price: 235, isVeg: true, description: "Espresso-soaked ladyfingers, mascarpone" },
          { id: "tb5", name: "Brownie Slab (Large)", price: 275, isVeg: true, description: "Dense, fudgy with sea salt" },
        ],
      },
      {
        title: "Cakes (500g)",
        items: [
          { id: "tb6", name: "Hazelnut Praline Cake", price: 595, isVeg: true },
          { id: "tb7", name: "Dutch Truffle Cake", price: 545, isVeg: true },
          { id: "tb8", name: "Mango Mousse Cake", price: 625, isVeg: true },
        ],
      },
      {
        title: "Savouries",
        items: [
          { id: "tb9", name: "Chicken Puff", price: 85, isVeg: false },
          { id: "tb10", name: "Paneer Tikka Croissant", price: 125, isVeg: true },
          { id: "tb11", name: "Mushroom Vol-au-vent", price: 115, isVeg: true },
        ],
      },
    ],
  },

  /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 8. Cafe Niloufer Classic â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  "cafe niloufer classic": {
    menu: [
      {
        title: "Bakery & Biscuits",
        items: [
          { id: "cn1", name: "Osmania Biscuit (10 pcs)", price: 80, isVeg: true, description: "Iconic Hyderabadi oven-baked biscuit" },
          { id: "cn2", name: "Fan Biscuit (10 pcs)", price: 70, isVeg: true },
          { id: "cn3", name: "Fruit Biscuit (10 pcs)", price: 90, isVeg: true },
          { id: "cn4", name: "Dilkhush (4 pcs)", price: 100, isVeg: true, description: "Puff pastry stuffed with dry-fruit sweet mix" },
          { id: "cn5", name: "Puff (Veg)", price: 30, isVeg: true },
          { id: "cn6", name: "Puff (Egg)", price: 35, isVeg: false },
        ],
      },
      {
        title: "Beverages",
        items: [
          { id: "cn7", name: "Irani Chai", price: 30, isVeg: true, description: "Signature creamy Hyderabadi tea" },
          { id: "cn8", name: "Special Coffee", price: 50, isVeg: true },
          { id: "cn9", name: "Badam Milk", price: 60, isVeg: true },
          { id: "cn10", name: "Fresh Lime Juice", price: 40, isVeg: true },
        ],
      },
      {
        title: "Snacks",
        items: [
          { id: "cn11", name: "Samosa (2 pcs)", price: 40, isVeg: true },
          { id: "cn12", name: "Bread Omelette", price: 60, isVeg: false },
          { id: "cn13", name: "Bun Maska", price: 35, isVeg: true, description: "Soft bun with butter, a classic Irani combo" },
        ],
      },
    ],
  },

  /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 9. Meridian Restaurant â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  "meridian restaurant": {
    menu: [
      {
        title: "Biryani",
        items: [
          { id: "mr1", name: "Chicken Biryani (Full)", price: 320, isVeg: false, description: "Hyderabadi dum style with raita & salan" },
          { id: "mr2", name: "Mutton Biryani (Full)", price: 420, isVeg: false },
          { id: "mr3", name: "Veg Biryani", price: 220, isVeg: true },
        ],
      },
      {
        title: "Chinese",
        items: [
          { id: "mr4", name: "Chicken Manchurian", price: 249, isVeg: false },
          { id: "mr5", name: "Gobi Manchurian", price: 189, isVeg: true },
          { id: "mr6", name: "Chicken Fried Rice", price: 219, isVeg: false },
          { id: "mr7", name: "Veg Noodles", price: 179, isVeg: true },
        ],
      },
      {
        title: "Kebabs & Tandoor",
        items: [
          { id: "mr8", name: "Tandoori Chicken (Full)", price: 399, isVeg: false, description: "Marinated whole chicken grilled in clay oven" },
          { id: "mr9", name: "Chicken Seekh Kebab", price: 219, isVeg: false },
          { id: "mr10", name: "Fish Tikka", price: 279, isVeg: false },
          { id: "mr11", name: "Paneer Tikka", price: 199, isVeg: true },
        ],
      },
    ],
  },

  /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 10. Taj Mahal-Abids â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  "taj mahal-abids": {
    menu: [
      {
        title: "South Indian",
        items: [
          { id: "tm1", name: "Masala Dosa", price: 89, isVeg: true },
          { id: "tm2", name: "Ghee Idli (3 pcs)", price: 69, isVeg: true },
          { id: "tm3", name: "Onion Uttapam", price: 99, isVeg: true },
          { id: "tm4", name: "South Indian Thali", price: 169, isVeg: true, description: "Rice, sambhar, rasam, poriyal, curd, papad" },
        ],
      },
      {
        title: "North Indian & Biryani",
        items: [
          { id: "tm5", name: "Chicken Biryani", price: 260, isVeg: false },
          { id: "tm6", name: "Paneer Butter Masala", price: 209, isVeg: true },
          { id: "tm7", name: "Dal Tadka", price: 149, isVeg: true },
          { id: "tm8", name: "Butter Naan", price: 45, isVeg: true },
        ],
      },
      {
        title: "Snacks",
        items: [
          { id: "tm9", name: "Samosa Chat", price: 79, isVeg: true, description: "Crushed samosa with chutneys, onion, sev" },
          { id: "tm10", name: "Mirchi Bajji (4 pcs)", price: 59, isVeg: true },
          { id: "tm11", name: "Chicken 65", price: 199, isVeg: false },
        ],
      },
    ],
  },

  /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 11. Shah Ghouse Hotel & Restaurant â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  "shah ghouse hotel & restaurant": {
    menu: [
      {
        title: "Biryani & Rice",
        items: [
          { id: "sg1", name: "Special Chicken Biryani", price: 310, isVeg: false, description: "Signature Shah Ghouse dum biryani, served with raita & mirchi ka salan" },
          { id: "sg2", name: "Mutton Biryani", price: 430, isVeg: false },
          { id: "sg3", name: "Chicken 65 Biryani", price: 340, isVeg: false },
          { id: "sg4", name: "Veg Biryani", price: 210, isVeg: true },
        ],
      },
      {
        title: "Tandoor & Kebabs",
        items: [
          { id: "sg5", name: "Tandoori Chicken (Half)", price: 249, isVeg: false },
          { id: "sg6", name: "Seekh Kebab (4 pcs)", price: 219, isVeg: false },
          { id: "sg7", name: "Mutton Boti", price: 279, isVeg: false },
          { id: "sg8", name: "Paneer Tikka", price: 199, isVeg: true },
        ],
      },
      {
        title: "Haleem & Specials",
        items: [
          { id: "sg9", name: "Mutton Haleem", price: 229, isVeg: false, description: "Slow-cooked wheat & mutton porridge, garnished with fried onions & lemon" },
          { id: "sg10", name: "Paya Soup", price: 179, isVeg: false, description: "Traditional trotters soup" },
          { id: "sg11", name: "Irani Chai", price: 30, isVeg: true },
        ],
      },
    ],
  },

  /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 12. Daily Kitchen â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  "daily kitchen - everyday homely meals": {
    menu: [
      {
        title: "Thalis",
        items: [
          { id: "dk1", name: "Veg Thali", price: 159, isVeg: true, description: "2 sabzi, dal, rice, roti, salad, pickle, sweet" },
          { id: "dk2", name: "Non-Veg Thali", price: 199, isVeg: false, description: "Chicken curry, dal, rice, roti, salad, sweet" },
          { id: "dk3", name: "Diet Thali", price: 179, isVeg: true, description: "Brown rice, dal, grilled paneer, veggies" },
        ],
      },
      {
        title: "Home-Style Curries",
        items: [
          { id: "dk4", name: "Aloo Gobi", price: 129, isVeg: true },
          { id: "dk5", name: "Chicken Curry (Homestyle)", price: 179, isVeg: false, description: "Just like mom's recipe" },
          { id: "dk6", name: "Dal Fry", price: 109, isVeg: true },
          { id: "dk7", name: "Egg Curry (2 eggs)", price: 139, isVeg: false },
        ],
      },
      {
        title: "Rice & Rotis",
        items: [
          { id: "dk8", name: "Jeera Rice", price: 109, isVeg: true },
          { id: "dk9", name: "Tawa Roti (4 pcs)", price: 60, isVeg: true },
          { id: "dk10", name: "Curd Rice", price: 99, isVeg: true },
        ],
      },
    ],
  },

  /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 13. LeanCrust Pizza â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  "leancrust pizza- thincrust experts": {
    menu: [
      {
        title: "Thin Crust Pizzas",
        items: [
          { id: "lc1", name: "Classic Margherita", price: 219, isVeg: true, description: "San Marzano sauce, mozzarella, basil" },
          { id: "lc2", name: "Farm Fresh", price: 299, isVeg: true, description: "Mushroom, capsicum, olive, onion, corn" },
          { id: "lc3", name: "Peri Peri Chicken", price: 369, isVeg: false, description: "Grilled chicken, peri peri sauce, jalapeÃ±o" },
          { id: "lc4", name: "BBQ Chicken", price: 389, isVeg: false },
          { id: "lc5", name: "Paneer Makhani", price: 329, isVeg: true, description: "Tandoori paneer, makhani sauce" },
        ],
      },
      {
        title: "Desserts",
        items: [
          { id: "lc6", name: "Choco Lava Cake", price: 119, isVeg: true },
          { id: "lc7", name: "New York Cheesecake", price: 149, isVeg: true },
        ],
      },
    ],
  },

  /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 14. Imperial Multicuisine Restaurant â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  "imperial multicuisine restaurant": {
    menu: [
      {
        title: "Biryani",
        items: [
          { id: "im1", name: "Chicken Dum Biryani", price: 269, isVeg: false },
          { id: "im2", name: "Mutton Biryani", price: 369, isVeg: false },
          { id: "im3", name: "Paneer Biryani", price: 219, isVeg: true },
        ],
      },
      {
        title: "Chinese",
        items: [
          { id: "im4", name: "Dragon Chicken", price: 249, isVeg: false, description: "Szechuan-style fiery chicken" },
          { id: "im5", name: "Veg Manchurian Gravy", price: 189, isVeg: true },
          { id: "im6", name: "Egg Fried Rice", price: 179, isVeg: false },
          { id: "im7", name: "Schezwan Noodles", price: 169, isVeg: true },
        ],
      },
      {
        title: "Indian & Tandoor",
        items: [
          { id: "im8", name: "Butter Chicken", price: 279, isVeg: false },
          { id: "im9", name: "Tandoori Chicken (Half)", price: 229, isVeg: false },
          { id: "im10", name: "Palak Paneer", price: 199, isVeg: true },
          { id: "im11", name: "Garlic Naan", price: 55, isVeg: true },
        ],
      },
    ],
  },

  /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 15. La Pino'z Pizza â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  "la pino'z pizza": {
    menu: [
      {
        title: "Pizzas",
        items: [
          { id: "lp1", name: "Margherita Regular", price: 149, isVeg: true },
          { id: "lp2", name: "Paneer Overload", price: 329, isVeg: true, description: "Extra paneer, onion, capsicum, tomato" },
          { id: "lp3", name: "Chicken Tikka Pizza", price: 379, isVeg: false },
          { id: "lp4", name: "Mexican Green Wave", price: 299, isVeg: true, description: "JalapeÃ±o, olives, capsicum, onion, Mexican herbs" },
          { id: "lp5", name: "BBQ Non-Veg", price: 399, isVeg: false, description: "Smoky BBQ chicken, pepperoni, sausage" },
        ],
      },
      {
        title: "Pasta & Garlic Bread",
        items: [
          { id: "lp6", name: "White Sauce Pasta", price: 199, isVeg: true },
          { id: "lp7", name: "Red Sauce Chicken Pasta", price: 249, isVeg: false },
          { id: "lp8", name: "Cheesy Garlic Bread (4 pcs)", price: 129, isVeg: true },
        ],
      },
      {
        title: "Beverages & Desserts",
        items: [
          { id: "lp9", name: "Cold Coffee", price: 99, isVeg: true },
          { id: "lp10", name: "Chocolate Mousse", price: 109, isVeg: true },
        ],
      },
    ],
  },

  /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 16. Paradise Biryani â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  "paradise biryani": {
    menu: [
      {
        title: "Signature Biryani",
        items: [
          { id: "pb1", name: "Paradise Special Chicken Biryani", price: 330, isVeg: false, description: "The legendary Hyderabadi biryani" },
          { id: "pb2", name: "Mutton Biryani", price: 450, isVeg: false },
          { id: "pb3", name: "Veg Biryani", price: 230, isVeg: true },
          { id: "pb4", name: "Prawns Biryani", price: 480, isVeg: false },
        ],
      },
      {
        title: "Kebabs & Starters",
        items: [
          { id: "pb5", name: "Chicken Tikka", price: 249, isVeg: false },
          { id: "pb6", name: "Seekh Kebab", price: 229, isVeg: false },
          { id: "pb7", name: "Fish Fry", price: 269, isVeg: false },
          { id: "pb8", name: "Paneer 65", price: 199, isVeg: true },
        ],
      },
      {
        title: "North Indian",
        items: [
          { id: "pb9", name: "Chicken Korma", price: 279, isVeg: false, description: "Mild, nutty, creamy curry" },
          { id: "pb10", name: "Dal Makhani", price: 189, isVeg: true },
          { id: "pb11", name: "Butter Naan", price: 49, isVeg: true },
          { id: "pb12", name: "Phirni", price: 79, isVeg: true, description: "Creamy ground-rice pudding" },
        ],
      },
    ],
  },

  /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 17. Bawarchi â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  "bawarchi": {
    menu: [
      {
        title: "Biryani",
        items: [
          { id: "bw1", name: "Chicken Biryani (Full)", price: 300, isVeg: false, description: "Iconic Bawarchi-style biryani with raita & salan" },
          { id: "bw2", name: "Mutton Biryani (Full)", price: 420, isVeg: false },
          { id: "bw3", name: "Special Egg Biryani", price: 240, isVeg: false },
          { id: "bw4", name: "Veg Biryani", price: 200, isVeg: true },
        ],
      },
      {
        title: "Tandoor & Kebabs",
        items: [
          { id: "bw5", name: "Tandoori Chicken (Full)", price: 449, isVeg: false },
          { id: "bw6", name: "Reshmi Kebab", price: 239, isVeg: false, description: "Creamy minced chicken kebab" },
          { id: "bw7", name: "Chicken Boti", price: 219, isVeg: false },
        ],
      },
      {
        title: "Chinese & Mughlai",
        items: [
          { id: "bw8", name: "Chicken Manchurian", price: 229, isVeg: false },
          { id: "bw9", name: "Chilli Paneer", price: 189, isVeg: true },
          { id: "bw10", name: "Mutton Korma", price: 299, isVeg: false, description: "Rich Mughlai-style gravy" },
          { id: "bw11", name: "Shahi Tukda", price: 89, isVeg: true, description: "Royal bread pudding with rabdi" },
        ],
      },
    ],
  },

  /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 18. Wow! China â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  "wow! china": {
    menu: [
      {
        title: "Starters",
        items: [
          { id: "wc1", name: "Chicken Lollipop (6 pcs)", price: 219, isVeg: false, description: "Crispy batter-fried drumettes" },
          { id: "wc2", name: "Veg Spring Rolls (4 pcs)", price: 149, isVeg: true },
          { id: "wc3", name: "Dragon Paneer", price: 199, isVeg: true, description: "Fiery chilli-garlic paneer" },
          { id: "wc4", name: "Chicken Momos (8 pcs)", price: 179, isVeg: false },
          { id: "wc5", name: "Crispy Honey Chicken", price: 249, isVeg: false },
        ],
      },
      {
        title: "Noodles & Rice",
        items: [
          { id: "wc6", name: "Hakka Noodles", price: 159, isVeg: true },
          { id: "wc7", name: "Chicken Fried Rice", price: 189, isVeg: false },
          { id: "wc8", name: "Schezwan Chicken Noodles", price: 209, isVeg: false },
          { id: "wc9", name: "Burnt Garlic Veg Rice", price: 179, isVeg: true },
        ],
      },
      {
        title: "Beverages",
        items: [
          { id: "wc10", name: "Iced Tea (Lemon)", price: 79, isVeg: true },
          { id: "wc11", name: "Blue Lagoon Mocktail", price: 109, isVeg: true },
          { id: "wc12", name: "Cold Coffee", price: 99, isVeg: true },
        ],
      },
    ],
  },

  /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 19. Baskin Robbins â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  "baskin robbins - ice cream desserts": {
    menu: [
      {
        title: "Ice Cream Scoops",
        items: [
          { id: "br1", name: "Mississippi Mud (Scoop)", price: 149, isVeg: true, description: "Chocolate ice cream, brownie bits, fudge swirl" },
          { id: "br2", name: "Pralines & Cream (Scoop)", price: 149, isVeg: true },
          { id: "br3", name: "Very Berry Strawberry (Scoop)", price: 139, isVeg: true },
          { id: "br4", name: "Gold Medal Ribbon (Scoop)", price: 149, isVeg: true, description: "Vanilla, chocolate & caramel ribbon" },
          { id: "br5", name: "Mango Tango (Scoop)", price: 139, isVeg: true },
        ],
      },
      {
        title: "Sundaes",
        items: [
          { id: "br6", name: "Hot Fudge Sundae", price: 229, isVeg: true, description: "Vanilla ice cream, hot fudge, whipped cream, cherry" },
          { id: "br7", name: "Banana Royale", price: 269, isVeg: true },
          { id: "br8", name: "Brownie Sundae", price: 249, isVeg: true },
        ],
      },
      {
        title: "Shakes & Tubs",
        items: [
          { id: "br9", name: "Chocolate Milkshake", price: 199, isVeg: true },
          { id: "br10", name: "Cookies & Cream Shake", price: 219, isVeg: true },
          { id: "br11", name: "Party Pack (750ml)", price: 449, isVeg: true, description: "Choose any flavour" },
          { id: "br12", name: "Family Pack (1L)", price: 549, isVeg: true },
        ],
      },
    ],
  },

  /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 20. Starbucks Coffee â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  "starbucks coffee": {
    menu: [
      {
        title: "Hot Coffees",
        items: [
          { id: "sb1", name: "CaffÃ¨ Americano", price: 275, isVeg: true, description: "Rich espresso with hot water" },
          { id: "sb2", name: "CaffÃ¨ Latte", price: 325, isVeg: true, description: "Espresso with steamed milk" },
          { id: "sb3", name: "Cappuccino", price: 305, isVeg: true },
          { id: "sb4", name: "Caramel Macchiato", price: 375, isVeg: true, description: "Vanilla, steamed milk, espresso, caramel drizzle" },
          { id: "sb5", name: "Java Chip Frappuccino", price: 395, isVeg: true, description: "Mocha, chocolate chips, whipped cream" },
        ],
      },
      {
        title: "Cold Coffees & Teas",
        items: [
          { id: "sb6", name: "Iced CaffÃ¨ Mocha", price: 355, isVeg: true },
          { id: "sb7", name: "Cold Brew", price: 325, isVeg: true, description: "Slow-steeped 20 hours for smooth flavour" },
          { id: "sb8", name: "Matcha Green Tea Latte", price: 345, isVeg: true },
          { id: "sb9", name: "Iced Chai Tea Latte", price: 305, isVeg: true },
        ],
      },
      {
        title: "Food & Snacks",
        items: [
          { id: "sb10", name: "Chocolate Croissant", price: 275, isVeg: true },
          { id: "sb11", name: "Chicken Kathi Roll", price: 325, isVeg: false },
          { id: "sb12", name: "Blueberry Muffin", price: 295, isVeg: true },
          { id: "sb13", name: "Chilli Cheese Toast", price: 265, isVeg: true },
          { id: "sb14", name: "Red Velvet Cake (Slice)", price: 365, isVeg: true },
        ],
      },
    ],
  },
};

export default mockMenuData;
