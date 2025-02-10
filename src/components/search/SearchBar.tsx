import { Search, Heart, ShoppingCart, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const SearchBar = () => {
  return (
    <div className="flex items-center rounded-lg p-2 w-150">
      <div className="relative flex flex-row-reverse items-center bg-[#F5F5F5] flex-grow">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="outline-none pl-4 pr-10 py-1 w-full"
        />
        <Search className="absolute right-2 w-6 h-6 text-gray-500" />
      </div>

      <div className="flex items-center gap-4 ml-4">
        <NavLink to="/wishlist">
          <Heart className="w-8 h-8 text-gray-500 cursor-pointer hover:text-red-500 transition" />
        </NavLink>

        <NavLink to="/cart">
          <ShoppingCart className="w-8 h-8 text-gray-500 cursor-pointer hover:text-blue-500 transition" />
        </NavLink>

        <NavLink to="/profile">
          <User className="w-8 h-8 text-gray-500 cursor-pointer hover:text-green-500 transition" />
        </NavLink>
      </div>
    </div>
  );
};

export default SearchBar;
