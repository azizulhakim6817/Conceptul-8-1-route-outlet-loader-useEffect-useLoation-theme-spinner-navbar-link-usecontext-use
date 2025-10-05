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
