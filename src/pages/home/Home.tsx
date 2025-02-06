import { RootState } from "@/redux";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "@/redux/features/counter-slice";
import { useGetProductsQuery } from "@/redux/api/product-api";
import { IProduct } from "@/types";

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const { data } = useGetProductsQuery(null);
  console.log(data);

  return (
    <div>
      <h2>Home {count}</h2>
      <button onClick={() => dispatch(increment())}>Click</button>
      <div>
       {
        data?.products?.map((products:IProduct)=>(
          <div key={products.id}>
            <img src={products.images?.[0]} alt={products.title} />
            <h3>{products.title}</h3>
          </div>
        ))
       }
      </div>
    </div>
  );
};

export default React.memo(Home);
