import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { toggleLike } from "../../redux/features/wishlist-slice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdOutlineChangeCircle } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { useGetProductByIdQuery } from "../../redux/api/product-api";

const Detail = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useGetProductByIdQuery(id);
  const [selectedSize, setSelectedSize] = useState("");
  const [Image, setImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const wishlist = useSelector((state: RootState) => state.wishlist.value);
  const dispatch = useDispatch();

  if (isLoading)
    return (
      <div className="mx-auto flex items-center justify-center h-[100px]">
        <div className="relative w-12 h-12">
          <div className="absolute w-full h-full border-4 border-lime-500 rounded-full animate-spin border-t-transparent"></div>
          <div className="absolute w-full h-full border-4 border-lime-500 rounded-full animate-spin border-b-transparent delay-300"></div>
        </div>
      </div>
    );

  if (!product) {
    return (
      <p className="text-center py-10 text-gray-500">Product not found.</p>
    );
  }

  if (error) {
    return (
      <p className="text-center py-10 text-red-500">Error loading product.</p>
    );
  }

  return (
    <div className="container mx-auto min-h-[80vh] py-36 px-4 flex flex-col lg:flex-row gap-10 justify-center">
      <div className="left flex flex-col sm:flex-row gap-4 items-center">
        <div className="flex sm:flex-col gap-6">
          {product?.images?.map((image: string, inx: number) => (
            <img
              onClick={() => setImage(inx)}
              key={image}
              src={image}
              alt="image"
              className="w-16 sm:w-28 h-16 sm:h-28 object-contain cursor-pointer border rounded-md transition-transform duration-300 transform hover:scale-110 hover:shadow-lg"
            />
          ))}
        </div>
        <div>
          <img
            src={product?.images?.[Image]}
            alt="Product"
            className="w-72 sm:w-96 h-72 sm:h-96 object-contain"
          />
        </div>
      </div>

      <div className="right w-full lg:w-1/2 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-semibold">{product?.title}</h1>
        <div className="flex items-center justify-center sm:justify-start mt-2">
          <div className="flex items-center">
            <span className="text-yellow-500">★★★★★</span>
            <span className="ml-2 text-sm text-gray-500">
              ({product.rating || 0})
            </span>
          </div>
          <p className="text-sm text-primary opacity-[50%]">
            ({product?.stock || 0} Reviews) |
            <span className="text-[#00FF66] opacity-[90%]"> In Stock</span>
          </p>
        </div>
        <p className="mt-4 text-2xl left-6">${product?.price}</p>
        <p className="mt-6 text-sm leading-[21px]">
          {product?.description}
        </p>{" "}
        <div className="mt-4">
          <h3 className="font-semibold">Size:</h3>
          <div className="flex gap-2 mt-2">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 border rounded-lg hover:bg-gray-200 transition-all duration-200 ${
                  selectedSize === size ? "bg-red-500 text-white" : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex items-center border rounded-md px-4 py-2">
            <button
              className="text-2xl font-bold"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            <span className="px-4 text-2xl">{quantity}</span>
            <button
              className="text-2xl font-bold"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <button className="bg-red-500 text-white px-12 py-3 rounded-md w-full sm:w-auto">
            Buy Now
          </button>
          <button
            onClick={() => dispatch(toggleLike(product))}
            className="border px-4 py-3 rounded-md text-2xl"
          >
            {wishlist?.some((item) => item.id === product?.id) ? (
              <FaHeart />
            ) : (
              <FaRegHeart />
            )}
          </button>
        </div>
        <div className="mt-6 border pt-4 border-gray-500 rounded p-4">
          <div className="flex items-center gap-3 mb-4">
            <TbTruckDelivery className="text-3xl" />
            <div>
              <h2 className="font-semibold">Free Delivery</h2>
              <p className="text-sm text-gray-600">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
          <hr className="border-black my-2" />
          <div className="flex items-center gap-3">
            <MdOutlineChangeCircle className="text-3xl" />
            <div>
              <h2 className="font-semibold">Return Delivery</h2>
              <p className="text-sm text-gray-600">
                Free 30 Days Delivery Returns.{" "}
                <span className="underline cursor-pointer">Details</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
