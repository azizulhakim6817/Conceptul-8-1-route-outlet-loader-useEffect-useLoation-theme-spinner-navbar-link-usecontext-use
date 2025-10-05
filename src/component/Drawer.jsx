import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Drawer = () => {
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="">
            <span className="text-xl font-bold cursor-pointer hover:text-blue-600">
              {" "}
              Profile
            </span>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <Link className="font-bold">Profile</Link>
            </li>
            <li>
              <Link className="font-bold">Privacy & Policy</Link>
            </li>
            <li>
              <Link className="font-bold">Terms & Condition</Link>
            </li>
            <li>
              <div className="flex gap-2  items-center">
                <LogOut className="text-rose-600 font-bold"/>
                <Link className="text-rose-600 text-[18px] font-bold">
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
