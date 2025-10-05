import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MinLayout from "./Layouts/MinLayout";
import Contact from "./pages/Contact";
import Dashboard from "./Layouts/Dashboard";
import Drawer from "./component/Drawer";
import PlantsDetails from "./component/PlantsDetails";
import axios from "axios";
import LoadingSpinner from "./component/LoadingSpinner";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MinLayout,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        index: true,
        path: "/",
        loader: () => axios("https://openapi.programming-hero.com/api/plants"),
        Component: Home,
      },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      {
        path: "plants-details/:id",
        /*     loader: ({ params }) =>
          axios(`https://openapi.programming-hero.com/api/plant/${params.id}`), */
        Component: PlantsDetails,
      },
      {
        path: "cart-plants",
        Component: Cart,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        path: "drawer",
        Component: Drawer,
      },
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
