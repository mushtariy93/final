import {} from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { useNavigate } from "react-router-dom";
import Products from "../../components/products/Products";

const Wishlist = () => {
  const navigate = useNavigate();
  const wishlist = useSelector((state: RootState) => state.wishlist.value);
  return (
    <>
      {wishlist.length === 0 ? (
        <div className="container min-h-[80vh] flex flex-col gap-10 text-center justify-center items-center">
          <img
            src="https://printmont.com/img/no_wish_list.png"
            alt="wishlist empty"
          />
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 text-white bg-violet-700 rounded-lg shadow-lg hover:bg-orange-600 transition duration-200"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <Products items={wishlist} />
      )}
    </>
  );
};

export default Wishlist;
