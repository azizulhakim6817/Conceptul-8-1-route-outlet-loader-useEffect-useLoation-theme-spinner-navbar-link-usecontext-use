import { NavLink, Link } from "react-router-dom";
import ThemeToggle from "../component/ThemeToggle";
import logo from "../assets/azizul_hakim.png";
import { ShoppingCart } from "lucide-react";

import { useContext } from "react";
import { CartContext } from "../Proviters/CartContext";

const Navbar = () => {
  const { cart, setCart } = useContext(CartContext);
  //const { cart, setCart } = useContext(CartContext);
  //console.log(constextValue);

  return (
    <div className="navbar px-4 lg:px-8 flex items-center justify-center bg-base-100 shadow-xs">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-bold" : "text-gray-600"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `font-bold ${isActive ? "text-blue-600" : "text-gray-600"}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${isActive ? "text-blue-600" : "text-gray-600"}`
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${isActive ? "text-blue-600" : "text-gray-600"}`
                }
                to="/dashboard"
              >
                Dashboar
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-2 px-3 font-bold text-center text-2xl">
          <img
            className="hidden lg:block h-[40px] w-[40px] rounded-full"
            src={logo}
            alt=""
          />
          <h1 className="hidden lg:block">Azizul Hakim</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-600"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-blue-600" : "text-gray-600"}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-blue-600" : "text-gray-600"}`
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-blue-600" : "text-gray-600"}`
              }
              to="/dashboard"
            >
              Dashboar
            </NavLink>
          </li>
         
        </ul>
      </div>

      <div className="navbar-end">
        <Link to="/cart-plants" className="relative mr-8">
          <ShoppingCart size={26} />
          <p className="absolute top-[-14px] left-6 font-bold text-[18px] text-orange-600">
            {cart ? cart.length : 0}
          </p>
        </Link>

        <ThemeToggle className="text-center" />
        <Link className="ml-6 btn btn-primary">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
