import PlantCard from "../component/PlantCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const plant = useLoaderData();
  const plants = plant.data.plants;

  /* const [plants, setPlant] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/plants").then((res) =>
      res.json().then((data) => setPlant(data.plants))
    );
  }, []); */

  return (
    <div>
      <div className="mt-16 mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
        {plants.map((plant, i) => (
          <PlantCard key={i} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default Home;
