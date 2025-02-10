import { useGetProductsQuery } from "../../redux/api/product-api";
import { IProduct, ProductsProps } from "../../types";
import { useNavigate } from "react-router-dom";
import { Eye } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { toggleLike } from "../../redux/features/wishlist-slice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FC } from "react";
import { toggleCart } from "../../redux/features/cart-slice ";

const Products: FC<ProductsProps> = ({ items }) => {
  const { data, isLoading } = useGetProductsQuery({ limit: 8 });
  const wishlist = useSelector((state: RootState) => state.wishlist.value);
  const cart = useSelector((state: RootState) => state.cart.value); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = items || data?.products || [];

 

  if (isLoading)
    return (
      <div className="mx-auto flex items-center justify-center h-[100px]">
        <div className="relative w-12 h-12">
          <div className="absolute w-full h-full border-4 border-lime-500 rounded-full animate-spin border-t-transparent"></div>
          <div className="absolute w-full h-full border-4 border-lime-500 rounded-full animate-spin border-b-transparent delay-300"></div>
        </div>
      </div>
    );

  const productItems = products.map((product: IProduct) => (
    <div key={product.id} className="w-[270px] h-[322px] relative group">
      <div className="h-[250px] bg-[#F5F5F5] overflow-hidden relative">
        <img
          onClick={() => navigate(`product/${product.id}`)}
          className="w-full h-full object-cover cursor-pointer"
          src={product.images[0]}
          alt={product.title}
        />
        <button
          onClick={() => dispatch(toggleCart(product))}
          className="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-center 
                 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 
                 transition-all duration-300 ease-in-out"
          disabled={cart.some((item) => item.id === product.id)}
        >
          {cart.some((item) => item.id === product.id)
            ? "Added"
            : "Add To Cart"}
        </button>
      </div>

      <div className="pt-4 flex flex-col">
        <h2 className="truncate font-medium">{product.title}</h2>
      </div>

      <div className="flex gap-2 items-center">
        <p className="text-[#DB4444] font-medium">${product.price}</p>
        <div className="flex items-center">
          <span className="text-yellow-500">★★★★★</span>
          <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
        </div>
        <p className="font-medium">({product.stock})</p>
      </div>

      <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => dispatch(toggleLike(product))}
          className="text-2xl text-primary p-2 bg-white rounded-full shadow hover:bg-gray-200 transition-colors duration-300"
        >
          {wishlist?.some((item) => item.id === product.id) ? (
            <FaHeart className="w-6 h-6 text-red-500" />
          ) : (
            <FaRegHeart className="w-6 h-6 text-gray-500" />
          )}
        </button>
        <div className="p-2 bg-white rounded-full shadow">
          <Eye className="w-5 h-5 text-gray-600" />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container mt-[28px] grid grid-cols-4 gap-[30px]">
      {productItems}
    </div>
  );
};

export default Products;
