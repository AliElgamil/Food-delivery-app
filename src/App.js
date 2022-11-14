import React from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";

function App() {
  const { lang } = useSelector((state) => state.lang);

  useMemo(() => {
    document.querySelector("html").setAttribute("lang", lang);
    document.dir = lang === "en" ? "ltr" : "rtl";
  }, [lang]);
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
