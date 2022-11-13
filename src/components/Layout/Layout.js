import React, { Suspense } from "react";
import Carts from "../Ui/Cart/carts";
import Routers from "../../routes/Routers";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import UseAuthListener from "../../Hooks/AuthListner";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/user";

const Header = React.lazy(() => import("../Header/Header"));
const Footer = React.lazy(() => import("../Footer/Footer"));

const SuspenseLoading = ({ children }) => (
  <Suspense fallback={<Loading />}>{children}</Suspense>
);
export default function Layout() {
  const dispatch = useDispatch();
  const { cartVisible } = useSelector((state) => state.uiVisible);
  const user = UseAuthListener();
  useEffect(() => {
    if (user.user) {
      dispatch(
        setUser({
          displayName: user.user.displayName,
          photoURL: user.user.photoURL,
        })
      );
    } else {
      dispatch(setUser(user.user));
    }
  }, [user, dispatch]);

  return (
    <>
      <SuspenseLoading>
        <Loading show={true} />
        <Header />
        {cartVisible && <Carts />}
        <Routers />
        <Footer />
        <Toaster />
      </SuspenseLoading>
    </>
  );
}
