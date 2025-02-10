import { RootState } from "../../redux";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa"; 
import { removeFromCart } from "../../redux/features/cart-slice ";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.value);

  const handleDelete = (itemId: number) => {
    dispatch(removeFromCart(itemId)); 
  };

  return (
    <>
      {cart.length === 0 ? (
        <div className="container min-h-[80vh] flex flex-col gap-10 text-center justify-center items-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/008/515/488/small_2x/empty-cart-flat-illustration-concept-vector.jpg"
            alt="cart empty"
          />
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 text-white bg-violet-700 rounded-lg shadow-lg hover:bg-red transition duration-200"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left">Product Name</th>
                <th className="px-6 py-3 text-left">Price</th>
                <th className="px-6 py-3 text-left">Rating</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-3">{item.title}</td>
                  <td className="px-6 py-3">${item.price}</td>
                  <td className="px-6 py-3">{item.rating}</td>
                  <td className="px-6 py-3">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-800 transition duration-200"
                    >
                      <FaTrash size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Cart;
