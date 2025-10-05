### Netlify Deploy Live Link : 
https://conceptual-8-1-react-router-loader.netlify.app/

### Github live Link : 
https://github.com/azizulhakim6817/Conceptul-8-1-route-outlet-loader-useEffect-useLoation-theme-spinner-navbar-link-usecontext-use

1. npm create vite@latest
2. npm install taiwindcss @tailwindcss/vite
3. npm install -D @daisyui/latest

--->Theme add ---> index.css **\*\***\*\*\***\*\***
@import "tailwindcss";
@plugin "daisyui" {
themes: light --default, dark --prefersdark, cupcake;
}

### 1. Navbar and Footer space --------------------------

# 1 App-router handling------------------

```js
import Home from "./pages/Home";
import About from "./pages/About";
import MinLayout from "./Layouts/MinLayout";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MinLayout,
    children: [
      { index: true, path: "/", Component: Home },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
```

# 2 MainLayout Navbar -> Outlet -- Footer ------------------

```js
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MinLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <main className="min-h-[calc(100vh-250px)]"></main>
      <Footer />
    </div>
  );
};

export default MinLayout;
```

2. shadow-md --- mx-Not space show --------------------------

```js
<div className="flex flex-col min-h-screen">
  <Navbar />
  <main className="flex-1 min-h-[calc(100vh-250px)]">
    <Outlet />
  </main>
  <Footer />
</div>;

export default App;
```

### 3. a-tag Browser reload ==> Link use -- is not browser reload --------------------------

---- npm i react-router-dom

```js
<li>
  <Link to="/contact">Contact</Link>
</li>
** Aginast use-----------
<li>
  <a href="/contact">Contact</a>
</li>
```

### 4. Extrention :

--> React Developer Tools

### 5. Single details page event handling-------------------

```js
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const PlantsDetails = () => {
  const { id } = useParams();

  const [plant, setPlant] = useState([]);
  console.log(plant);
  const { name, description, image, price, category } = plant;

  useEffect(() => {
    /* fetch(`https://openapi.programming-hero.com/api/plant/${id}`).then((res) =>
      res.json().then((data) => setPlant(data.plants))
    ) */
    axios(`https://openapi.programming-hero.com/api/plant/${id}`).then((data) =>
      setPlant(data.data.plants)
    );
  }, [id]);

  return (
    <div>
      <div>
        <div className=" mt-10 px-4 mx-20 lg:px-10">
          <figure>
            <img
              className="w-full h-[280px] rounded-md object-cover"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{name}</h2>
            <p>{description}</p>
            <p className="text-[18px] font-semibold">{category}</p>
            <p className="mb-2 text-[18px] font-semibold">${price}</p>
            <div className="card-actions justify-end">
              <Link to="/" className="btn btn-primary w-full">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantsDetails;
```

### 6 useNavigation() রিটার্ন করে একটা অবজেক্ট, যেমন:---------------------------

```js
{
  state: "loading" | "idle" | "submitting",
  location: {...},
  formAction: null,
  formMethod: null
}
```

যখনই তুমি কোনো route পরিবর্তন করো বা loader data লোড হয়, তখন state "loading" হয়।

সেই সময় <LoadingSpinner /> দেখানো হয়।

```js
const MinLayout = () => {
  const navigation = useNavigation(); // ✅ বানান ঠিক করা হলো
  console.log(navigation.state); // "idle", "loading", or "submitting"

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {navigation.state === "loading" ? (
        <LoadingSpinner />
      ) : (
        <main className="flex-1 min-h-[calc(100vh-250px)]">
          <Outlet />
        </main>
      )}

      <Footer />
    </div>
  );
};
export default MinLayout;
```

### 7 🧩 hydrateFallbackElement কী করে-----------------------

যখন তুমি React Router এর Data APIs (যেমন createBrowserRouter) ব্যবহার করো,
তখন hydrateFallbackElement হলো একটা fallback UI element,
যেটা render হয় যখন router hydrate হচ্ছে বা initial data লোড হচ্ছে।

```js
{
    path: "/",
    Component: MinLayout,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      { index: true, path: "/", Component: Home },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      {
        path: "plants-details/:id",
        loader: ({ params }) =>
          axios(`https://openapi.programming-hero.com/api/plant/${params.id}`),
        Component: PlantsDetails,
      },
    ],
  },
```

### 8. NavLink({isActive, isPending})

```js
<NavLink
  className={({ isActive }) =>
    isActive ? "text-blue-600 font-bold" : "text-gray-600"
  }
  to="/"
>
  Home
</NavLink>
```

### 8.2 🧭 ১️⃣ সংজ্ঞা (Definition)

useLocation() React Router থেকে আসে, এবং এটি একটি location object রিটার্ন করে, যেটাতে ব্রাউজারের বর্তমান URL সম্পর্কিত সব তথ্য থাকে।

# 1-- Terminal console.log()---------------------

```js
const location = useLocation();
console.log(location);
```

🧠 ৩️⃣ এটি যে অবজেক্ট দেয়:
useLocation() রিটার্ন করে নিচের মতো একটি object 👇

{
pathname: "/dashboard", // বর্তমান path (যেমন /home, /about)
search: "?id=42", // query string (যদি থাকে)
hash: "#section2", // hash (যদি থাকে)
state: null, // navigate করার সময় পাঠানো data
key: "abc123" // unique key
}

\*\* Terminla data ------------------
state : category : "Aquatic Plant"
description : "A sacred aquatic plant
with beautiful pink or white flowers. Symbolizes purity and grows in
still, shallow water.
" id : 29
image :
"https://i.ibb.co.com/4g4J0Tkj/lotus-min.jpg" name : "Lotus" price : 450

# 2 Add to Cark div-button-add state={plant}-------------

```js
<Link
  state={plant}
  to={`/plants-details/${id}`}
  className="btn btn-primary w-full"
>
  Buy Now
</Link>
```

```js
<button onClick={handlecClick} className="w-full btn bg-green-600 text-white">
  Visite Now
</button>
```

# 3-staps---<Link/> single data access to Plant-details.jsx----------

```js
const location = useLocation();
const plant = location.state;
console.log(location);
```

# 4. OR use <buttont/> ingle data access to Plant-details.jsx----------

```js
import { Link, useNavigate } from "react-router-dom";

const PlantCard = ({ plant }) => {
  const navigate = useNavigate();
  const { id, name, description, image, price, category } = plant;

  const handlecClick = () => {
    navigate(`/plants-details/${id}`, { state: plant });
  };

  return (
    <div>
      <div
        className="card shadow-xl dark:bg-white
       "
      >
        <figure>
          <img
            className="w-full h-[280px] object-cover"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
          <p>{description}</p>
          <p className="text-[18px] font-semibold">{category}</p>
          <p className="mb-2 text-[18px] font-semibold">${price}</p>
          <div className="card-actions justify-end">
            {/* <Link
              state={plant}
              to={`/plants-details/${id}`}
              className="btn btn-primary w-full"
            >
              Buy Now
            </Link> */}
            <button
              onClick={handlecClick}
              className="w-full btn bg-green-600 text-white"
            >
              Visite Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
```

### 9. Theme Controller ----------------------

```js
const ThemeToggle = () => {
  return (
    <div>
      <label className="swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" className="theme-controller" value="night" />

        {/* sun icon */}
        <svg
          className="swap-off h-9 w-9 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
        
        {/* moon icon */}
        
      </label>
    </div>
  );
};

export default ThemeToggle;
```

# Theme contrller used --(Navbar.jsx) ------------------

```js
<div className="navbar-end">
  <ThemeToggle className="text-center" />
  <Link className="ml-6 btn btn-primary">Login</Link>
</div>
```

### 10. Loadng (Loading state দিয়ে spinner/skeleton logic ) Key Improvements:

Loading state দিয়ে spinner/skeleton logic আলাদা করা।
Async/await ব্যবহার করে clean fetch logic।
Key = plant.id → React list render-এ ভালো practice।
Skeleton multiple cards বানানো → UI বেশি natural দেখাবে।

```js
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PlantCard = ({ plant }) => {
  const { id, name, description, image, price, category } = plant;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="card shadow-xl ">
          <figure>
            <img
              className="w-full h-[280px] object-cover"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{name}</h2>
            <p>{description}</p>
            <p className="text-[18px] font-semibold">{category}</p>
            <p className="mb-2 text-[18px] font-semibold">${price}</p>
            <div className="card-actions justify-end">
              <Link
                to={`/plants-details/${id}`}
                className="btn btn-primary w-full"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default PlantCard;
```

### 10 useContext()---- use --------------------------

# 1. Proviters ---> CartContext.jsx ---------

```js
import { createContext } from "react";
export const CartContext = createContext({});
```

# 2. MainLayout.jsx file-----------------------------

```js
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoadingSpinner from "../component/LoadingSpinner";
import { useState } from "react";
import { CartContext } from "../Proviters/CartContext";

//context------------
//export const CartContext = createContext({});

const MinLayout = () => {
  const navigation = useNavigation();
  //console.log(navigation.state); // "idle", "loading", or "submitting"

  //constext-state--------------------
  const [cart, setCart] = useState([]);

  return (
    <div className="flex flex-col min-h-screen">
      <CartContext.Provider value={{ cart, setCart }}>
        <Navbar />

        {navigation.state === "loading" ? (
          <LoadingSpinner />
        ) : (
          <main className="flex-1 min-h-[calc(100vh-250px)]">
            <Outlet />
          </main>
        )}

        <Footer />
      </CartContext.Provider>
    </div>
  );
};
export default MinLayout;
```

# 3. Navbar.jsx------------------------

```js
import { useContext } from "react";
import { CartContext } from "../Proviters/CartContext";

const Navbar = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
     <div className="navbar-end">
        <Link to="/cart-plants" className="relative mr-8">
          <ShoppingCart size={26} />
          <p className="absolute top-[-14px] left-6 font-bold text-[18px] text-orange-600">
            {cart ? cart.length : 0}
          </p>
        </Link
```

```js
<NavLink
  className={({ isActive }) => {
    isActive ? "bg-red-500" : "bg-amber-300";
  }}
  to="home"
>
  Click
</NavLink>
```

# 4. Others files used --------------------------

```js
import { useContext } from "react";
import { Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CartContext } from "../Proviters/CartContext";

const Cart = () => {
  const navigate = useNavigate();

  const { cart, setCart } = useContext(CartContext);
  const handleCartRemove = (id) => {
    const newCart = cart.filter((e) => e.id !== id);
    setCart(newCart);
    toast.success("Cart is detelete succesfull");
    if (!cart || cart.length === 0) {
      <div>
        <p>Emty data...</p>
      </div>;
    }

    navigate("/");
  };

  return (
    <div className="mt-8">
      {cart.map((item, i) => {
        return (
          <div
            key={i}
            className="mt-3 py-1 px-4  mx-4 lg:mx-8  flex justify-between items-center  border-1 rounded-md  border-gray-600 bg-gray-50"
          >
            <img className="w-10 h-10 rounded-md" src={item.image} alt="" />
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="text-[16px] font-semibold">{item.category}</p>
            <p className="text-xl font-bold">{item.price}</p>
            <button
              className=" cursor-pointer"
              onClick={() => handleCartRemove(item.id)}
            >
              <Trash size={20} className="text-red-600 " />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
```
