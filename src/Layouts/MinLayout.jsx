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
