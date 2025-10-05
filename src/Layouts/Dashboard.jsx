import { Link } from "react-router-dom";
import Drawer from "../component/Drawer";
import { CircleUserRound, LogOut } from "lucide-react";
import logo from "../assets/azizul_hakim.png";
import ThemeToggle from "../component/ThemeToggle";

const Dashboard = () => {
  return (
    <div>
      <div className=" flex justify-between items-center w-full p-2 bg-gray-100">
        <Link className="flex justify-center items-center gap-2 px-3 font-bold text-center text-2xl">
          <img className="h-[40px] w-[40px] rounded-full" src={logo} alt="" />
          <h1>Azizul Hakim</h1>
        </Link>
        <input
          type="text"
          className="hidden md:block lg:ml-70 bg-white rounded-md px-2 py-2 outline-none"
          placeholder="Search..."
        />
        <div className="flex gap-6 justify-center items-center mr-2">
          <Drawer />
          <Link>
            <CircleUserRound size={30} />
          </Link>
        </div>
      </div>
      <div className="lg:flex h-screen">
        <div className="px-2 py-4 lg:py-8 w-screen lg:w-4/12 bg-gray-300 lg:bg-gray-100">
          <aside className="">
            <nav>
              <ul className="mx-4 flex lg:flex-col gap-4 justify-center items-center lg:items-start  ">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboar</Link>
                </li>
              </ul>
            </nav>
            <div className=" px-2 py-4 lg:py-8 hidden lg:h-screen lg:flex gap-2 ext-[28px]  items-center">
              <LogOut className="text-rose-600 font-bold" />
              <Link className="text-rose-600 t font-bold">Logout</Link>
            </div>
          </aside>
        </div>
        <div className="">
          <div className="text-center mt-4">
            <h1 className="text-2xl font-bold mt-10">Dashboard</h1>
            <p className="mx-4 text-[16px] text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque beatae necessitatibus eum aspernatur modi molestias
              quibusdam sapiente, voluptate, molestiae sit numquam expedita.
              Alias totam vero veritatis minus aliquid. Nostrum corrupti,
              dolorum tempora maiores nemo aliquid inventore repudiandae sed
              beatae vel!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
