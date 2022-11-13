import React from "react";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loading from "../components/Loading/Loading";
const Home = React.lazy(() => import("../pages/Home"));
const AllFoods = React.lazy(() => import("../pages/AllFoods"));
const Cart = React.lazy(() => import("../pages/Cart"));
const Checkout = React.lazy(() => import("../pages/Checkout"));
const Contact = React.lazy(() => import("../pages/Contact"));
const FoodDetails = React.lazy(() => import("../pages/FoodDetails"));
const Login = React.lazy(() => import("../pages/Login"));
const Register = React.lazy(() => import("../pages/Register"));
const PageNotFound = React.lazy(() => import("../components/PageNotFound"));

const SuspenseLoading = ({ children }) => (
  <Suspense fallback={<Loading />}>{children}</Suspense>
);
export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route
        path="/home"
        element={
          <SuspenseLoading>
            <Home />
          </SuspenseLoading>
        }
      />
      <Route
        path="/cart"
        element={
          <SuspenseLoading>
            <Cart />
          </SuspenseLoading>
        }
      />
      <Route
        path="/all-foods"
        element={
          <SuspenseLoading>
            <AllFoods />
          </SuspenseLoading>
        }
      />
      <Route
        path="/checkout"
        element={
          <SuspenseLoading>
            <Checkout />
          </SuspenseLoading>
        }
      />
      {/* <Route
        path="/contact"
        element={
          <SuspenseLoading>
            <Contact />
          </SuspenseLoading>
        }
      /> */}
      <Route
        path="/all-foods/:id"
        element={
          <SuspenseLoading>
            <FoodDetails />
          </SuspenseLoading>
        }
      />
      <Route
        path="/login"
        element={
          <SuspenseLoading>
            <Login />
          </SuspenseLoading>
        }
      />
      <Route
        path="/register"
        element={
          <SuspenseLoading>
            <Register />
          </SuspenseLoading>
        }
      />
      <Route
        path="*"
        element={
          <SuspenseLoading>
            <PageNotFound />
          </SuspenseLoading>
        }
      />
    </Routes>
  );
}
