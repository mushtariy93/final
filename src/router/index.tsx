import { SuspenseContainer } from "@/config";
import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Detail from "../pages/detail/Detail";
import Auth from "../pages/auth/Auth";
import Profile from "../pages/profile/Profile";
import SignIn from "../pages/auth/sign-in/SingIn";

const Home = lazy(() => import("../pages/home/Home"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const About = lazy(() => import("../pages/about/About"));
const SignUp = lazy(() => import("../pages/auth/sign-up/SignUp"));
const Cart = lazy(() => import("../pages/cart//Cart"));
const Wishlist = lazy(() => import("../pages/wishlist/Wishlits"));
const NotFound = lazy(() => import("../pages/not-found/NotFound"));

const Routers = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <SuspenseContainer>
          <Layout />
        </SuspenseContainer>
      ),
      children: [
        {
          path: "/",
          element: (
            <SuspenseContainer>
              <Home />
            </SuspenseContainer>
          ),
        },
        {
          path: "/contact",
          element: (
            <SuspenseContainer>
              <Contact />
            </SuspenseContainer>
          ),
        },
        {
          path: "/about",
          element: (
            <SuspenseContainer>
              <About />
            </SuspenseContainer>
          ),
        },
        {
          path: "signUp",
          element: (
            <SuspenseContainer>
              <SignUp />
            </SuspenseContainer>
          ),
        },
        {
          path: "/cart",
          element: (
            <SuspenseContainer>
              <Cart />
            </SuspenseContainer>
          ),
        },
        {
          path: "/wishlist",
          element: (
            <SuspenseContainer>
              <Wishlist />
            </SuspenseContainer>
          ),
        },
        { path: "product/:id", element: <Detail /> },
        {
          path: "auth",
          element: <Auth />,
          children: [{ path: "account", element: <Profile /> }],
        },
        { path: "signin", element: <SignIn /> },

        {
          path: "*",
          element: (
            <SuspenseContainer>
              <NotFound />
            </SuspenseContainer>
          ),
        },
      ],
    },
  ]);

  return routes;
};

export default Routers;
