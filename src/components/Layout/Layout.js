import React, { Suspense } from "react";
import Carts from "../Ui/Cart/carts";
import Routers from "../../routes/Routers";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";

const Header = React.lazy(() => import("../Header/Header"));
const Footer = React.lazy(() => import("../Footer/Footer"));

const SuspenseLoading = ({ children }) => (
  <Suspense fallback={<Loading />}>{children}</Suspense>
);
export default function Layout() {
  const { cartVisible } = useSelector((state) => state.uiVisible);

  return (
    <>
      <SuspenseLoading>
        <Loading show={true} />
        <Header />
        {cartVisible && <Carts />}
        <Routers />
        <Footer />
      </SuspenseLoading>
    </>
  );
}
