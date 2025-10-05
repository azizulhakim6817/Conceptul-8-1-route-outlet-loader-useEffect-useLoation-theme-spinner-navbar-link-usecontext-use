import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../Proviters/CartContext";

//import axios from "axios";

const PlantsDetails = () => {
  const { cart, setCart } = useContext(CartContext);

  //* 1-staps: details-plans---loder --- App.js-file---useLoaderDate()---------
  /* const plants = useLoaderData();
  const plant = plants.data.plants; */

  //* 2-staps:----uselocation()---------------------
  const location = useLocation();
  const plant = location.state;
  //console.log(location);

  //* 3-staps: ----------useparams() + useEffecet(({}))-----------
  //const { id } = useParams();
  //const [plant, setPlant] = useState([]);
  //const { name, description, image, price, category } = plant;

  /*  useEffect(() => {
    axios(`https://openapi.programming-hero.com/api/plant/${id}`).then((data) =>
      setPlant(data.data.plants)
    );
  }, [id]); */

  return (
    <div>
      <div>
        <div className=" mt-10 px-4 mx-4 lg:mx-20 lg:px-10">
          <figure>
            <img
              className="w-full h-full lg:h-[250px] rounded-md object-cover"
              src={plant.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{plant.name}</h2>
            <p>{plant.description}</p>
            <p className="text-[18px] font-semibold">{plant.category}</p>
            <p className="mb-2 text-[18px] font-semibold">${plant.price}</p>
            <div className="card-actions">
              <button
                onClick={() => setCart((prev) => [...prev, location.state])}
                className="btn btn-warning px-20 text-[16px] font-bold text-white"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantsDetails;
